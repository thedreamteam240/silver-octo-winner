import { DropdownMenu, Button, Heading } from "@radix-ui/themes";

import { CopyIcon, Link1Icon, Pencil1Icon, RocketIcon, TrashIcon, UploadIcon } from "@radix-ui/react-icons";

import api from "@/lib/axios";

export default function HeadTitle({title, storyID}: {title: string, storyID: number}) {
    const deleteStory = async () => {
      try {
        api
          .delete(`/stories/${storyID}`)
          .then(() => {
            console.log("Story deleted");
            window.location.reload(); // Refresh the page after deletion
          })
          .catch((error: Error) => {
            console.error("Error deleting story:", error);
          });
      } catch (error) {
        console.error("Error deleting story:", error);
      }
    };
    return (
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
          <DropdownMenu.Item color="red" onClick={deleteStory}>
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
    );
}