import DirectoryService from '../services/DirectoryService';

function PwdCommand() {
  let path = DirectoryService.path;
  path = path.replace('~', '/home/julien');
  return path;
}

export default PwdCommand;
