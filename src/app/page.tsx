'use client';

import { Box, Card, Flex, Grid, IconButton, Text, TextField, Theme, ThemePanel, } from "@radix-ui/themes";
import glass_icon from '../../public/glass_icon.png';

function Glass_icon() {
  return glass_icon;
}

type StoryCardProps = {
  id: number;
  title: string;
  description: string;
}

function StoryCard({ title, description }: StoryCardProps) {
  return (
    <Box maxWidth="440px">
      <Card size="3">
        <Flex gap="3" align="center">
          <IconButton radius="full" variant="soft"></IconButton>
          <Box>
            <Text as="div" size="2" weight="bold" >{title}</Text>
            <Text as="div" size="2" color="gray">{description}</Text>
          </Box>
        </Flex>
      </Card>
    </Box>
  );
}

// function Research() {
//   return (
//     <TextField.Root placeholder="Search old story" radius="full" variant="soft" color="crimson" size="3">
//       <TextField.Slot>
//         <IconButton radius="full" variant="soft">
//           <image></image>
//         </IconButton>
//       </TextField.Slot>
//     </TextField.Root>
//   );
// }

function getStories() {
  return [
    {
      id: 1,
      title: "Leaving the 9-to-5 Grind",
      description: "After years of hard work, it's time for new adventures. Goodbye, office life!",
    },
    {
      id: 2,
      title: "Farewell to a Beloved Soul",
      description: "Honoring a life filled with love and unforgettable memories. Rest in peace, Mom.",
    },
    {
      id: 3,
      title: "Embracing My Feline Identity",
      description: "Life's better with whiskers and catnip. I'm officially a cat now!",
    },
    {
      id: 4,
      title: "Goodbye Pizza",
      description: "No more late-night pizza runs.",
    },
    {
      id: 5,
      title: "Breaking Up with Coffee",
      description: "It's not you, it's me... and my caffeine addiction.",
    },
    {
      id: 6,
      title: "Farewell Gym Membership",
      description: "We had a good run, but it's time to move on.",
    },
    {
      id: 7,
      title: "Adieu, Social Media",
      description: "Logging out for good. Real life, here I come!",
    },
    {
      id: 8,
      title: "Bye Bye Beard",
      description: "It's been a hairy ride, but it's time to shave it all off.",
    },
    {
      id: 9,
      title: "See Ya, Old Car",
      description: "You broke down one too many times. Time for a new ride.",
    },
    {
      id: 10,
      title: "Lost to the Socks Monster",
      description: "RIP to all my mismatched socks.",
    }
  ]
}

function StoryGrid() {
  const stories = getStories();

  return (
    <Grid columns="3" gap="6" rows="repeat(2, 64px)" width="auto">
      {stories.map((story) => (
        <StoryCard title={story.title} description={story.description} id={story.id} />
      ))}
    </Grid>
  )
}

export default function Page() {

  return (
    <html lang="en">
      <body>
        <Theme>
          <StoryGrid />
        </Theme>
      </body>
    </html>
  );
}
