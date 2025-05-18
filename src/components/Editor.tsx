import FootNav from "@/components/editor/FootNav";
import HeadNav from "@/components/editor/HeadNav";
import { useState } from "react";
import { Theme } from "@radix-ui/themes";
import Preview from "@/components/editor/Preview";
import LeftSideMenu from "@/components/editor/LeftSideMenu";

interface EditorProps {
  storyId: number;
}

export default function Editor({ storyId }: EditorProps) {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  console.log(storyId);

  return (
    <Theme appearance={darkMode ? "dark" : "light"} radius="full" className="h-[100vh] w-[100vw]">
      <div className={`flex flex-col w-[100%] h-[100%] gap-2 ` + (darkMode ? "bg-[#18191b]" : "")}>
        <HeadNav darkMode={darkMode} setDarkMode={setDarkMode} storyID={storyId} />
        <FootNav darkMode={darkMode} />
        <div className={`flex flex-col w-[100%] h-[100%] gap-2 ` + (darkMode ? "bg-[#18191b]" : "")}>
          <Preview darkMode={darkMode} />
        </div>
      </div>
    </Theme>
  );
}