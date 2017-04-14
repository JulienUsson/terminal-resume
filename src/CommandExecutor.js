import CommandResolver from './commands';

class CommandExecutor {
  static execute(commandLine) {
    const command = this.parseCommand(commandLine);
    return CommandResolver(command.name)(command.args);
  }

  static parseCommand(commandLine) {
    const commandInfos = commandLine.trim().split(' ');
    const name = commandInfos[0];
    const args = commandInfos.splice(1, commandInfos.length - 1);
    return {
      name,
      args,
    };
  }
}

export default CommandExecutor;
