import { ExternalLinkIcon, MoonIcon, SearchIcon } from "@chakra-ui/icons";
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

const NavItem = () => {
  return (
    <Flex justify="space-between" bg="gray.300" align="center" py={1} w="full">
      <HStack spacing={2} ml={4}>
        <ExternalLinkIcon />
        <Text fontSize="sm">Home</Text>
      </HStack>
      <Box rounded="full" mr={4}>
        <Text fontSize="sm">3</Text>
      </Box>
    </Flex>
  );
};

const Home: NextPage = () => {
  return (
    <Box>
      <VStack w={300} h="100vh" bg="gray.100" p={4} align="flex-start">
        <HStack w="full">
          <Box w={50} h={50} bg="gray.400" />
          <VStack>
            <Text fontSize="lg"> Acme Co.</Text>
            <Text fontSize="sm" color="gray.400" m={0}>
              Palo Alto, CA
            </Text>
          </VStack>
        </HStack>
        <VStack spacing={0} w="full">
          <NavItem />
          <NavItem />
        </VStack>
        <Spacer />
        <Button variant="ghost">Logout</Button>
      </VStack>
    </Box>
  );
};
export default Home;
