'use client';

import { Box, Card, Flex, Grid, IconButton, Inset, Strong, Text, TextField, Theme, ThemePanel, } from "@radix-ui/themes";

type StoryCardProps = {
  id: number;
  title: string;
  description: string;
}

function StoryCard({ title, description }: StoryCardProps) {
  return (
    <Box className="otot" maxWidth="500px" top="1">
      <Card size="3">
		  <Inset clip="padding-box" side="top" pb="current">
			<img
				src="data:image/jpeg;base64,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"
				alt="Bold typography"
				style={{
					display: "block",
					objectFit: "cover",
					width: "100%",
					height: 300,
					backgroundColor: "var(--gray-5)",
				}}
			/>
		  </Inset>
		  <Text as="p" size="3"><Strong>{title}</Strong> {description}</Text>
	    </Card>
    </Box>
  );
}

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
    }
  ]
}

function StoryGrid() {
  const stories = getStories();

  return (
    <Grid columns="3" gap="6" rows="repeat(2, 500px)" width="auto">
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
