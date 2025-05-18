"use client";

import { useEffect, useState } from "react";

import { IconButton, Flex } from "@radix-ui/themes";

import { HamburgerMenuIcon, HomeIcon } from "@radix-ui/react-icons";
import HeadTitle from "./HeadTitle";
import AvatarDropMenu from "./AvatarDropMenu";
import { useSession } from "next-auth/react";

interface IAvatar {
  name: string;
  image: string;
}

export default function HeadNav({darkMode, setDarkMode, storyID}: {darkMode: boolean, setDarkMode: (darkMode: boolean) => void, storyID: number}) {
  const [title, setTitle] = useState<string>("Untitled");
  const [avatar, setAvatar] = useState<IAvatar>({
    name: "John Doe",
    image: "https://example.com/avatar.jpg",
  });

  const { data } = useSession();

  const fetchStory = async () => {
    try {
      const response = await fetch(`/api/stories/${storyID}`);
      const data = await response.json();
      setTitle(data.title);
    } catch (error) {
      console.error("Error fetching story:", error);
    }
  };

  useEffect(() => {
    fetchStory();
    setAvatar({
      name: data?.user?.name || "John Doe",
      image: data?.user?.image || "https://example.com/avatar.jpg",})
  }, [storyID, data]);

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
      position="fixed"
      width="80%"
      top="0"
      left="50%"
      className={`shadow rounded-b-4xl z-20 translate-x-[-50%] ` + (darkMode ? "shadow-[#395BC8] bg-[#18191b]" : "bg-white")}
    >
      <span>
        <IconButton variant="ghost" size="4" onClick={() => window.document.location.href = "/"}>
          <HomeIcon width="22" height="22" />
        </IconButton>
      </span>
      <span>
        <HeadTitle title={title} storyID={storyID} />
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
