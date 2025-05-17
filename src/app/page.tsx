'use client';

import AuthButton from "@/components/AuthButton";
import { Flex } from "@radix-ui/themes";
import { SessionProvider } from "next-auth/react";

export default function Page() {
  return (
    <SessionProvider>
      <Flex direction="column" gap="2">
        <AuthButton />
      </Flex>
    </SessionProvider>
  );
}
