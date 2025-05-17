import { AlertDialog, Button, Text, TextField, Theme, Tooltip } from "@radix-ui/themes";
import { IconButton } from "@radix-ui/themes";

import { ImageIcon, MagnifyingGlassIcon, UploadIcon } from "@radix-ui/react-icons";

export default function PicturesPicker() {
    return (
      <Theme radius="large">
        <AlertDialog.Root>
          <AlertDialog.Trigger>
            <Tooltip content="Import Pictures">
              <IconButton variant="ghost" size="4">
                <ImageIcon width="22" height="22" />
              </IconButton>
            </Tooltip>
          </AlertDialog.Trigger>
          <AlertDialog.Content>
            <AlertDialog.Title className="flex items-center space-x-4">
              <ImageIcon width="22" height="22" />
              <span className="text-lg font-semibold">Import Pictures</span>
            </AlertDialog.Title>
            <AlertDialog.Description>
              You can import pictures from your local device or from the web.
            </AlertDialog.Description>
            <div className="flex flex-col gap-2 mt-4">
              <TextField.Root placeholder="Enter URL" size="2">
                <TextField.Slot>
                  <MagnifyingGlassIcon height="16" width="16" />
                </TextField.Slot>
              </TextField.Root>
              <Text align={"center"} size="2" color="gray">
                or
              </Text>
              <span className="border-2 border-dashed border-blue-500 w-fit h-fit rounded-2xl m-auto">
                <Button size="2" variant="soft" color="blue">
                  <UploadIcon width="22" height="22" />
                  Import from your device
                </Button>
              </span>
            </div>
            <div className="flex justify-between mt-8">
              <AlertDialog.Cancel>
                <Button size="2" variant="outline" color="red">
                  Cancel
                </Button>
              </AlertDialog.Cancel>
              <AlertDialog.Action>
                <Button size="2">Done</Button>
              </AlertDialog.Action>
            </div>
          </AlertDialog.Content>
        </AlertDialog.Root>
      </Theme>
    );
}