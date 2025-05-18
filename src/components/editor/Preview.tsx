"use client";

import { Box } from "@radix-ui/themes";
import React, { ReactNode, useEffect, useState } from "react";


let childrens: ReactNode[] = [];

export function addChildren(child: ReactNode) {
  childrens = [...childrens, child];
}

export function removeChildren() {
  childrens = [];
}

export default function Preview({darkMode}: {darkMode: boolean}) {
  const [localChildrens, setLocalChildrens] = useState<ReactNode[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setLocalChildrens([...childrens]);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      m="4"
      mt="0"
      p="4"
      pr="8"
      pl="8"
      width={"75vw"}
      height={"fit-content"}
      maxHeight={"fit-content"}
      maxWidth={"75vw"}
      className={`shadow rounded-4xl translate-x-[12.5vw] translate-y-[10vh] pb-[100vh] bg-white ` + (darkMode ? "shadow-[#395BC8]" : "")}
    >
      {localChildrens}
    </Box>
  );
}
