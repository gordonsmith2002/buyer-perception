import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Buyer Perception";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadAsset(relativePath: string) {
  return readFile(join(process.cwd(), relativePath));
}

export default async function OgImage() {
  const [regularFont, semiBoldFont, markBytes] = await Promise.all([
    loadAsset("public/fonts/Inter-Regular.ttf"),
    loadAsset("public/fonts/Inter-SemiBold.ttf"),
    loadAsset("public/images/logo-mark-sand.svg"),
  ]);
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
          backgroundColor: "#383637",
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
              "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(177, 105, 79, 0.16) 0%, transparent 70%)",
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
              "linear-gradient(90deg, transparent 8%, #B1694F 50%, transparent 92%)",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 24,
            padding: "0 64px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 22,
            }}
          >
            <img src={markSrc} width={72} height={120} alt="" />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 4,
              }}
            >
              <div
                style={{
                  fontSize: 64,
                  fontWeight: 600,
                  color: "#EFEFEF",
                  letterSpacing: "-0.03em",
                  lineHeight: 1.05,
                }}
              >
                Buyer
              </div>
              <div
                style={{
                  fontSize: 64,
                  fontWeight: 600,
                  color: "#EFEFEF",
                  letterSpacing: "-0.03em",
                  lineHeight: 1.05,
                }}
              >
                Perception
              </div>
            </div>
          </div>
          <div
            style={{
              width: 72,
              height: 4,
              backgroundColor: "#B1694F",
              borderRadius: 2,
            }}
          />
          <div
            style={{
              fontSize: 28,
              fontWeight: 400,
              color: "#DFD1B7",
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
        {
          name: "Inter",
          data: semiBoldFont,
          style: "normal",
          weight: 600,
        },
      ],
    }
  );
}
