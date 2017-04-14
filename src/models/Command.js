class Command {
  constructor(command) {
    this.command = command;
  }

  get result() {
    return this.command;
  }
}

export default Command;
