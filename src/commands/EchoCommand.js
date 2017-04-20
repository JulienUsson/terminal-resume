function EchoCommand(args) {
  if (args.length === 0) {
    return '';
  }
  return args.join(' ');
}

export default EchoCommand;
