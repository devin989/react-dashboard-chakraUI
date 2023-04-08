import React from "react";
import ReactDOM from "react-dom";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import "./assets/css/App.css";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import AuthLayout from "./layouts/auth";
import AdminLayout from "./layouts/admin";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/theme";

const queryClient = new QueryClient();
ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <ChakraProvider theme={theme}>
      <React.StrictMode>
        <HashRouter>
          <Switch>
            <Route path={`/auth`} component={AuthLayout} />
            <Route path={`/admin`} component={AdminLayout} />

            <Redirect from="/" to="/admin" />
          </Switch>
        </HashRouter>
      </React.StrictMode>
    </ChakraProvider>
  </QueryClientProvider>,
  document.getElementById("root")
);
