'use client';

import { Button, Flex, Heading, Text, Container, Box, Theme, Card } from "@radix-ui/themes";
import { signIn } from "next-auth/react";
import { motion } from "framer-motion";
import { useState } from "react";

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

export default function Unauthenticated() {
  const [selectedTone, setSelectedTone] = useState('Dramatic');
  const currentTheme = toneThemes[selectedTone as keyof typeof toneThemes];

  return (
    <Theme
      accentColor={currentTheme.accentColor}
      grayColor={currentTheme.grayColor}
      radius={currentTheme.radius}
      scaling={currentTheme.scaling}
      panelBackground={currentTheme.panelBackground}
      appearance={currentTheme.appearance}
    >
      <Container size="3">
        <Flex direction="column" gap="6" align="center" justify="center" style={{ minHeight: '100vh', padding: '3rem 0' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Heading size="9" align="center" mb="4">
              TheEnd.page
            </Heading>
            <Text size="5" align="center" mb="8">
              Your final message. Your way.
            </Text>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <Flex direction="column" align="center" style={{ maxWidth: '42rem' }}>
              <Text size="4" mb="6">
                Create your personalized goodbye page. With style. With rage. With gifs. 
                With tears. With music. With regrets. Or without.
              </Text>
              
              <Box mb="8">
                <Card>
                  <Text size="3" style={{ fontStyle: 'italic' }}>
                    A page you maybe shouldn&apos;t open... but you do anyway.
                    A page you share. A page that hits hard.
                    Because if it&apos;s the end — might as well make it unforgettable.
                  </Text>
                </Card>
              </Box>

              <Flex gap="4" justify="center" wrap="wrap">
                <Button size="3" onClick={() => signIn()}>
                  Create Your Exit
                </Button>
              </Flex>
            </Flex>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Flex direction="column" align="center" gap="4">
              <Text size="3" align="center">
                Choose your tone:
              </Text>
              
              <Flex gap="4" wrap="wrap" justify="center" style={{ maxWidth: '42rem' }}>
                {Object.keys(toneThemes).map((tone) => (
                  tone !== selectedTone && (
                    <Card 
                      key={tone} 
                      style={{ cursor: 'pointer', minWidth: '120px' }}
                      onClick={() => setSelectedTone(tone)}
                    >
                      <Text size="2" align="center">
                        {tone}
                      </Text>
                    </Card>
                  )
                ))}
              </Flex>

              <Box mt="6">
                <Card>
                  <Flex gap="3" align="center" justify="center" p="4">
                    <Text size="2" align="center" content="center" style={{ fontStyle: 'italic' }}>
                      Current theme: {selectedTone}
                    </Text>
                  </Flex>
                </Card>
              </Box>
            </Flex>
          </motion.div>
        </Flex>
      </Container>
    </Theme>
  );
}