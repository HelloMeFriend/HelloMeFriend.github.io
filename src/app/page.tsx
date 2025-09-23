"use client";
import TextButton from "./components/textButton";
import IconTab from "./components/content/iconTab";
import AboutMe from "./components/content/aboutMe";
import Experience from "./components/content/experience";
import HomeContent from "./components/content/home";
import BackIcon from "./components/backIcon";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [activeSection, setActiveSection] = useState<
    "home" | "about" | "resume" | "experience"
  >("home");

  const renderContent = () => {
    switch (activeSection) {
      case "about":
        return <AboutMe />;
      case "experience":
        return <Experience />;
      case "home":
        return <HomeContent />;
      default:
        return <HomeContent />;
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 relative px-4 py-8">
      <div className="relative w-full max-w-6xl">
        {activeSection !== "home" && (
          <div className="mb-20 z-30 relative">
            <BackIcon onClick={() => setActiveSection("home")} />
          </div>
        )}

        <motion.div
          key={activeSection}
          initial={{ y: -400, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 30, damping: 18 }}
          className="w-full h-auto min-h-[400px] md:min-h-[500px] lg:min-h-[653px] flex flex-col justify-between items-center p-4 md:p-6 lg:p-10 border border-black/15 shadow-md bg-[#f0e4be]/90 relative z-10"
          style={{ borderRadius: "4px" }}
        >
          <motion.img
            src={"/Hand3.png"}
            alt="Hand"
            initial={false}
            animate={activeSection === "home"}
            transition={{ type: "spring", stiffness: 30, damping: 18 }}
            className="absolute left-1/2 -translate-x-1/2 -top-[340px] sm:-top-[400px] md:-top-[500px] lg:-top-[640px] z-20 w-[250px] sm:w-[350px] md:w-[400px] lg:w-[500px] pointer-events-none"
          />

          <div className="w-full flex flex-row justify-between items-start mb-4 md:mb-6 lg:mb-0">
            <TextButton onClick={() => setActiveSection("about")}>
              About Me
            </TextButton>
            <TextButton onClick={() => setActiveSection("experience")}>
              Experience
            </TextButton>
          </div>

          <div className="w-full flex flex-col justify-center items-center align-middle flex-1">
            {renderContent()}
          </div>

          <div className="w-full md:px-30 lg:px-60 mt-4 md:mt-6 lg:mt-0">
            <IconTab />
          </div>
        </motion.div>
      </div>
    </div>
  );
}