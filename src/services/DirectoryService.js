import FileSystem from '../FileSystem';

const ERROR_PERMISSION = 'ERROR_PERMISSION';
const ERROR_WRONG_DIRECTORY = 'ERROR_WRONG_DIRECTORY';

class DirectoryService {
  constructor() {
    this.directories = [FileSystem];
  }

  get path() {
    const directoriesName = this.directories.map(directory => directory.name);
    return directoriesName.join('/');
  }

  changeDir(path) {
    const dirs = path.split('/');
    const directoriesTmp = this.directories;
    let currentDir = directoriesTmp[directoriesTmp.length - 1];

    for (let i = 0; i < dirs.length; i += 1) {
      const dir = dirs[i];

      if (dir === '..') {
        if (directoriesTmp.length === 1) {
          throw ERROR_PERMISSION;
        }
        directoriesTmp.pop();
        currentDir = directoriesTmp[directoriesTmp.length - 1];
      } else {
        const directory = currentDir.repertories.find(d => d.name === dir);
        if (directory) {
          currentDir = directory;
          directoriesTmp.push(directory);
        } else {
          throw ERROR_WRONG_DIRECTORY;
        }
      }
    }

    this.directories = directoriesTmp;
  }
}

export default new DirectoryService();
export { ERROR_PERMISSION, ERROR_WRONG_DIRECTORY };
