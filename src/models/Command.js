import CommandExecutor from '../CommandExecutor';

class Command {
  constructor(command, path, showCommand = true) {
    this.path = path;
    this.command = command;
    this.result = CommandExecutor.execute(this.command);
    this.showCommand = showCommand;
  }
}

export default Command;
