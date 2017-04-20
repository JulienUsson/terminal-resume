import store from '../store';
import EchoCommand from './EchoCommand';
import WhoamiCommand from './WhoamiCommand';
import ContactmeCommand from './ContactmeCommand';
import LsCommand from './LsCommand';

function echoFileSystem(commands, repertory, path = '~') {
  if (repertory.repertories.length === 0) {
    commands.push(EchoCommand([`############ echo \`${path}\` ############`]));
    commands.push(LsCommand([path]));
    return;
  }

  repertory.repertories.forEach((dir) => {
    echoFileSystem(commands, dir, `${path}/${dir.name}`);
  });
}

function ResumeShCommand() {
  const commands = [];
  commands.push(WhoamiCommand());
  echoFileSystem(commands, store.getters.fileSystem);
  commands.push(ContactmeCommand());
  return commands.join('\n');
}

export default ResumeShCommand;
