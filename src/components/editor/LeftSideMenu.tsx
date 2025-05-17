import React, { ReactNode, useState } from "react";

import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { IconButton, Theme } from "@radix-ui/themes";


export default function LeftSideMenu({darkMode} : {darkMode: boolean}) {

    return (
      <Theme radius="large">
        <div className="flex flex-row absolute right-0 top-[10%] justify-center items-center">
          <div>
            <div
              className={`flex flex-col shadow-lg rounded-l-lg transition-all duration-300 "w-64""
              } ${darkMode ? "bg-[#18191b]" : "bg-white"}`}
            >
            </div>
          </div>
        </div>
      </Theme>
    );
}