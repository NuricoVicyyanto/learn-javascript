function json(res, status, value) {
  res.writeHead(status, { "content-type": "application/json" });
  res.end(JSON.stringify(value));
}

export function createRouter(_store) {
  return (req, res) => {
    // TODO: add middleware, versioned routes, and real handlers.
    if (req.method === "GET" && req.url === "/healthz") {
      return json(res, 200, { status: "ok" });
    }

    if (req.method === "GET" && req.url === "/readyz") {
      // TODO: check dependencies with a timeout.
      return json(res, 200, { status: "ready" });
    }

    return json(res, 501, {
      error: { code: "not_implemented", message: "TODO: implement API" },
    });
  };
}
