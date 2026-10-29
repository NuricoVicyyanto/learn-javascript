export function loadConfig(env = process.env) {
  // TODO: validate required values and fail fast.
  return {
    port: Number(env.PORT ?? 8080),
    databaseUrl: env.DATABASE_URL ?? "",
    shutdownTimeoutMs: 10_000,
  };
}
