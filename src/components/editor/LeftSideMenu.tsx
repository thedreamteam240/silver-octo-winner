import React, { ReactNode, useState } from "react";

import { ChevronLeftIcon, ChevronRightIcon, GearIcon } from "@radix-ui/react-icons";
import { IconButton, Theme } from "@radix-ui/themes";

import { EditorPanel } from "@/types";

export default function LeftSideMenu({editor} : {editor: EditorPanel}) {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <Theme radius="large">
        <div className="flex flex-row fixed right-0 top-1/2 transform -translate-y-1/2 justify-center items-center z-50">
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
              <GearIcon width="22" height="22" color="#395bc8" />
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