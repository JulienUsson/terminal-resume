import store from '../store';
import { ERROR_PERMISSION, ERROR_WRONG_DIRECTORY } from '../store/modules/path';

function LsCommand(args) {
  let path = null;

  if (args.length > 1) {
    return 'Too many arguments';
  }
  if (args.length === 1) {
    path = args[0];
  }

  try {
    const list = store.getters.listDir(path);
    return list.join('\n');
  } catch (e) {
    if (e === ERROR_PERMISSION) {
      return 'Permission denied.';
    } else if (e === ERROR_WRONG_DIRECTORY) {
      return `"${args[0]}" is not a valid directory.`;
    }
  }
}

export default LsCommand;
