// Chakra imports
import { Box, Button, Flex, Link, Text, Image } from "@chakra-ui/react";

// Assets
import banner from "assets/img/banner/banner1.png";

export default function Banner() {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      justify="space-between"
      align={{ base: "center", md: "flex-start" }}
      bg="#2BEBC8"
      py={{ base: "30px", md: "86px" }}
      px={{ base: "30px", md: "64px" }}
      borderRadius="30px"
      position="relative"
    >
      <Box position="absolute" right="50px" top="90px">
        <Image src={banner} alt="Your image" boxSize="200px" objectFit="fill" />
      </Box>
      <Box>
        <Text
          fontSize={{ base: "24px", md: "28px" }}
          color="black"
          mb="14px"
          maxW={{
            base: "100%",
            md: "64%",
            lg: "46%",
            xl: "70%",
            "2xl": "50%",
            "3xl": "42%",
          }}
          fontWeight="700"
          lineHeight={{ base: "32px", md: "42px" }}
        >
          Welcome to your dashboard!
        </Text>
        <Text
          fontSize="md"
          color="black"
          maxW={{
            base: "100%",
            md: "64%",
            lg: "40%",
            xl: "56%",
            "2xl": "46%",
            "3xl": "34%",
          }}
          fontWeight="500"
          mb="40px"
          lineHeight="28px"
        >
          Try our new Admin Dashboard Template, build with live Ant-Design
          components. Customize it to your needs and release to production!
        </Text>
      </Box>
    </Flex>
  );
}
