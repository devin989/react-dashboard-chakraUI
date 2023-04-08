/* eslint-disable */

import {
  Flex,
  Link,
  List,
  ListItem,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Footer() {
  let textColor = useColorModeValue("gray.400", "white");
  let linkColor = useColorModeValue({ base: "gray.400", lg: "white" }, "white");
  return (
    <Flex
      zIndex="3"
      flexDirection={{
        base: "column",
        lg: "row",
      }}
      alignItems={{
        base: "center",
        xl: "start",
      }}
      justifyContent="space-between"
      px={{ base: "30px", md: "0px" }}
      pb="30px"
    >
      <Text
        color={textColor}
        textAlign={{
          base: "center",
          xl: "start",
        }}
        mb={{ base: "20px", lg: "0px" }}
      >
        {" "}
        &copy; {new Date().getFullYear()}
        <Text as="span" fontWeight="500" ms="4px">
          Devin Rathnayake. All Rights Reserved. Made with love by
        </Text>
      </Text>
      <List display="flex">
        <ListItem
          color={textColor}
          me={{
            base: "20px",
            md: "44px",
          }}
        >
          Support
        </ListItem>
        <ListItem
          color={textColor}
          me={{
            base: "20px",
            md: "44px",
          }}
        >
          License
        </ListItem>
        <ListItem
          color={textColor}
          me={{
            base: "20px",
            md: "44px",
          }}
        >
          Terms of Use
        </ListItem>
        <ListItem color={textColor}>Blog</ListItem>
      </List>
    </Flex>
  );
}
