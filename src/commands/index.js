import EmptyCommand from './EmptyCommand';
import UnknownCommand from './UnknownCommand';
import EchoCommand from './EchoCommand';
import WhoamiCommand from './WhoamiCommand';
import CowsayCommand from './CowsayCommand';

const commandMap = {
  '': EmptyCommand,
  echo: EchoCommand,
  whoami: WhoamiCommand,
  cowsay: CowsayCommand,
};

function CommandResolver(command) {
  if (commandMap[command] === undefined) {
    return UnknownCommand;
  }
  return commandMap[command];
}

export default CommandResolver;
