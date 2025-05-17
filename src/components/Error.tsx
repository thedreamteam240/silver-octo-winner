'use client';

import { Button, Flex, Heading, Text, Container, Box, Theme, Card } from "@radix-ui/themes";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Error() {
  const router = useRouter();

  return (
    <Theme
      accentColor="red"
      grayColor="slate"
      radius="medium"
      scaling="100%"
      panelBackground="solid"
      appearance="light"
    >
      <Container size="3">
        <Flex direction="column" gap="6" align="center" justify="center" style={{ minHeight: '100vh', padding: '3rem 0' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Heading size="9" align="center" mb="4" color="red">
              Oops!
            </Heading>
            <Text size="5" align="center" mb="8">
              Something went wrong
            </Text>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <Flex direction="column" align="center" style={{ maxWidth: '42rem' }}>
              <Text size="4" mb="6">
                We apologize for the inconvenience. Please try again or return to the home page.
              </Text>
              
              <Box mb="8">
                <Card>
                  <Text size="3" style={{ fontStyle: 'italic' }}>
                    "Don't worry, even the best systems have their moments. We're here to help you get back on track."
                  </Text>
                </Card>
              </Box>

              <Flex gap="4" justify="center" wrap="wrap">
                <Button size="3" onClick={() => router.refresh()}>
                  Try Again
                </Button>
                <Button size="3" variant="soft" onClick={() => router.push('/')}>
                  Return Home
                </Button>
              </Flex>
            </Flex>
          </motion.div>
        </Flex>
      </Container>
    </Theme>
  );
}