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
import ResumeShCommand from './ResumeShCommand';
import AboutCommand from './AboutCommand';
import ClearCommand from './ClearCommand';

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
  'resume.sh': ResumeShCommand,
  about: AboutCommand,
  clear: ClearCommand,
};

function parseCommand(commandLine) {
  const commandInfos = commandLine.trim().split(' ');
  const name = commandInfos[0];
  const args = commandInfos.splice(1, commandInfos.length - 1);
  return {
    name,
    args,
  };
}

function commandResolver(command) {
  if (CommandMap[command] === undefined) {
    return UnknownCommand;
  }
  return CommandMap[command];
}

function ExecuteCommand(commandLine) {
  const command = parseCommand(commandLine);
  return commandResolver(command.name)(command.args);
}

export default ExecuteCommand;
export { CommandMap };
