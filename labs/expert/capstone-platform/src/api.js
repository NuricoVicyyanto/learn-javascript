import http from "node:http";
import { pathToFileURL } from "node:url";

import { loadConfig } from "./config.js";
import { MemoryStore } from "./store.js";

function json(res, status, value) {
  res.writeHead(status, { "content-type": "application/json" });
  res.end(JSON.stringify(value));
}

export function createApp(store = new MemoryStore()) {
  return (req, res) => {
    // TODO: auth, tenant scoping, idempotent ingestion, replay endpoints.
    if (req.method === "GET" && req.url === "/healthz") {
      return json(res, 200, { status: "ok" });
    }

    if (req.method === "POST" && req.url === "/v1/events") {
      return json(res, 501, {
        error: { code: "not_implemented", message: "TODO: ingest event" },
      });
    }

    return json(res, 404, {
      error: { code: "not_found", message: "route not found" },
    });
  };
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const config = loadConfig();
  const server = http.createServer(createApp());
  server.listen(config.httpPort, () => {
    console.log(`api listening on http://localhost:${config.httpPort}`);
  });
  // TODO: graceful shutdown on SIGTERM.
}
