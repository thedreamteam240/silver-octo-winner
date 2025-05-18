'use client';

import { Flex, Spinner, Text } from "@radix-ui/themes";

type LoadingProps = {
  message?: string;
}

export default function Loading({ message }: LoadingProps) {
  return (
    <Flex direction="column" gap="2" align="center" justify="center" className="h-screen">
      <Spinner />
      {message && <Text as="p" size="3">{message}</Text>}
    </Flex>
  );
}