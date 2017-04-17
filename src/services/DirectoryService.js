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

  listDir(path = null) {
    let directory = this.directories[this.directories.length - 1];
    if (path !== null) {
      const directories = this.searchDir(path);
      directory = directories[directories.length - 1];
    }

    let list = directory.repertories.map(repertory => repertory.name);
    list = list.concat(directory.files);
    return list;
  }

  changeDir(path) {
    this.directories = this.searchDir(path);
  }

  searchDir(path) {
    const dirs = path.split('/');
    const directoriesTmp = this.directories.slice(0);
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

    return directoriesTmp;
  }
}

export default new DirectoryService();
export { ERROR_PERMISSION, ERROR_WRONG_DIRECTORY };
