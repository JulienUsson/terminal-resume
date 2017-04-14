import CommandExecutor from '../CommandExecutor';

class Command {
  constructor(command) {
    this.command = command;
    this.result = CommandExecutor.execute(this.command);
  }
}

export default Command;
