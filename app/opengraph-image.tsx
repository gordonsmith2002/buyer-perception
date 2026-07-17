import { ImageResponse } from "next/og";

export const alt = "Buyer Perception";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadSerifFont() {
  const response = await fetch(
    "https://fonts.gstatic.com/s/dmserifdisplay/v17/-nFnOHM81r4j6k0gjAW3mujVU2B2K_c.ttf"
  );
  if (!response.ok) {
    throw new Error("Failed to load DM Serif Display");
  }
  return response.arrayBuffer();
}

export default async function OgImage() {
  const fontData = await loadSerifFont();

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
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(177, 105, 79, 0.14) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 3,
            background:
              "linear-gradient(90deg, transparent 10%, #B1694F 50%, transparent 90%)",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 28,
          }}
        >
          <div
            style={{
              fontSize: 88,
              fontFamily: "DM Serif Display",
              color: "#EFEFEF",
              letterSpacing: "-0.03em",
              lineHeight: 1,
            }}
          >
            Buyer Perception
          </div>
          <div
            style={{
              width: 72,
              height: 4,
              backgroundColor: "#B1694F",
              borderRadius: 2,
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "DM Serif Display",
          data: fontData,
          style: "normal",
          weight: 400,
        },
      ],
    }
  );
}
