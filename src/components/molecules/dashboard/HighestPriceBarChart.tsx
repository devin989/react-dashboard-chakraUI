// Chakra imports
import { Box, Flex, Text } from "@chakra-ui/react";
import BarChart from "components/molecules/charts/BarChart";

// Custom components
import Card from "components/molecules/card/Card";
import { barChartOptionsHighestPrice } from "variables/charts";

export default function HighestPriceBarChart(props: { barChartData: any }) {
  const { barChartData } = props;

  return (
    <Card alignItems="center" flexDirection="column" w="100%">
      <Flex justify="space-between" align="start" px="10px" pt="5px" w="100%">
        <Flex flexDirection="column" align="start" me="20px">
          <Flex w="100%">
            <Text
              me="auto"
              color="secondaryGray.600"
              fontSize="sm"
              fontWeight="500"
            >
              Highest Price
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Box h="240px" mt="auto">
        <BarChart
          chartData={barChartData}
          chartOptions={barChartOptionsHighestPrice}
        />
      </Box>
    </Card>
  );
}
