import { CommandMap } from '.';

function HelpCommand() {
  const commands = Object.keys(CommandMap);
  commands.sort();
  commands.shift();
  return commands.join('\n');
}

export default HelpCommand;
