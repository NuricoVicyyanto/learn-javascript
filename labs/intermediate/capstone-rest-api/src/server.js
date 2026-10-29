import http from "node:http";
import { pathToFileURL } from "node:url";

import { loadConfig } from "./config.js";
import { createRouter } from "./router.js";
import { MemoryStore } from "./store.js";

export function startServer(config = loadConfig()) {
  const server = http.createServer(createRouter(new MemoryStore()));

  server.listen(config.port, () => {
    console.log(`listening on http://localhost:${config.port}`);
  });

  // TODO: handle SIGTERM, stop accepting connections, and close pools.
  return server;
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  startServer();
}
