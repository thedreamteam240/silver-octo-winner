'use client';

import { Box, Card, Flex, Grid, IconButton, Text, TextField, Theme, ThemePanel ,} from "@radix-ui/themes";
import glass_icon from '../../public/glass_icon.png';

function Glass_icon(){
  return glass_icon;
}

function Card_function() {
  return (
    <Grid columns="3" gap="3" rows="repeat(2, 64px)" width="auto">
      <Box maxWidth="440px">
        <Card>
          <Flex gap="3" align="center">
            <IconButton radius="full" variant="soft"></IconButton>
            <Box>
              <Text as="div" size="2" weight="bold" >Story Name</Text>
              <Text as="div" size="2" color="gray">Story Description</Text>
            </Box>
          </Flex>
        </Card>
      </Box>
      <Box maxWidth="440px">
        <Card>
        <Flex gap="3" align="center">
        <IconButton radius="full" variant="soft"></IconButton>
          <Box>
            <Text as="div" size="2" weight="bold">Story Name</Text>
            <Text as="div" size="2" color="gray">Story Description</Text>
          </Box>
        </Flex>
        </Card>
      </Box>
      <Box maxWidth="440px">
      <Card>
        <Flex gap="3" align="center">
        <IconButton radius="full" variant="soft"></IconButton>
          <Box>
            <Text as="div" size="2" weight="bold">Story Name</Text>
            <Text as="div" size="2" color="gray">Story Description</Text>
          </Box>
        </Flex>
      </Card>
      </Box>
    </Grid>
  );
}

function Research() {
  return (
  <TextField.Root placeholder="Search old story" radius="full" variant="soft" color="crimson" size="3">
    <TextField.Slot>
      <IconButton radius="full" variant="soft">
        <image></image>
      </IconButton>
    </TextField.Slot>
  </TextField.Root>
  );
}

export default function Page() {
  return (
  <html lang="en">
    <body>
      <Theme>
        <Research/>
        <Card_function/>
      </Theme>
    </body>
  </html>
  );
}
