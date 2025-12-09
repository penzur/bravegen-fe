import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/settings/integrations", "routes/settings/integrations.tsx"),
] satisfies RouteConfig;
