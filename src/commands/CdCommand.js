import DirectoryService, { ERROR_PERMISSION, ERROR_WRONG_DIRECTORY } from '../services/DirectoryService';

function CdCommand(args) {
  if (args.length === 0) {
    return '';
  }
  if (args.length > 1) {
    return 'Too many arguments';
  }
  try {
    DirectoryService.changeDir(args[0]);
  } catch (e) {
    if (e === ERROR_PERMISSION) {
      return 'Permission denied.';
    } else if (e === ERROR_WRONG_DIRECTORY) {
      return `"${args[0]}" is not a valid directory.`;
    }
  }
  return '';
}

export default CdCommand;
