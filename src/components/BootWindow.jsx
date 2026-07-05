import React from "react";
import GradientText from "./GradientText";

export default function BootWindow({ changeScreen }) {
  function Boot() {
    changeScreen("desktop");
  }
  return (
    <div
      className="bg-white/20 flex w-3xl rounded-xl justify-center items-center
   p-8"
    >
      <GradientText
        colors={["#5227FF", "#FF9FFC", "#B497CF"]}
        animationSpeed={8}
        showBorder={false}
        className="custom-class text-9xl"
      >
        JishOS
      </GradientText>
      <button
        onClick={Boot}
        className="
    group
    relative
    px-8 py-3
    rounded-2xl
    bg-white/10
    backdrop-blur-xl
    border border-white/20
    shadow-lg shadow-cyan-500/10
    overflow-hidden
    transition-all duration-300
    hover:scale-105
    hover:bg-white/15
    hover:shadow-cyan-400/30
    active:scale-95
  "
      >
        {/* Glow */}
        <div
          className="
          absolute inset-0
          opacity-0
          group-hover:opacity-100
          transition-opacity duration-300
          bg-linear-to-r
          from-cyan-400/10
          via-blue-500/20
          to-violet-500/10
        "
        />

        <span
          className="
    relative
    flex items-center gap-3
    text-white font-semibold tracking-wide
  "
        >
          <svg
            className="w-5 h-5 text-cyan-300 group-hover:rotate-180 transition-transform duration-700"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 2v10m6.36-6.36a9 9 0 11-12.72 0"
            />
          </svg>
          Boot JishOS
        </span>
      </button>
    </div>
  );
}
