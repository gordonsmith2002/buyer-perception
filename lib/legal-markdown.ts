import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import type { Node } from "unist";
import { visit } from "unist-util-visit";

export type LegalFrontMatter = {
  title: string;
  version: string;
  effective: string;
  slug: string;
};

export type LegalDocument = LegalFrontMatter & {
  html: string;
};

type HastNode = {
  type: string;
  tagName?: string;
  value?: string;
  properties?: Record<string, unknown>;
  children?: HastNode[];
};

type MdText = { type: "text"; value: string };
type MdHeading = {
  type: "heading";
  children: MdText[];
  data?: {
    id?: string;
    hProperties?: Record<string, string>;
  };
};

const HEADING_ID = /\s*\{#([^}]+)\}\s*$/;
const LINKABLE =
  /(privacy@buyerperception\.com|ico\.org\.uk|buyerperception\.com\/legal\/privacy)/g;

function remarkHeadingAnchors() {
  return (tree: Node) => {
    visit(tree, "heading", (node) => {
      const heading = node as unknown as MdHeading;
      const last = heading.children[heading.children.length - 1];
      if (!last || last.type !== "text") return;
      const match = last.value.match(HEADING_ID);
      if (!match) return;
      last.value = last.value.replace(HEADING_ID, "").trimEnd();
      if (last.value.length === 0) {
        heading.children.pop();
      }
      const id = match[1];
      heading.data = {
        ...heading.data,
        hProperties: {
          ...heading.data?.hProperties,
          id,
        },
        id,
      };
    });
  };
}

function classList(value: unknown): string[] {
  if (Array.isArray(value)) return value.map(String);
  if (value) return [String(value)];
  return [];
}

function isHeading(node: HastNode) {
  return node.type === "element" && /^h[1-6]$/.test(node.tagName ?? "");
}

function rehypeMarkContentsList() {
  return (tree: HastNode) => {
    const children = tree.children ?? [];
    const firstHeading = children.findIndex(isHeading);
    const index = children.findIndex(
      (node) => node.type === "element" && node.tagName === "ul",
    );
    if (index === -1) return;
    if (firstHeading !== -1 && index > firstHeading) return;
    const list = children[index];
    list.properties = {
      ...list.properties,
      className: [...classList(list.properties?.className), "legal-contents"],
    };
    children[index] = {
      type: "element",
      tagName: "nav",
      properties: { "aria-label": "Contents", className: ["legal-contents-nav"] },
      children: [list],
    };
  };
}

function rehypeWrapTables() {
  return (tree: Node) => {
    visit(tree, "element", (node, index, parent) => {
      const el = node as unknown as HastNode;
      const parentEl = parent as HastNode | undefined;
      if (el.tagName !== "table" || parentEl?.children == null || index == null) return;
      const parentClass = classList(parentEl.properties?.className);
      if (parentClass.includes("legal-table-wrap")) return;
      parentEl.children[index] = {
        type: "element",
        tagName: "div",
        properties: { className: ["legal-table-wrap"] },
        children: [el],
      };
    });
  };
}

function linkNode(href: string, text: string, extraClass?: string): HastNode {
  const className = ["legal-inline-link"];
  if (extraClass) className.push(extraClass);
  const isExternal = href.startsWith("http");
  return {
    type: "element",
    tagName: "a",
    properties: {
      href,
      className,
      ...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {}),
    },
    children: [{ type: "text", value: text }],
  };
}

function rehypeAutolinkLegal() {
  return (tree: Node) => {
    visit(tree, "text", (node, index, parent) => {
      const text = node as unknown as HastNode;
      const parentEl = parent as HastNode | undefined;
      if (parentEl?.children == null || index == null) return;
      if (parentEl.tagName === "a") return;
      const value = text.value ?? "";
      if (!LINKABLE.test(value)) {
        LINKABLE.lastIndex = 0;
        return;
      }
      LINKABLE.lastIndex = 0;
      const pieces: HastNode[] = [];
      let lastIndex = 0;
      value.replace(LINKABLE, (match: string, _g: string, offset: number) => {
        if (offset > lastIndex) {
          pieces.push({ type: "text", value: value.slice(lastIndex, offset) });
        }
        if (match.includes("@")) {
          pieces.push(linkNode(`mailto:${match}`, match, "legal-email"));
        } else if (match.startsWith("buyerperception.com/")) {
          pieces.push(linkNode(`/${match.replace("buyerperception.com/", "")}`, match));
        } else {
          pieces.push(linkNode(`https://${match}`, match));
        }
        lastIndex = offset + match.length;
        return match;
      });
      if (lastIndex < value.length) {
        pieces.push({ type: "text", value: value.slice(lastIndex) });
      }
      parentEl.children.splice(index, 1, ...pieces);
    });
  };
}

export function loadLegalDocument(relativePath: string): LegalDocument {
  const filePath = path.join(process.cwd(), relativePath);
  const raw = fs.readFileSync(filePath, "utf8");
  const parsed = matter(raw);
  const data = parsed.data as LegalFrontMatter;

  const html = remark()
    .use(remarkGfm)
    .use(remarkHeadingAnchors)
    .use(remarkRehype, { allowDangerousHtml: false })
    .use(rehypeMarkContentsList)
    .use(rehypeWrapTables)
    .use(rehypeAutolinkLegal)
    .use(rehypeStringify)
    .processSync(parsed.content)
    .toString();

  if (html.includes("[DATE]") || html.includes("{#") || html.includes("[If analytics")) {
    throw new Error("Legal HTML still contains placeholders or heading-id markup.");
  }

  return {
    title: data.title,
    version: data.version,
    effective: data.effective,
    slug: data.slug,
    html,
  };
}

export function loadPrivacyPolicy(): LegalDocument {
  return loadLegalDocument("content/legal/privacy-policy.md");
}

export function loadTerms(): LegalDocument {
  return loadLegalDocument("content/legal/terms-v1.md");
}
