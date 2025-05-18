'use client';

import { AlertDialog } from "radix-ui";
import { Button } from "@radix-ui/themes";
import api from "@/lib/axios";

interface DeleteButtonProps {
  storyID: number;
}

export default function DeleteButton({ storyID }: DeleteButtonProps) {
  function handleDelete(storyID: number) {
    api.delete(`/stories/${storyID}`).then(() => {
      console.log("Story deleted");
      window.location.reload(); // Refresh the page after deletion
    }).catch((error: Error) => {
      console.error("Error deleting story:", error);
    });
  }
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger asChild>
        <Button size="3" variant="soft" color="red">Delete Story</Button>
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay className="fixed inset-0 bg-blackA6 data-[state=open]:animate-overlayShow" />
        <AlertDialog.Content className="fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-[500px] -translate-x-1/2 -translate-y-1/2 rounded bg-white p-[25px] shadow-[var(--shadow-6)] focus:outline-none data-[state=open]:animate-contentShow">
          <AlertDialog.Title className="m-0 text-[17px] font-medium">
            Are you absolutely sure?
          </AlertDialog.Title>
          <AlertDialog.Description className="mb-5 mt-[15px] text-[15px] leading-normal text-gray-600">
            This action cannot be undone. This will permanently delete your
            story and remove your data from our servers.
          </AlertDialog.Description>
          <div className="flex justify-end gap-[25px]">
            <AlertDialog.Cancel asChild>
              <Button variant="soft">Cancel</Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action asChild>
              <Button 
                color="red"
                onClick={() => handleDelete(storyID)}
              >
                Yes, delete story
              </Button>
            </AlertDialog.Action>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
}
