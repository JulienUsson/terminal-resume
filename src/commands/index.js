import EmptyCommand from './EmptyCommand';
import UnknownCommand from './UnknownCommand';
import EchoCommand from './EchoCommand';
import WhoamiCommand from './WhoamiCommand';
import CowsayCommand from './CowsayCommand';
import AvatarCommand from './AvatarCommand';
import ContactmeCommand from './ContactmeCommand';
import RickrolledCommand from './RickrolledCommand';

const commandMap = {
  '': EmptyCommand,
  echo: EchoCommand,
  whoami: WhoamiCommand,
  cowsay: CowsayCommand,
  avatar: AvatarCommand,
  contactme: ContactmeCommand,
  rickrolled: RickrolledCommand,
  nevergonna: RickrolledCommand,
};

function CommandResolver(command) {
  if (commandMap[command] === undefined) {
    return UnknownCommand;
  }
  return commandMap[command];
}

export default CommandResolver;
