import EmptyCommand from './EmptyCommand';
import UnknownCommand from './UnknownCommand';
import EchoCommand from './EchoCommand';
import WhoamiCommand from './WhoamiCommand';
import CowsayCommand from './CowsayCommand';
import AvatarCommand from './AvatarCommand';
import ContactmeCommand from './ContactmeCommand';
import RickrolledCommand from './RickrolledCommand';
import MotdCommand from './MotdCommand';
import HelpCommand from './HelpCommand';

const CommandMap = {
  '': EmptyCommand,
  echo: EchoCommand,
  whoami: WhoamiCommand,
  cowsay: CowsayCommand,
  avatar: AvatarCommand,
  contactme: ContactmeCommand,
  nevergonna: RickrolledCommand,
  motd: MotdCommand,
  help: HelpCommand,
};

function CommandResolver(command) {
  if (CommandMap[command] === undefined) {
    return UnknownCommand;
  }
  return CommandMap[command];
}

export default CommandResolver;
export { CommandMap };
