import React, { ReactNode, useState } from "react";

import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { IconButton, Theme } from "@radix-ui/themes";

import { EditorPanel } from "@/types";

export default function LeftSideMenu({editor} : {editor: EditorPanel}) {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <Theme radius="large">
        <div className="flex flex-row absolute right-0 top-[10%] justify-center items-center">
          <IconButton
            size="4"
            className="rounded-r-none"
            variant="outline"
            color="gray"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <ChevronRightIcon width="22" height="22" />
            ) : (
              <ChevronLeftIcon width="22" height="22" />
            )}
          </IconButton>
          <div>
            <div
              className={`flex flex-col shadow-lg rounded-l-lg transition-all duration-300 ${
                isOpen ? "w-64" : "w-0 overflow-hidden"
              }`}
            >
              {editor}
            </div>
          </div>
        </div>
      </Theme>
    );
}