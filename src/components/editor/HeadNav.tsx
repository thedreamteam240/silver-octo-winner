"use client";

import { useState } from "react";

import { IconButton, Heading, Avatar, Flex, Theme, DropdownMenu, Button } from "@radix-ui/themes";

import { CopyIcon, HamburgerMenuIcon, Link1Icon, Pencil1Icon, RocketIcon, TrashIcon, UploadIcon } from "@radix-ui/react-icons";

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
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <Button variant="ghost">
                <Heading size="2" color="gray">
                  {title}
                </Heading>
                <DropdownMenu.TriggerIcon />
              </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              <DropdownMenu.Item color="indigo">
                <Pencil1Icon width="16" height="16" />
                Rename
              </DropdownMenu.Item>
              <DropdownMenu.Item color="cyan">
                <CopyIcon width="16" height="16" />
                Duplicate
              </DropdownMenu.Item>
              <DropdownMenu.Item color="red">
                <TrashIcon width="16" height="16" />
                Delete
              </DropdownMenu.Item>
              <DropdownMenu.Separator />
              <DropdownMenu.Sub>
                <DropdownMenu.SubTrigger>Share</DropdownMenu.SubTrigger>
                <DropdownMenu.SubContent>
                  <DropdownMenu.Item color="green">
                    <Link1Icon width="16" height="16" />
                    Link
                  </DropdownMenu.Item>
                  <DropdownMenu.Item color="blue">
                    <UploadIcon width="16" height="16" />
                    Export
                  </DropdownMenu.Item>
                  <DropdownMenu.Item color="orange">
                    <RocketIcon width="16" height="16" />
                    Deploy
                  </DropdownMenu.Item>
                </DropdownMenu.SubContent>
              </DropdownMenu.Sub>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
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
