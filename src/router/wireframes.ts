import { createRoutes } from "./route-utils";

export const views = [
  'baseline',
  'constrained',
  'discord',
  'extended-toolbar',
  'inbox',
  'side-navigation',
  'steam',
  'system-bar',
  'three-column',
]

export default createRoutes('/wireframes', views)
