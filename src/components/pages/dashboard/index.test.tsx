import React from "react";
import { render, screen } from "@testing-library/react";
import Dashboard from "./index";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ChakraProvider } from "@chakra-ui/react";

describe("Dashboard", () => {
  it("renders Banner component", () => {
    const queryClient = new QueryClient();
    render(
      <QueryClientProvider client={queryClient}>
        <Dashboard />
      </QueryClientProvider>
    );
    expect(screen.getByTestId("banner")).toBeInTheDocument();
  });

  it("renders HighestPriceBarChart component", () => {
    const queryClient = new QueryClient();
    render(
      <ChakraProvider>
        <QueryClientProvider client={queryClient}>
          <Dashboard />
        </QueryClientProvider>
      </ChakraProvider>
    );
    expect(screen.getByTestId("highest-price-bar-chart")).toBeInTheDocument();
  });

  it("renders WeeklyRevenue component", () => {
    const queryClient = new QueryClient();
    render(
      <ChakraProvider>
        <QueryClientProvider client={queryClient}>
          <Dashboard />
        </QueryClientProvider>
      </ChakraProvider>
    );
    expect(screen.getByTestId("weekly-revenue")).toBeInTheDocument();
  });

  it("renders DonutCard component", () => {
    const queryClient = new QueryClient();
    render(
      <ChakraProvider>
        <QueryClientProvider client={queryClient}>
          <Dashboard />
        </QueryClientProvider>
      </ChakraProvider>
    );
    expect(screen.getByTestId("donut-card")).toBeInTheDocument();
  });
});
