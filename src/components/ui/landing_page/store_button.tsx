import React from "react";
import appStoreSvg from "@/assets/svg/app_store_button.svg";
import playStoreSvg from "@/assets/svg/google_play_button.svg";

// Reusable single button component
const StoreButton = ({ href, src, alt }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: "inline-block",
      transition: "transform 0.2s",
      flex: "0 1 auto", // don't grow too much, can shrink
      minWidth: "120px", // minimum size
      maxWidth: "200px", // maximum size
    }}
    onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.05)")}
    onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
  >
    <img
      src={src}
      alt={alt}
      style={{
        width: "100%", // fills the flex item width
        height: "auto",
        display: "block",
      }}
    />
  </a>
);

// Main store buttons component
const StoreButtonsIT = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "16px",
        alignItems: "center",
        flexWrap: "nowrap", // always row
        justifyContent: "center",
        margin: "20px 0",
        // overflowX: "auto", // horizontal scroll if screen too small
        padding: "0 10px", // optional padding for small screens
      }}
    >
      {/* Google Play */}
      <StoreButton
        href="https://play.google.com/store/apps/details?id=your.app.id"
        src={playStoreSvg}
        alt="Scarica su Google Play"
      />

      {/* App Store */}
      <StoreButton
        href="https://apps.apple.com/app/idYOUR_APP_ID"
        src={appStoreSvg}
        alt="Scarica su App Store"
      />
    </div>
  );
};

export default StoreButtonsIT;
