import CommandExecutor from '../CommandExecutor';

class Command {
  constructor(command, showCommand = true) {
    this.command = command;
    this.result = CommandExecutor.execute(this.command);
    this.showCommand = showCommand;
  }
}

export default Command;
