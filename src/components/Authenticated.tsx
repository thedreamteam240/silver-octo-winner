'use client';

import LogoutButton from "@/components/LogoutButton";
import { Flex } from "@radix-ui/themes";

export default function Authenticated() {
  return (
    <Flex direction="column" gap="2">
      <LogoutButton />
      <p>Welcome back!</p>
    </Flex>
  );
}