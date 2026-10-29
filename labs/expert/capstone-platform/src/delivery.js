export class Worker {
  constructor(store, workers) {
    this.store = store;
    this.workers = workers;
  }

  // TODO: claim batches, deliver with timeout, retry with jitter, handle DLQ.
  async run(_signal) {
    throw new Error("TODO: implement worker loop");
  }
}

// TODO: sign the body, set headers, enforce a timeout, and classify retryable errors.
export async function deliver(_url, _secret, _payload) {
  throw new Error("TODO: implement signed delivery");
}
