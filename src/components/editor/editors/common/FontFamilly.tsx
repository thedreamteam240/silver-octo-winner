import { Button, DropdownMenu, Text } from "@radix-ui/themes";

import { Editor, EditorFont } from "@/types";
import { TextFontFamilly } from "../../components/Text/Text";


export default function FontFamillyEditor({name, value, onChange} : {name: string, value: TextFontFamilly, onChange: (value: TextFontFamilly) => void}) : Editor {
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
                <DropdownMenu.Item onClick={() => onChange(TextFontFamilly.SANS)}>
                    <p className="font-sans">
                        Sans
                    </p>
                </DropdownMenu.Item>
                <DropdownMenu.Item onClick={() => onChange(TextFontFamilly.SERIF)}>
                    <p className="font-serif">
                        Serif
                    </p>
                </DropdownMenu.Item>
                <DropdownMenu.Item onClick={() => onChange(TextFontFamilly.MONO)}>
                    <p className="font-mono">
                        Mono
                    </p>
                </DropdownMenu.Item>
            </DropdownMenu.Content>
        </DropdownMenu.Root>
      </span>
    );
}