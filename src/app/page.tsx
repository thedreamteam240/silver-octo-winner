'use client';

import { Flex } from "@radix-ui/themes";
import HeadNav from "@/components/editor/HeadNav";
import FootNav from "@/components/editor/FootNav";
import Preview from "@/components/editor/Preview";

export default function Page() {
  return (
    <Flex direction="column" gap="2">
      <HeadNav />
      <Preview />
      <FootNav />
    </Flex>
  );
}
