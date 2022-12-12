import type { NextPage } from "next";
import {
  Box,
  Badge,
  Container,
  Center,
  Flex,
  Square,
  Text,
  VStack,
  HStack,
  SimpleGrid,
  Button,
  Wrap,
  WrapItem,
  Image,
  Heading,
  Divider,
  ListItem,
  OrderedList,
  Link,
} from "@chakra-ui/react";
import React from "react";
import styles from "../styles/Home.module.css";
import { getAllProducts, getProduct } from "./api/categories";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";

interface SectionHeaderProps {
  text: any;
}

const SectionHeader: NextPage<SectionHeaderProps> = ({
  text,
}: SectionHeaderProps) => {
  return (
    <Box>
      <Text fontWeight="medium">{text}</Text>
      <Divider mb={3} />
    </Box>
  );
};

interface ProductPageProps {
  product: any;
}

const ProductPage: NextPage<ProductPageProps> = ({
  product,
}: ProductPageProps) => {
  const router = useRouter();

  return (
    <Container maxW="container.xl">
      <HStack align="space-between" spacing={4} my={4}>
        <Link href="/">Home</Link>
        <Text>About us</Text>
      </HStack>

      <Button
        leftIcon={<ArrowBackIcon />}
        colorScheme="primary"
        variant="ghost"
        fontWeight="medium"
        onClick={() => {
          router.push("/");
        }}
      >
        All products
      </Button>

      <VStack spacing={10}>
        <HStack spacing={10} mt={6}>
          <Box w="full" h="100vh" bg="gray.100"></Box>
          <VStack w={`calc(10 / 16 * 100%)`} spacing={6} align="left">
            <Box>
              <Heading>{product.name}</Heading>
              <Text>Free</Text>
            </Box>
            <Button variant="outline">Visit Link</Button>
            <Divider />
            <Text>
              Use this template to capture notes from all meetings in one
              accessible spot. Notes can be tagged by meeting type to make them
              easy to find. See when
            </Text>

            <Text fontWeight="medium">Tutorials</Text>
            <Box ml={10}>
              <OrderedList>
                <ListItem>Lorem ipsum dolor sit amet</ListItem>
                <ListItem>Consectetur adipiscing elit</ListItem>
                <ListItem>Integer molestie lorem at massa</ListItem>
                <ListItem>Facilisis in pretium nisl aliquet</ListItem>
              </OrderedList>
            </Box>

            <Box>
              <SectionHeader text="Categories" />

              <Flex>
                <Box p={1} bg="gray.50">
                  <Text fontSize="sm">CRM</Text>
                </Box>
              </Flex>
            </Box>
            <Box>
              <SectionHeader text="Alternatives" />

              <Flex>
                <Box p={1} bg="gray.50">
                  <Text fontSize="sm">Permify</Text>
                </Box>
              </Flex>
            </Box>
          </VStack>
        </HStack>

        <Divider my={6} />

        <Center>
          <Box textAlign="center">
            <Heading>Learn to build your SaaS faster</Heading>
            <Button variant="solid" mt={4}>
              Explore all tutorials →
            </Button>
          </Box>
        </Center>
        <SimpleGrid columns={3} spacing={6}>
          <Box w={100} h={100} bg="gray.100"></Box>
          <Box w={100} h={100} bg="gray.100"></Box>
          <Box w={100} h={100} bg="gray.100"></Box>
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export const getStaticProps = async (context: any) => {
  let title = context.params.id;
  console.log({ title });
  const product = getProduct(title);
  return { props: { product } };
};

const topics = Object.keys(getAllProducts());

function buildSearchPath(topic: string) {
  let path = topic;
  path = path.replace(/ /g, "-");

  return path;
}

function generateAllPaths() {
  let paths = getAllProducts().map((p) => p.name.toLowerCase());
  paths = paths.map((topic) => buildSearchPath(topic));

  return paths;
}

export const getStaticPaths = async () => {
  const ids = generateAllPaths();
  console.debug(`generating paths ${ids}`);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));
  return {
    paths,
    fallback: false,
  };
};

export default ProductPage;
