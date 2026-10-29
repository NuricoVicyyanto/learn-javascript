import { exercise01 } from "./01_node_http_basics_lab.js";
import { exercise02 } from "./02_routing_and_middleware_lab.js";
import { exercise03 } from "./03_json_apis_lab.js";
import { exercise04 } from "./04_http_clients_lab.js";

export const labTitle = "HTTP Clients and Servers";

export const topics = [
  { name: "node-http-basics", run: exercise01 },
  { name: "routing-and-middleware", run: exercise02 },
  { name: "json-apis", run: exercise03 },
  { name: "http-clients", run: exercise04 },
];
