'use client';

import { Flex, Theme } from "@radix-ui/themes";
import HeadNav from "@/components/editor/HeadNav";
import FootNav from "@/components/editor/FootNav";
import Preview, { addChildren } from "@/components/editor/Preview";
import { ReactNode, useEffect, useState } from "react";
import TextComponent from "@/components/editor/components/Text/Text";
import ImageComponent from "@/components/editor/components/Image";
import LeftSideMenu from "@/components/editor/LeftSideMenu";
import TextEditor from "@/components/editor/components/Text/TextEditor";

export default function Page() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const textId = crypto.randomUUID();
  // const image: ImageComponent = new ImageComponent(
  //   "https://picsum.photos/426/240",
  //   640,
  //   360,
  //   { x: 0, y: 0 }
  // );
  useEffect(() => {
    // addChildren(image.render());
  }
  , []);
    return (
      <Theme appearance={darkMode ? "dark" : "light"} radius="full" className="h-[100vh] w-[100vw]">
        <div className={`flex flex-col w-[100%] h-[100%] gap-2 ` + (darkMode ? "bg-[#18191b]" : "")}>
          <Preview darkMode={darkMode}/>
          <LeftSideMenu darkMode={darkMode} />
        </div>
      </Theme>
    );
}