"use client";

import { useState } from "react";

import FootNav from "@/components/editor/FootNav";
import HeadNav from "@/components/editor/HeadNav";
import { Theme } from "@radix-ui/themes";
import LeftSideMenu from "@/components/editor/LeftSideMenu";

export default function Test() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  return (
    <Theme appearance={darkMode ? "dark" : "light"} radius="full">
      <div className={`flex flex-col w-[100%] h-[100%] gap-2 ` + (darkMode ? "bg-[#18191b]" : "")}>
        <HeadNav darkMode={darkMode} setDarkMode={setDarkMode} />
        <FootNav darkMode={darkMode} />
        <LeftSideMenu editor={
          <span className="flex flex-col items-center justify-center w-full h-full">
            <br />
          </span>
        } />
      </div>
    </Theme>
  );
}