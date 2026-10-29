export class Tenant {
  constructor({ id, name, apiKey }) {
    this.id = id;
    this.name = name;
    this.apiKey = apiKey;
  }
}

export class Endpoint {
  constructor({ id, tenantId, url, secret, active = true }) {
    this.id = id;
    this.tenantId = tenantId;
    this.url = url;
    this.secret = secret;
    this.active = active;
  }
}

export class Event {
  constructor({ id, tenantId, type, payload, idempotencyKey, createdAt }) {
    this.id = id;
    this.tenantId = tenantId;
    this.type = type;
    this.payload = payload;
    this.idempotencyKey = idempotencyKey;
    this.createdAt = createdAt ?? new Date();
  }
}

export class Delivery {
  constructor({ id, eventId, endpointId, status = "pending", attempts = 0, nextTryAt }) {
    this.id = id;
    this.eventId = eventId;
    this.endpointId = endpointId;
    this.status = status;
    this.attempts = attempts;
    this.nextTryAt = nextTryAt;
  }
}
