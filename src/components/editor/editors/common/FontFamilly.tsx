import { Button, DropdownMenu, Text } from "@radix-ui/themes";

import { Editor, EditorFont } from "@/types";

export default function FontFamillyEditor({name, value, onChange} : {name: string, value: EditorFont, onChange: (value: EditorFont) => void}) : Editor {
    return (
      <span className="flex flex-row justify-between items-center">
        <Text>{name}</Text>
        <DropdownMenu.Root>
            <DropdownMenu.Trigger>
                <Button>
                    {value ?? "Select Color"}
                </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
                <DropdownMenu.Item onClick={() => onChange("sans")}>
                    <p className="font-sans">
                        Sans
                    </p>
                </DropdownMenu.Item>
                <DropdownMenu.Item onClick={() => onChange("serif")}>
                    <p className="font-serif">
                        Serif
                    </p>
                </DropdownMenu.Item>
                <DropdownMenu.Item onClick={() => onChange("mono")}>
                    <p className="font-mono">
                        Mono
                    </p>
                </DropdownMenu.Item>
            </DropdownMenu.Content>
        </DropdownMenu.Root>
      </span>
    );
}