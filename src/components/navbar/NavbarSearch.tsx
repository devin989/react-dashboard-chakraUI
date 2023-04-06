// Chakra Imports
import { Flex, useColorModeValue, useColorMode } from "@chakra-ui/react";
// Custom Components
import { SearchBar } from "components/navbar/searchBar/SearchBar";
import { SidebarResponsive } from "components/sidebar/Sidebar";
import PropTypes from "prop-types";
import React from "react";

// Assets
import routes from "routes";
export default function HeaderSearchBar() {
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
    </Flex>
  );
}

HeaderSearchBar.propTypes = {
  variant: PropTypes.string,
  fixed: PropTypes.bool,
  secondary: PropTypes.bool,
  onOpen: PropTypes.func,
};
