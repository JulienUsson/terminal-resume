import EmptyCommand from './EmptyCommand';
import UnknownCommand from './UnknownCommand';
import EchoCommand from './EchoCommand';

const commandMap = {
  '': EmptyCommand,
  echo: EchoCommand,
};

function CommandResolver(command) {
  if (commandMap[command] === undefined) {
    return UnknownCommand;
  }
  return commandMap[command];
}

export default CommandResolver;
