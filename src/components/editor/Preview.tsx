"use client";

import { Flex, Theme } from "@radix-ui/themes";
import React, { ReactNode, useEffect, useState } from "react";


let childrens: ReactNode[] = [];

export function addChildren(child: ReactNode) {
  childrens = [...childrens, child];
}
export function removeChildren(child: ReactNode) {
  childrens = childrens.filter((c) => c !== child);
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
    <Flex
      display="flex"
      justify="center"
      align="center"
      gap="2"
      m="4"
      mt="0"
      p="4"
      pr="8"
      pl="8"
      className={`shadow rounded-4xl w-[75vw] h-[75vh] translate-x-[12.5vw] translate-y-[10vh] pb-[100vh] ` + (darkMode ? "shadow-[#395BC8]" : "")}
    >
      {localChildrens}
    </Flex>
  );
}
