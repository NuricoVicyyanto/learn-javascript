export class App {
  constructor(store, output = console) {
    this.store = store;
    this.output = output;
  }

  async run(args) {
    const [command, ...rest] = args;

    switch (command) {
      case "add":
        return this.add(rest);
      case "list":
        return this.list(rest);
      case "done":
        return this.done(rest);
      case "delete":
        return this.delete(rest);
      case "stats":
        return this.stats(rest);
      case "help":
      case undefined:
        return this.help();
      default:
        throw new Error(`unknown command: ${command}`);
    }
  }

  // TODO: load tasks, assign an ID, validate the title, save.
  async add(_args) {
    throw new Error("TODO: implement add");
  }

  // TODO: support --json and filters.
  async list(_args) {
    throw new Error("TODO: implement list");
  }

  // TODO: mark a task as done by ID.
  async done(_args) {
    throw new Error("TODO: implement done");
  }

  // TODO: delete a task by ID.
  async delete(_args) {
    throw new Error("TODO: implement delete");
  }

  // TODO: count total and completed tasks.
  async stats(_args) {
    throw new Error("TODO: implement stats");
  }

  help() {
    this.output.log("Usage: task <add|list|done|delete|stats> [options]");
  }
}
