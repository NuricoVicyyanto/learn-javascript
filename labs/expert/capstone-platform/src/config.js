export function loadConfig(env = process.env) {
  // TODO: validate values and redact secrets in logs.
  return {
    httpPort: Number(env.HTTP_PORT ?? 8080),
    databaseUrl: env.DATABASE_URL ?? "",
    workerCount: Number(env.WORKER_COUNT ?? 4),
    shutdownTimeoutMs: 20_000,
  };
}
