'use client';

import { Button, Flex, Heading, Text, Container, Box } from "@radix-ui/themes";
import { signIn } from "next-auth/react";
import { motion } from "framer-motion";

export default function Unauthenticated() {
  return (
    <Container size="3">
      <Flex direction="column" gap="6" align="center" justify="center" className="min-h-screen py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Heading size="9" align="center" className="font-bold mb-4">
            TheEnd.page
          </Heading>
          <Text size="5" align="center" className="text-gray-600 mb-8">
            Your final message. Your way.
          </Text>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-2xl text-center"
        >
          <Text size="4" className="mb-6">
            Create your personalized goodbye page. With style. With rage. With gifs. 
            With tears. With music. With regrets. Or without.
          </Text>
          
          <Box className="bg-gray-50 p-6 rounded-lg mb-8">
            <Text size="3" className="italic text-gray-700">
              "A page you maybe shouldn't open... but you do anyway.
              A page you share. A page that hits hard.
              Because if it's the end — might as well make it unforgettable."
            </Text>
          </Box>

          <Flex gap="4" justify="center" wrap="wrap">
            <Button size="3" onClick={() => signIn()} className="bg-black hover:bg-gray-800">
              Create Your Exit
            </Button>
            <Button size="3" variant="outline" onClick={() => signIn()}>
              Sign In
            </Button>
          </Flex>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-center"
        >
          {['Dramatic', 'Ironic', 'Super Cringe', 'Classy', 'Touching', 'Absurd', 'Passive-Aggressive', 'Honest'].map((tone) => (
            <Box key={tone} className="p-3 bg-gray-50 rounded-lg">
              <Text size="2" className="font-medium">{tone}</Text>
            </Box>
          ))}
        </motion.div>
      </Flex>
    </Container>
  );
}