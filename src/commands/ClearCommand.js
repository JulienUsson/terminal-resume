import store from '../store';

function ClearCommand() {
  store.dispatch('clearCommands');
  return '';
}

export default ClearCommand;
