export class JsonStore {
  constructor(path) {
    this.path = path;
  }

  // TODO: read JSON, treat a missing file as an empty list, reject corrupt data.
  async load() {
    throw new Error("TODO: implement load");
  }

  // TODO: write to a temporary file, then rename for atomicity.
  async save(_tasks) {
    throw new Error("TODO: implement save");
  }
}
