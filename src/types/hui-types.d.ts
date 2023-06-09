import { type } from "os";

export {};

declare global {
  /**
   * Now declare things that go in the global namespace,
   * or augment existing declarations in the global namespace.
   */
  interface RoutesType {
    name: string;
    layout: string;
    component: () => string | ReactElement;
    icon: JSX.Element | string;
    path: string;
    secondary?: boolean;
  }
  type ChartData = {
    data: number[];
  };
}
