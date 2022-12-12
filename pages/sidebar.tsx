import { MoonIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Badge,
  Container,
  Center,
  Flex,
  Square,
  Heading,
  Text,
  VStack,
  HStack,
  Divider,
  Spacer,
  Wrap,
  WrapItem,
  SimpleGrid,
} from "@chakra-ui/layout";
import { Button, IconButton, Input, Select } from "@chakra-ui/react";
import type { NextPage } from "next";
import React from "react";

const Card = () => {
  return (
    <Box>
      <Box rounded="lg" p={3} border="1px" borderColor="gray.200">
        <VStack align="flex-start">
          <Text fontWeight="medium">Passport.js</Text>
          <Text>Node.js library to build a “Log in with X” button </Text>
          <HStack>
            <Text fontSize="xs">4 tutorials</Text>
            <Text fontSize="xs"> Used by xyz and 10 others</Text>
          </HStack>
        </VStack>
      </Box>
    </Box>
  );
};

const Home: NextPage = () => {
  return (
    <Box>
      <Container maxW="container.xl" p={2}>
        <Box>
          <HStack>
            <Heading fontSize="lg">Logo</Heading>
            <Text>Home</Text>
            <Text>About us</Text>
            <Spacer />
            <Button>Add Product</Button>
          </HStack>

          <Flex
            textAlign="left"
            height="70vh"
            justify="flex-start"
            align="center"
          >
            <Box>
              <Heading>Don’t build blind</Heading>
              <Text fontSize="lg" color="gray.500">
                We curate for you the best products so you can build your SaaS
                in peace.
              </Text>
            </Box>
          </Flex>
        </Box>
        <Divider />

        <HStack align="flex-start" justify="space-between">
          <Box w="full">
            <HStack spacing={4} my={4}>
              <Input placeholder="Search for product" />
              <HStack w={500}>
                <Select placeholder="Select option">
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                </Select>

                <Select placeholder="Select option">
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                </Select>
              </HStack>
            </HStack>

            <Text mb={2} mt={8} ml={1}>
              10 products
            </Text>
            <SimpleGrid columns={2} spacing={6}>
              <Card />
              <Card />
              <Card />
            </SimpleGrid>
          </Box>

          <Divider orientation="vertical" />
          <Box bg="gray.200" height={500} w="300px"></Box>
        </HStack>

        <VStack>
          <Text fontSize="xs">4 tutorials</Text>
        </VStack>
      </Container>
    </Box>
  );
};
export default Home;
