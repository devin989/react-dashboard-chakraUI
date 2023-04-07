// Chakra imports
import { Box, Flex, Grid, SimpleGrid } from "@chakra-ui/react";

// Custom components
import Banner from "views/admin/default/components/Banner";

import DailyTraffic from "views/admin/default/components/DailyTraffic";
import DonutCard from "views/admin/default/components/DonutCard";
import WeeklyRevenue from "views/admin/default/components/WeeklyRevenue";

import MiniStatistics from "components/card/MiniStatistics";
import LineChart from "components/charts/LineChart";
import Card from "components/card/Card";

import {
  lineChartDataTotalSpent,
  lineChartOptionsTotalSpent,
} from "variables/charts";

export default function UserReports() {
  // Chakra Color Mode
  return (
    <Box pt={{ base: "180px", md: "80px", xl: "80px" }}>
      {/* Main Fields */}
      <Grid
        mb="20px"
        gridTemplateColumns={{ xl: "repeat(3, 1fr)", "2xl": "1fr 0.46fr" }}
        gap={{ base: "20px", xl: "20px" }}
        display={{ base: "block", xl: "grid" }}
      >
        <Flex
          flexDirection="column"
          gridArea={{ xl: "1 / 1 / 2 / 3", "2xl": "1 / 1 / 2 / 2" }}
        >
          <Banner />
        </Flex>
        <Flex
          flexDirection="column"
          gridArea={{ xl: "1 / 3 / 2 / 4", "2xl": "1 / 2 / 2 / 3" }}
        >
          <Card px="0px" mb="20px">
            <DailyTraffic />
          </Card>
        </Flex>
      </Grid>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap="20px" mb="20px">
        <MiniStatistics
          endContent={
            <LineChart
              chartData={lineChartDataTotalSpent}
              chartOptions={lineChartOptionsTotalSpent}
            />
          }
          name="Earnings"
          value="$350.4"
        />
        <MiniStatistics
          endContent={
            <LineChart
              chartData={lineChartDataTotalSpent}
              chartOptions={lineChartOptionsTotalSpent}
            />
          }
          name="Spend this month"
          value="$642.39"
        />
        <MiniStatistics
          endContent={
            <LineChart
              chartData={lineChartDataTotalSpent}
              chartOptions={lineChartOptionsTotalSpent}
            />
          }
          growth="+23%"
          name="Sales"
          value="$574.34"
        />
      </SimpleGrid>
      <Grid
        mb="20px"
        gridTemplateColumns={{ xl: "repeat(3, 1fr)", "2xl": "3fr 2fr" }}
        gap={{ base: "20px", xl: "20px" }}
        display={{ base: "block", xl: "grid" }}
      >
        <Flex
          flexDirection="column"
          gridArea={{ xl: "1 / 1 / 2 / 3", "2xl": "1 / 1 / 2 / 2" }}
        >
          <WeeklyRevenue />
        </Flex>
        <Flex
          flexDirection="column"
          gridArea={{ xl: "1 / 3 / 2 / 4", "2xl": "1 / 2 / 2 / 3" }}
        >
          <Card px="0px" mb="20px" h="100%">
            <DonutCard growth="+20%" />
          </Card>
        </Flex>
      </Grid>
    </Box>
  );
}
