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

export default function Preview() {
  const [localChildrens, setLocalChildrens] = useState<ReactNode[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setLocalChildrens([...childrens]);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <Theme radius="full">
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
        position="absolute"
        width="75%"
        height="75%"
        top="10%"
        left="12.5%"
        className="shadow bg-red-300 rounded-4xl"
      >
        {localChildrens}
      </Flex>
    </Theme>
  );
}
