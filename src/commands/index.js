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
import LifeCommand from './LifeCommand';
import LsCommand from './LsCommand';
import CdCommand from './CdCommand';
import PwdCommand from './PwdCommand';

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
  life: LifeCommand,
  ls: LsCommand,
  cd: CdCommand,
  pwd: PwdCommand,
};

function CommandResolver(command) {
  if (CommandMap[command] === undefined) {
    return UnknownCommand;
  }
  return CommandMap[command];
}

export default CommandResolver;
export { CommandMap };
