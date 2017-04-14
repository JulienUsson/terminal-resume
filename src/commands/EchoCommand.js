function EchoCommand(args) {
  if (args.length === 0) {
    return 'Error: expected arguments';
  }
  return args.join(' ');
}

export default EchoCommand;
