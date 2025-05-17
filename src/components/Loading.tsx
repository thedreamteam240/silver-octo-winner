'use client';

import { Flex, Spinner } from "@radix-ui/themes";

export default function Loading() {
  return (
    <Flex direction="column" gap="2" align="center" justify="center" className="h-screen">
      <Spinner />
    </Flex>
  );
}