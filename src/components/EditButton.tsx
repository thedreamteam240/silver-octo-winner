'use client';

import { Dialog } from "radix-ui";
import { Button, IconButton } from "@radix-ui/themes";
import api from "@/lib/axios";

interface EditButtonProps {
  storyID: number;
}

export default function EditButton({ storyID }: EditButtonProps) {
  function handleEdit(title: string, description: string) {
    api.put(`/stories/${storyID}`, { title, description }).then(() => {
      console.log("Story edited");
      window.location.reload(); // Refresh the page after edit
    }).catch((error: Error) => {
      console.error("Error editing story:", error);
    });
  }
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button size="3" variant="soft">Edit Story</Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-blackA6 data-[state=open]:animate-overlayShow" />
        <Dialog.Content className="fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-[500px] -translate-x-1/2 -translate-y-1/2 rounded bg-white p-[25px] shadow-[var(--shadow-6)] focus:outline-none data-[state=open]:animate-contentShow">
          <Dialog.Title className="m-0 text-[17px] font-medium">
            Edit story
          </Dialog.Title>
          <Dialog.Description className="mb-5 mt-2.5 text-[15px] leading-normal text-gray-600">
            Edit your story. Click save when you&apos;re done.
          </Dialog.Description>
          <fieldset className="mb-[15px] flex items-center gap-5">
            <label
              className="w-[90px] text-right text-[15px]"
              htmlFor="name"
            >
              Change Name
            </label>
            <input
              className="inline-flex h-[35px] w-full flex-1 items-center justify-center rounded px-2.5 text-[15px] leading-none shadow-[0_0_0_1px] shadow-gray-300 outline-none focus:shadow-[0_0_0_2px] focus:shadow-blue-500"
              id="name"
              placeholder="New Name"
            />
          </fieldset>
          <fieldset className="mb-[15px] flex items-center gap-5">
            <label
              className="w-[90px] text-right text-[15px]"
              htmlFor="username"
            >
              Change Description
            </label>
            <input
              className="inline-flex h-[35px] w-full flex-1 items-center justify-center rounded px-2.5 text-[15px] leading-none shadow-[0_0_0_1px] shadow-gray-300 outline-none focus:shadow-[0_0_0_2px] focus:shadow-blue-500"
              id="username"
              placeholder="New description"
            />
          </fieldset>
          <div className="mt-[25px] flex justify-end">
            <Dialog.Close asChild>
              <Button
                onClick={() => {
                  const nameInput = document.getElementById('name') as HTMLInputElement;
                  const descInput = document.getElementById('username') as HTMLInputElement;
                  handleEdit(nameInput.value, descInput.value);
                }}
              >
                Save changes
              </Button>
            </Dialog.Close>
          </div>
          <Dialog.Close asChild>
            <IconButton
              size="2"
              variant="ghost"
              className="absolute right-2.5 top-2.5"
              aria-label="Close"
            >
              ×
            </IconButton>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
