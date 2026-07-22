import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt =
  "Buyer Perception — Find out what your buyers really think about you";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadAsset(relativePath: string) {
  return readFile(join(process.cwd(), relativePath));
}

export default async function OgImage() {
  const [regularFont, logoBytes, markBytes] = await Promise.all([
    loadAsset("public/fonts/Inter-Regular.ttf"),
    loadAsset("public/images/logo-inverted.svg"),
    loadAsset("public/images/logo-mark-sand.svg"),
  ]);
  const logoSrc = `data:image/svg+xml;base64,${logoBytes.toString("base64")}`;
  const markSrc = `data:image/svg+xml;base64,${markBytes.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#252626",
          position: "relative",
          fontFamily: "Inter",
        }}
      >
        <img
          src={markSrc}
          width={280}
          height={470}
          alt=""
          style={{
            position: "absolute",
            right: 40,
            bottom: -40,
            opacity: 0.1,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(185, 78, 48, 0.16) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 4,
            background:
              "linear-gradient(90deg, transparent 8%, #B94E30 50%, transparent 92%)",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 28,
            padding: "0 64px",
          }}
        >
          <img src={logoSrc} width={720} height={211} alt="Buyer Perception" />
          <div
            style={{
              width: 72,
              height: 4,
              backgroundColor: "#B94E30",
              borderRadius: 2,
            }}
          />
          <div
            style={{
              fontSize: 28,
              fontWeight: 400,
              color: "#E1D4C0",
              textAlign: "center",
              maxWidth: 720,
              lineHeight: 1.35,
            }}
          >
            Find out what your buyers really think about you
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Inter",
          data: regularFont,
          style: "normal",
          weight: 400,
        },
      ],
    }
  );
}
