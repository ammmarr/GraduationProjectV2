import MainBackground from "@/assets/MainBackground";
import DisplaySign from "@/components/custom/DisplaySign";
import HowToUSe from "@/components/custom/HowToUse";
import Keyboard from "@/components/custom/Keyboard";
import Navbar from "@/components/custom/Navbar";
import SignToText from "@/components/custom/SignToText";
import TabComponent from "@/components/custom/TabComponent";
import TextToSign from "@/components/custom/TextToSign";
import React from "react";

const MainLayout = () => {
  const [activeTabId, setActiveTabId] = React.useState("ar-to-sign");
  return (
    <>
      <MainBackground />
      <Navbar />
      <div className="relative max-w-screen-2xl mx-auto flex flex-col items-center justify-center pt-[100px]">
        <h1 className="text-6xl text-[#19156C] mt-4 mb-4">
          لوحة مفاتيح لغة الاشارة العربية
        </h1>
        <h2 className="text-3xl text-[#A9A9A9] mb-4">
          انقر علي الحرف لعرض الاشارة
        </h2>
        <div className="flex flex-col items-center justify-center w-full max-w-[1200px] gap-10 backdrop-blur-sm rounded-3xl p-16 bg-white/50 mb-16">
          <HowToUSe />
          {/* <TabComponent
            activeTabId={activeTabId}
            onTabChange={setActiveTabId}
          /> */}
          {/* <SignToText /> */}

          {/* <TextToSign /> */}
          {/* <DisplaySign /> */}
          {/* <Keyboard /> */}
        </div>
      </div>
    </>
  );
};

export default MainLayout;
