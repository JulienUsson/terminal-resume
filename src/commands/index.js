import EmptyCommand from './EmptyCommand';
import UnknownCommand from './UnknownCommand';
import EchoCommand from './EchoCommand';
import WhoamiCommand from './WhoamiCommand';
import CowsayCommand from './CowsayCommand';
import AvatarCommand from './AvatarCommand';

const commandMap = {
  '': EmptyCommand,
  echo: EchoCommand,
  whoami: WhoamiCommand,
  cowsay: CowsayCommand,
  avatar: AvatarCommand,
};

function CommandResolver(command) {
  if (commandMap[command] === undefined) {
    return UnknownCommand;
  }
  return commandMap[command];
}

export default CommandResolver;
