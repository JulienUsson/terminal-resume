import store from '../store';
import { ERROR_PERMISSION, ERROR_WRONG_DIRECTORY } from '../store/modules/fileSystem';

function CdCommand(args) {
  if (args.length === 0) {
    return '';
  }
  if (args.length > 1) {
    return 'Too many arguments';
  }

  try {
    const directories = store.getters.searchDir(args[0]);
    store.dispatch('changeDirectory', directories);
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
