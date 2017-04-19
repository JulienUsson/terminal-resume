import ExecuteCommand from '../commands';

class Command {
  constructor(command, path, showCommand = true) {
    this.path = path;
    this.command = command;
    this.result = ExecuteCommand(this.command);
    this.showCommand = showCommand;
  }
}

export default Command;
