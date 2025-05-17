import { Button, DropdownMenu, Text } from "@radix-ui/themes";

import { Editor } from "@/types";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function FontStyleEditor({ name, value, onChange }: { name: string, value: string, onChange: (value: string) => void }): Editor {
  return (
    <span>
      <Text>{name}</Text>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <Button>
            {value ?? "Select Color"}
          </Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Item>
            <p className="font-sans">
              Sans
            </p>
            <p className="font-serif">
              Serif
            </p>
            <p className="font-mono">
              Mono
            </p>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </span>
  );
}