import { Avatar } from "@chakra-ui/avatar";
import { Input } from "@chakra-ui/input";
import {
  Box,
  Badge,
  Button,
  Container,
  Center,
  Flex,
  Square,
  Text,
  VStack,
  HStack,
  SimpleGrid,
  Wrap,
  WrapItem,
  Image,
} from "@chakra-ui/react";

import { chakra } from "@chakra-ui/react";

import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { getAllProducts, getAllTags } from "./api/categories";
import { useRouter } from "next/router";

interface CardProps {
  product: any;
}

const Card: NextPage<CardProps> = ({ product }: CardProps) => {
  const router = useRouter();

  const handleClick = (e: any) => {
    e.preventDefault();
    router.push(`/${product.name.toLowerCase()}`);
  };

  return (
    <Box
      p={4}
      _hover={{
        bg: "purple.50",
        cursor: "pointer",
        color: "purple.500",
      }}
      onClick={handleClick}
    >
      <HStack justify="space-between">
        <HStack spacing={5}>
          {/* {!product.thumbnail ? (
            <Box width={100} height={100} bg="gray.200" rounded="xl"></Box>
          ) : (
            <Image
              boxSize="80px"
              objectFit="cover"
              src={product.thumbnail}
              alt="Dan Abramov"
            />
          )} */}
          <VStack justify="space-between" align="start" height="100%">
            <Box>
              <Text fontSize="sm" fontWeight="500">
                {product.name}
              </Text>
              <Text color="gray.500" fontSize="sm">
                {product.description}
              </Text>
            </Box>

            <HStack spacing={4}>
              <Text fontSize="xs">
                {product.tutorials?.length || 0} tutorials
              </Text>
              <Text fontSize="xs">{product.tags}</Text>
            </HStack>
          </VStack>
        </HStack>

        <Box p={6}>→</Box>
      </HStack>
    </Box>
  );
};

interface HomeProps {
  products: any;
}

const Home: NextPage<HomeProps> = ({ products }: HomeProps) => {
  const allTags = getAllTags();

  return (
    <Container maxW="container.xl">
      <Box height={200} bg="gray.50" width="100%" p={3} textAlign="center">
        <Center>
          <VStack>
            <Text fontSize="4xl" fontWeight="bold">
              Build your SaaS fast
            </Text>
            <Text>Search by feature</Text>
            <Button variant="solid">Join for $10</Button>
          </VStack>
        </Center>
      </Box>

      <Box my={4}>
        <Wrap spacing={3} width="100%" align="center" justify="center">
          <WrapItem key="-1">
            <Input placeholder="Search by name" bg="white" />
          </WrapItem>
          {allTags.map((tag: any, i: number) => (
            <WrapItem key={i}>
              <Text
                rounded="full"
                py={1}
                px={4}
                _hover={{
                  fontWeight: "medium",
                  cursor: "pointer",
                  bg: "gray.50",
                }}
              >
                {tag}
              </Text>
            </WrapItem>
          ))}

          <WrapItem>
            <Text>View all</Text>
          </WrapItem>
        </Wrap>
      </Box>

      <SimpleGrid columns={{ base: 1, xl: 2 }} spacing={4}>
        {products.map((product: any, i: number) => (
          <Box key={i}>
            <Card product={product} />
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export const getStaticProps = async (context: any) => {
  const products = getAllProducts();

  return { props: { products } };
};

export default Home;
