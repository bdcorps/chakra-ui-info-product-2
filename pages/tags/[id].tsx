// import type { NextPage } from "next";
// import {
//   Box,
//   Badge,
//   Container,
//   Center,
//   Flex,
//   Square,
//   Text,
//   VStack,
//   HStack,
//   SimpleGrid,
//   Wrap,
//   WrapItem,
//   Image,
// } from "@chakra-ui/react";
// import React from "react";
// import styles from "../styles/Home.module.css";
// import { getAllProducts, getProduct } from "./api/categories";

// interface ProductPageProps {
//   product: any;
// }

// const ProductPage: NextPage<ProductPageProps> = ({
//   product,
// }: ProductPageProps) => {
//   return (
//     <div className={styles.container}>
//       <Text> {JSON.stringify(product)}</Text>
//     </div>
//   );
// };

// export const getStaticProps = async (context: any) => {
//   let title = context.params.id;
//   console.log({ title });
//   const product = getProduct(title);
//   return { props: { product } };
// };

// const topics = Object.keys(getAllProducts());

// function buildSearchPath(topic: string) {
//   let path = topic;
//   path = path.replace(/ /g, "-");

//   return path;
// }

// function generateAllPaths() {
//   let paths = getAllProducts().map((p) => p.name.toLowerCase());
//   paths = paths.map((topic) => buildSearchPath(topic));

//   return paths;
// }

// export const getStaticPaths = async () => {
//   const ids = generateAllPaths();
//   console.debug(`generating paths ${ids}`);
//   const paths = ids.map((id) => ({ params: { id: id.toString() } }));
//   return {
//     paths,
//     fallback: false,
//   };
// };

// export default ProductPage;

export default {};
