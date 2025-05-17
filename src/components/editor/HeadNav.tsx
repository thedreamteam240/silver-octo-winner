"use client";

import { useState } from "react";

import { IconButton, Heading, Avatar, Flex, Theme, DropdownMenu, Button } from "@radix-ui/themes";

import { CopyIcon, HamburgerMenuIcon, Link1Icon, Pencil1Icon, RocketIcon, TrashIcon, UploadIcon } from "@radix-ui/react-icons";
import HeadTitle from "./HeadTitle";

interface IAvatar {
  name: string;
  image: string;
}

export default function HeadNav() {
  const [title, setTitle] = useState<string>("Untitled");
  const [avatar, setAvatar] = useState<IAvatar>({
    name: "John Doe",
    image: "https://example.com/avatar.jpg",
  });

  return (
    <Theme radius="full">
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
        className="shadow rounded-b-4xl translate-x-[-50%]"
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
          <IconButton variant="ghost" size="4">
            <Avatar
              src={avatar.image}
              fallback={_avatarFallback(avatar.name)}
              size="3"
            />
          </IconButton>
        </span>
      </Flex>
    </Theme>
  );
}

//////////////////////
// Private funtions //
//////////////////////

function _avatarFallback(name: string) {
  const initials = name
    .split(" ")
    .map((word) => word.charAt(0))
    .join("");
  return initials;
}
