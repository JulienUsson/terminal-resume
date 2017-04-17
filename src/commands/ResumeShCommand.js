import EchoCommand from './EchoCommand';
import WhoamiCommand from './WhoamiCommand';
import ContactmeCommand from './ContactmeCommand';
import LsCommand from './LsCommand';

function ResumeShCommand() {
  const commands = [];
  commands.push(WhoamiCommand());
  commands.push(EchoCommand(['----- experience/freelance -----']));
  commands.push(LsCommand(['experience/freelance']));
  commands.push(EchoCommand(['----- experience/emploi -----']));
  commands.push(LsCommand(['experience/emploi']));
  commands.push(EchoCommand(['----- experience/stage -----']));
  commands.push(LsCommand(['experience/stage']));
  commands.push(EchoCommand(['----- Competences -----']));
  commands.push(LsCommand(['competences']));
  commands.push(EchoCommand(['----- Formation -----']));
  commands.push(LsCommand(['formation']));
  commands.push(ContactmeCommand());
  return commands.join('\n');
}

export default ResumeShCommand;
