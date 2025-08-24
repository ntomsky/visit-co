import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("arrival", "routes/arrival.tsx"),
  route("house-guide", "routes/house-guide.tsx"),
  route("house-guide/:category", "routes/house-guide-category.tsx"),
  route("local", "routes/local.tsx"),
  route("more", "routes/more.tsx"),
] satisfies RouteConfig;
