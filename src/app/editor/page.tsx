'use client';

import { Theme } from "@radix-ui/themes";
import Preview from "@/components/editor/Preview";
import { useEffect, useState } from "react";
import LeftSideMenu from "@/components/editor/LeftSideMenu";

export default function Page() {
  const [darkMode] = useState<boolean>(false);
  
  useEffect(() => {
    // addChildren(image.render());
  }, []);
  
  return (
    <Theme appearance={darkMode ? "dark" : "light"} radius="full" className="h-[100vh] w-[100vw]">
      <div className={`flex flex-col w-[100%] h-[100%] gap-2 ` + (darkMode ? "bg-[#18191b]" : "")}>
        <Preview darkMode={darkMode}/>
        <LeftSideMenu darkMode={darkMode} />
      </div>
    </Theme>
  );
}