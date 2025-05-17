import { DropdownMenu, IconButton, Avatar } from "@radix-ui/themes";

import { CopyIcon, ExitIcon, Link1Icon, Pencil1Icon, RocketIcon, TrashIcon, UploadIcon } from "@radix-ui/react-icons";

import { IAvatar } from "@/interfaces/User";

export default function AvatarDropMenu({avatar}: {avatar: IAvatar}) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <IconButton variant="ghost" size="4">
          <Avatar
            src={avatar.image}
            fallback={_avatarFallback(avatar.name)}
            size="3"
          />
        </IconButton>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Item color="indigo">
          <Pencil1Icon width="16" height="16" />
          Edit Profile
        </DropdownMenu.Item>
        <DropdownMenu.Item color="red">
          <ExitIcon width="16" height="16" />
          Disconnect
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
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
