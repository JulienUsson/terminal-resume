import EmptyCommand from './EmptyCommand';
import UnknownCommand from './UnknownCommand';

const commandMap = {
  '': EmptyCommand,
};

function CommandResolver(command) {
  if (commandMap[command] === undefined) {
    return UnknownCommand;
  }
  return commandMap[command];
}

export default CommandResolver;
