/* eslint-disable */
// Chakra Imports
import {
  Avatar,
  Box,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import AdminNavbarLinks from "components/navbar/NavbarSearch";

export default function AdminNavbar(props: {
  message: string | boolean;
  brandText: string;
  logoText: string;
  fixed: boolean;
  onOpen: (...args: any[]) => any;
}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", changeNavbar);

    return () => {
      window.removeEventListener("scroll", changeNavbar);
    };
  });

  // Here are all the props that may change depending on navbar's type or state.(secondary, variant, scrolled)
  let mainText = useColorModeValue("navy.700", "white");
  let secondaryText = useColorModeValue("gray.700", "white");
  let navbarPosition = "fixed" as const;
  let navbarFilter = "none";
  let navbarBackdrop = "blur(20px)";
  let navbarShadow = "none";
  let navbarBg = useColorModeValue(
    "rgba(244, 247, 254, 0.2)",
    "rgba(11,20,55,0.5)"
  );
  let navbarBorder = "transparent";
  let secondaryMargin = "0px";
  let paddingX = "15px";
  let gap = "0px";
  const changeNavbar = () => {
    if (window.scrollY > 1) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  return (
    <Box
      position={navbarPosition}
      boxShadow={navbarShadow}
      bg={navbarBg}
      borderColor={navbarBorder}
      filter={navbarFilter}
      backdropFilter={navbarBackdrop}
      backgroundPosition="center"
      backgroundSize="cover"
      borderRadius="16px"
      borderWidth="1.5px"
      borderStyle="solid"
      transitionDelay="0s, 0s, 0s, 0s"
      transitionDuration=" 0.25s, 0.25s, 0.25s, 0s"
      transition-property="box-shadow, background-color, filter, border"
      transitionTimingFunction="linear, linear, linear, linear"
      alignItems={{ xl: "center" }}
      display={"flex"}
      minH="75px"
      justifyContent={{ xl: "center" }}
      lineHeight="25.6px"
      mx="auto"
      mt={secondaryMargin}
      pb="8px"
      right={{ base: "12px", md: "30px", lg: "30px", xl: "30px" }}
      px={{
        sm: paddingX,
        md: "10px",
      }}
      ps={{
        xl: "12px",
      }}
      pt="8px"
      top={{ base: "12px", md: "16px", xl: "18px" }}
      w={{
        base: "calc(100vw - 6%)",
        md: "calc(100vw - 8%)",
        lg: "calc(100vw - 6%)",
        xl: "calc(100vw - 350px)",
        "2xl": "calc(100vw - 365px)",
      }}
    >
      <Flex
        w="100%"
        flexDirection={{
          sm: "column",
          md: "row",
        }}
        alignItems={{ xl: "center" }}
        mb={gap}
      >
        <Box mb={{ sm: "8px", md: "0px" }}>
          <AdminNavbarLinks onOpen={props.onOpen} fixed={props.fixed} />
        </Box>
        <Box ms="auto" mb={{ sm: "8px", md: "0px" }}>
          <Menu>
            <MenuButton p="0px">
              <Avatar
                _hover={{ cursor: "pointer" }}
                color="white"
                name="Adela Parkson"
                bg="#11047A"
                size="sm"
                w="40px"
                h="40px"
              />
            </MenuButton>
            <MenuList
              // boxShadow={shadow}
              p="0px"
              mt="10px"
              borderRadius="20px"
              // bg={menuBg}
              border="none"
            >
              <Flex w="100%" mb="0px">
                <Text
                  ps="20px"
                  pt="16px"
                  pb="10px"
                  w="100%"
                  borderBottom="1px solid"
                  fontSize="sm"
                  fontWeight="700"
                >
                  👋&nbsp; Hey, Adela
                </Text>
              </Flex>
              <Flex flexDirection="column" p="10px">
                <MenuItem
                  _hover={{ bg: "none" }}
                  _focus={{ bg: "none" }}
                  borderRadius="8px"
                  px="14px"
                >
                  <Text fontSize="sm">Profile Settings</Text>
                </MenuItem>
                <MenuItem
                  _hover={{ bg: "none" }}
                  _focus={{ bg: "none" }}
                  borderRadius="8px"
                  px="14px"
                >
                  <Text fontSize="sm">Newsletter Settings</Text>
                </MenuItem>
                <MenuItem
                  _hover={{ bg: "none" }}
                  _focus={{ bg: "none" }}
                  color="red.400"
                  borderRadius="8px"
                  px="14px"
                >
                  <Text fontSize="sm">Log out</Text>
                </MenuItem>
              </Flex>
            </MenuList>
          </Menu>
        </Box>
      </Flex>
    </Box>
  );
}
