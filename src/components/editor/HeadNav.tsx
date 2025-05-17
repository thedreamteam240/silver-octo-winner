"use client";

import { useState } from "react";

import { IconButton, Avatar, Flex, Theme } from "@radix-ui/themes";

import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import HeadTitle from "./HeadTitle";
import AvatarDropMenu from "./AvatarDropMenu";

interface IAvatar {
  name: string;
  image: string;
}

export default function HeadNav({darkMode, setDarkMode}: {darkMode: boolean, setDarkMode: (darkMode: boolean) => void}) {
  const [title, setTitle] = useState<string>("Untitled");
  const [avatar, setAvatar] = useState<IAvatar>({
    name: "John Doe",
    image: "https://example.com/avatar.jpg",
  });

  return (
    <Flex
      display="flex"
      justify="between"
      align="center"
      gap="2"
      m="4"
      mt="0"
      p="4"
      pr="8"
      pl="8"
      position="absolute"
      width="80%"
      top="0"
      left="50%"
      className={`shadow rounded-b-4xl translate-x-[-50%] ` + (darkMode ? "bg-[#18191b]" : "")}
    >
      <span>
        <IconButton variant="ghost" size="4">
          <HamburgerMenuIcon width="22" height="22" />
        </IconButton>
      </span>
      <span>
        <HeadTitle title={title} />
      </span>
      <span>
        <AvatarDropMenu
          avatar={avatar}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
      </span>
    </Flex>
  );
}
