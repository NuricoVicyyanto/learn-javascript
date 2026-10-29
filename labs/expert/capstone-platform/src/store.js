export class MemoryStore {
  // TODO: implement CreateEvent with idempotency.
  async createEvent(_event) {
    throw new Error("TODO: implement createEvent");
  }

  // TODO: claim a bounded batch of deliveries.
  async claimDeliveries(_limit) {
    throw new Error("TODO: implement claimDeliveries");
  }

  // TODO: record one attempt and schedule the next one.
  async recordAttempt(_deliveryId, _status, _error) {
    throw new Error("TODO: implement recordAttempt");
  }

  // TODO: move exhausted deliveries to the dead-letter state.
  async moveToDeadLetter(_deliveryId, _reason) {
    throw new Error("TODO: implement moveToDeadLetter");
  }
}
