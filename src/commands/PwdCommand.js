import store from '../store';

function PwdCommand() {
  let path = store.getters.path;
  path = path.replace('~', '/home/julien');
  return path;
}

export default PwdCommand;
