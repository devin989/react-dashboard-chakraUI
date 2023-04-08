// Chakra imports
import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import Card from "components/molecules/card/Card";
// Custom components
import BarChart from "components/molecules/charts/BarChart";
import React from "react";
import { stackedBarChartOptions } from "variables/charts";

export default function WeeklyRevenue(props: { barChartData: any }) {
  const { barChartData } = props;

  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");

  return (
    <Card alignItems="center" flexDirection="column" w="100%">
      <Flex align="center" w="100%" px="15px" py="10px">
        <Text
          me="auto"
          color={textColor}
          fontSize="xl"
          fontWeight="700"
          lineHeight="100%"
        >
          Last Week
        </Text>
      </Flex>

      <Box h="240px" mt="auto" w="100%">
        <BarChart
          chartData={barChartData}
          chartOptions={stackedBarChartOptions}
        />
      </Box>
    </Card>
  );
}
