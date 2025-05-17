'use client';

import { useEffect, useState } from 'react';
import { Box, Button, Card, Flex, Heading, Text, Theme } from '@radix-ui/themes';
import api from '@/lib/axios';
import Loading from '@/components/Loading';
import Error from '@/components/Error';

interface Position {
  x: number;
  y: number;
  z?: number;
}

interface ContentData {
  text?: string;
  font?: string;
  color?: string;
  videoId?: string;
  url?: string;
  autoplay?: boolean;
  controls?: boolean;
  imageId?: string;
  content?: string;
  alt?: string;
  title?: string;
}

interface ContentItem {
  uid: string;
  type: 'text' | 'video' | 'image' | 'embed';
  position: Position;
  data: ContentData;
}

interface Story {
  id: number;
  title: string;
  description: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  tone: string;
}

type StoryViewProps = {
  story_id: number;
  setStoryID: (storyID: number | null) => void;
}

type AccentColor = 'tomato' | 'red' | 'crimson' | 'pink' | 'plum' | 'purple' | 'violet' | 'indigo' | 'blue' | 'cyan' | 'teal' | 'green' | 'grass' | 'brown' | 'orange' | 'sky' | 'mint' | 'lime' | 'yellow' | 'amber' | 'gold' | 'bronze' | 'gray';
type GrayColor = 'gray' | 'mauve' | 'slate' | 'sage' | 'olive' | 'sand';
type Radius = 'none' | 'small' | 'medium' | 'large' | 'full';
type Scaling = '90%' | '95%' | '100%' | '105%' | '110%';
type PanelBackground = 'solid' | 'translucent';
type Appearance = 'light' | 'dark';

interface ToneTheme {
  accentColor: AccentColor;
  grayColor: GrayColor;
  radius: Radius;
  scaling: Scaling;
  panelBackground: PanelBackground;
  appearance: Appearance;
}

const toneThemes: Record<string, ToneTheme> = {
  'Dramatic': {
    accentColor: 'crimson',
    grayColor: 'slate',
    radius: 'none',
    scaling: '110%',
    panelBackground: 'solid',
    appearance: 'dark'
  },
  'Ironic': {
    accentColor: 'amber',
    grayColor: 'sand',
    radius: 'full',
    scaling: '95%',
    panelBackground: 'translucent',
    appearance: 'light'
  },
  'Super Cringe': {
    accentColor: 'pink',
    grayColor: 'mauve',
    radius: 'large',
    scaling: '110%',
    panelBackground: 'translucent',
    appearance: 'light'
  },
  'Classy': {
    accentColor: 'gold',
    grayColor: 'sage',
    radius: 'small',
    scaling: '100%',
    panelBackground: 'solid',
    appearance: 'light'
  },
  'Touching': {
    accentColor: 'sky',
    grayColor: 'slate',
    radius: 'medium',
    scaling: '105%',
    panelBackground: 'solid',
    appearance: 'light'
  },
  'Absurd': {
    accentColor: 'purple',
    grayColor: 'mauve',
    radius: 'full',
    scaling: '110%',
    panelBackground: 'translucent',
    appearance: 'dark'
  },
  'Passive-Aggressive': {
    accentColor: 'red',
    grayColor: 'slate',
    radius: 'none',
    scaling: '90%',
    panelBackground: 'solid',
    appearance: 'dark'
  },
  'Honest': {
    accentColor: 'green',
    grayColor: 'sage',
    radius: 'medium',
    scaling: '100%',
    panelBackground: 'solid',
    appearance: 'light'
  },
  'Dark': {
    accentColor: 'gray',
    grayColor: 'gray',
    radius: 'none',
    scaling: '100%',
    panelBackground: 'solid',
    appearance: 'dark'
  }
};

export default function StoryView({ story_id, setStoryID }: StoryViewProps) {
  const [story, setStory] = useState<Story | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStory = async () => {
      try {
        const response = await api.get<Story>(`/stories/${story_id}`);
        setStory(response.data);
        console.log(response.data);
      } catch (err) {
        setError('Failed to fetch story');
      } finally {
        setLoading(false);
      }
    };

    fetchStory();
  }, [story_id]);

  if (loading) return <Loading />;
  if (error) return <Error />;
  if (!story) return null;

  const renderContentItem = (item: ContentItem) => {
    const style = {
      position: 'absolute' as const,
      left: `${item.position.x}px`,
      top: `${item.position.y}px`,
      zIndex: item.position.z || 0,
    };

    switch (item.type) {
      case 'text':
        return (
          <Text
            key={item.uid}
            style={{
              ...style,
              fontFamily: item.data.font,
              color: item.data.color,
            }}
          >
            {item.data.text}
          </Text>
        );
      case 'image':
        return (
          <img
            key={item.uid}
            src={item.data.content}
            alt={item.data.alt}
            style={style}
          />
        );
      case 'video':
        return (
          <video
            key={item.uid}
            src={item.data.url}
            autoPlay={item.data.autoplay}
            controls={item.data.controls}
            style={style}
          />
        );
      case 'embed':
        return (
          <iframe
            key={item.uid}
            src={item.data.url}
            title={item.data.title}
            style={style}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Theme appearance={toneThemes[story.tone].appearance}>
      <Box style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: 'hidden'
      }}>
        {/* Story Content Canvas */}
        <Box style={{ 
          position: 'relative',
          width: '100%',
          height: '100%',
          overflow: 'auto'
        }}>
          {JSON.parse(story.content).map(renderContentItem)}
        </Box>

        {/* Top Left Info Card */}
        <Card style={{
          position: 'fixed',
          top: '2rem',
          left: '2rem',
          maxWidth: '400px',
          zIndex: 1000
        }}>
          <Flex direction="column" gap="3" p="4">
            <Heading size="6">{story.title}</Heading>
            <Text size="3">{story.description}</Text>
            <Button onClick={() => setStoryID(null)}>Back</Button>
          </Flex>
        </Card>

        {/* Bottom Right Date Card */}
        <Card style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          zIndex: 1000
        }}>
          <Flex direction="column" gap="2" p="3">
            <Text size="2">
              Created: {new Date(story.createdAt).toLocaleDateString()}
            </Text>
            <Text size="2">
              Updated: {new Date(story.updatedAt).toLocaleDateString()}
            </Text>
          </Flex>
        </Card>
      </Box>
    </Theme>
  );
} 