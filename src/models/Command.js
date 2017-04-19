class Command {
  constructor(command, path, showCommand = true) {
    this.path = path;
    this.command = command;
    this.result = '';
    this.showCommand = showCommand;
  }
}

export default Command;
