import { EmptyCommand, UnknownCommand } from './commands';

class CommandExecutor {
  static execute(commandLine) {
    const command = this.parseCommand(commandLine);
    let result = '';
    switch (command.name) {
      case '':
        result = EmptyCommand(command.args);
        break;
      default:
        result = UnknownCommand(command.args);
        break;
    }
    return result;
  }

  static parseCommand(commandLine) {
    const commandInfos = commandLine.trim().split(' ');
    const name = commandInfos[0];
    const args = commandInfos.shift();
    return {
      name,
      args,
    };
  }
}

export default CommandExecutor;
