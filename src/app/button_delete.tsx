import type { Metadata } from "next";
import "./globals.css";
import "@radix-ui/themes/styles.css";

import * as React from "react";
import { AlertDialog } from "radix-ui";

const Button_delete = () => (
	<AlertDialog.Root>
		<AlertDialog.Trigger asChild>
			<button className="inline-flex h-[35px] items-center justify-center border border-black rounded bg-gray-300 rounded-xl px-[15px] font-medium leading-none text-violet11 outline-none outline-offset-1 hover:bg-mauve3 focus-visible:outline-2 focus-visible:outline-violet6 select-none">
				- Delete story
			</button>
		</AlertDialog.Trigger>
		<AlertDialog.Portal>
			<AlertDialog.Overlay className="fixed inset-0 bg-blackA6 data-[state=open]:animate-overlayShow" />
			<AlertDialog.Content className="fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-[500px] -translate-x-1/2 -translate-y-1/2 rounded bg-gray-300 p-[25px] shadow-[var(--shadow-6)] focus:outline-none data-[state=open]:animate-contentShow">
				<AlertDialog.Title className="m-0 text-[17px] font-medium text-mauve12">
					Are you absolutely sure?
				</AlertDialog.Title>
				<AlertDialog.Description className="mb-5 mt-[15px] text-[15px] leading-normal text-mauve11">
					This action cannot be undone. This will permanently delete your
					story and remove your data from our servers.
				</AlertDialog.Description>
				<div className="flex justify-end gap-[25px]">
					<AlertDialog.Cancel asChild>
						<button className="inline-flex h-[35px] items-center justify-center bg-gray-400 px-[15px] font-medium leading-none text-mauve11 outline-none outline-offset-1 hover:bg-mauve5 focus-visible:outline-2 focus-visible:outline-mauve7 select-none">
							Cancel
						</button>
					</AlertDialog.Cancel>
					<AlertDialog.Action asChild>
						<button className="inline-flex h-[35px] items-center justify-center bg-red-400 px-[15px] font-medium leading-none text-red11 outline-none outline-offset-1 hover:bg-red5 focus-visible:outline-2 focus-visible:outline-red7 select-none">
							Yes, delete story
						</button>
					</AlertDialog.Action>
				</div>
			</AlertDialog.Content>
		</AlertDialog.Portal>
	</AlertDialog.Root>
);

export default Button_delete;
