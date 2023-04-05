// Chakra Imports
import {
  Button,
  Flex,
  Icon,
  useColorModeValue,
  useColorMode,
  Spacer,
} from "@chakra-ui/react";
// Custom Components
import { SearchBar } from "components/navbar/searchBar/SearchBar";
import { SidebarResponsive } from "components/sidebar/Sidebar";
import PropTypes from "prop-types";
import React from "react";
import { IoMdMoon, IoMdSunny } from "react-icons/io";
// Assets
import routes from "routes";
export default function HeaderSearchBar() {
  const { colorMode, toggleColorMode } = useColorMode();
  // Chakra Color Mode
  const navbarIcon = useColorModeValue("gray.400", "white");
  const shadow = useColorModeValue(
    "14px 17px 40px 4px rgba(112, 144, 176, 0.18)",
    "14px 17px 40px 4px rgba(112, 144, 176, 0.06)"
  );

  return (
    <Flex
      minWidth="max-content"
      alignItems="center"
      flexDirection="row"
      p="10px"
      borderRadius="30px"
      gap={2}
      boxShadow={shadow}
    >
      <SearchBar
        mb={() => {
          return "unset";
        }}
        me="10px"
        borderRadius="30px"
      />
      <SidebarResponsive routes={routes} />
      <Button
        variant="no-hover"
        bg="transparent"
        p="0px"
        minW="unset"
        minH="unset"
        h="18px"
        w="max-content"
        onClick={toggleColorMode}
      >
        <Icon
          me="10px"
          h="18px"
          w="18px"
          color={navbarIcon}
          as={colorMode === "light" ? IoMdMoon : IoMdSunny}
        />
      </Button>
      <Spacer />
    </Flex>
  );
}

HeaderSearchBar.propTypes = {
  variant: PropTypes.string,
  fixed: PropTypes.bool,
  secondary: PropTypes.bool,
  onOpen: PropTypes.func,
};
