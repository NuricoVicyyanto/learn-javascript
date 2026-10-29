export class MemoryStore {
  constructor() {
    this.bookmarks = new Map();
  }

  // TODO: implement create, get, list, update, delete.
  async create(_bookmark) {
    throw new Error("TODO: implement create");
  }

  async get(_userId, _id) {
    throw new Error("TODO: implement get");
  }

  async list(_userId, _limit) {
    throw new Error("TODO: implement list");
  }

  async update(_bookmark) {
    throw new Error("TODO: implement update");
  }

  async delete(_userId, _id) {
    throw new Error("TODO: implement delete");
  }
}
