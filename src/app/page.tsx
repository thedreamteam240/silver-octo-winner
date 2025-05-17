'use client';

import { Flex, Theme } from "@radix-ui/themes";
import HeadNav from "@/components/editor/HeadNav";
import FootNav from "@/components/editor/FootNav";
import Preview from "@/components/editor/Preview";
import { useState } from "react";

export default function Page() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
    return (
      <Theme appearance={darkMode ? "dark" : "light"} radius="full" className="h-[100vh] w-[100vw]">
        <div className={`flex flex-col w-[100%] h-[100%] gap-2 ` + (darkMode ? "bg-[#18191b]" : "")}>
          <HeadNav darkMode={darkMode} setDarkMode={setDarkMode} />
          <FootNav darkMode={darkMode} />
          <Preview darkMode={darkMode}/>

        </div>
      </Theme>
    );
}
