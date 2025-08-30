"use client";
import TextButton from "./components/textButton";
import Icon from "./components/Icon";
import IconTab from "./components/content/iconTab"
import AboutMe from "./components/content/aboutMe";
import Experience from "./components/content/experience";
import HomeContent from "./components/content/home";
import BackIcon from "./components/backIcon";

import { useState } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState<"home" | "about" | "resume" | "experience">("home");

  const renderContent = () => {
    switch (activeSection) {
      case "about": return <AboutMe />;
      case "experience": return <Experience />;
      case "home": return <HomeContent />;
      default: return <HomeContent />;
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 relative">
      <div className="relative">
        {activeSection !== "home" && (
          <BackIcon onClick={() => setActiveSection("home")} />
        )}
        <div
          className="w-[1145px] h-[653px] flex flex-col justify-between items-center mt-25 p-10 border border-black/15 shadow-md bg-[#f0e4be]/90 relative z-10"
          style={{
            borderRadius: '4px 4px 4px 4px',
          }}
        >

          <img
            src={"/Hand3.png"}
            alt="Hand"
            className="absolute left-15/32 -translate-x-1/2 -top-[640px] z-20 w-[500px] pointer-events-none"
          />
          <div className="w-full flex flex-row justify-between items-start">
            <TextButton onClick={() => setActiveSection("about")}>About Me</TextButton>
            <TextButton onClick={() => setActiveSection("experience")}>Experience</TextButton>
          </div>
          <div className="w-full flex flex-col justify-center items-center align-middle">
            {renderContent()}
          </div>
          <IconTab />
        </div>
      </div>
    </div>
  );
}