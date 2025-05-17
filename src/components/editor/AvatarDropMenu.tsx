import { DropdownMenu, IconButton, Avatar, Switch } from "@radix-ui/themes";

import { ExitIcon, Pencil1Icon } from "@radix-ui/react-icons";

import { IAvatar } from "@/interfaces/User";

export default function AvatarDropMenu({avatar, darkMode, setDarkMode}: {avatar: IAvatar, darkMode: boolean, setDarkMode: (darkMode: boolean) => void}) {
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
        <DropdownMenu.Item
          onSelect={(e) => e.preventDefault()}
          tabIndex={-1}
          style={{ outline: "none" }}
        >
          <Switch
            size="2"
            checked={darkMode}
            onCheckedChange={setDarkMode}
            className="w-10 h-5"
          />
          Dark Mode
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
