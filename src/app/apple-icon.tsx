import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#000000",
          borderRadius: 40,
          border: "6px solid rgba(45, 212, 191, 0.35)",
          fontSize: 78,
          fontWeight: 700,
          letterSpacing: "-0.04em",
          fontFamily:
            "ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif",
        }}
      >
        <span style={{ color: "#2dd4bf" }}>J</span>
        <span style={{ color: "#ededed" }}>G</span>
      </div>
    ),
    { ...size },
  );
}
