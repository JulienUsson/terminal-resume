const ERROR_PERMISSION = 'ERROR_PERMISSION';
const ERROR_WRONG_DIRECTORY = 'ERROR_WRONG_DIRECTORY';

class Directory {
  constructor() {
    this.directory = [];
  }

  get path() {
    let path = '~';
    if (this.directory.length > 0) {
      path += '/';
      path += this.directory.join('/');
    }
    return path;
  }

  changeDir(path) {
    const dirs = path.split('/');
    for (let i = 0; i < dirs.length; i += 1) {
      const dir = dirs[i];
      if (dir === '..') {
        if (this.directory.pop(dir) === undefined) {
          throw ERROR_PERMISSION;
        }
      } else if (dir !== '.') {
        this.directory.push(dir);
      }
    }
  }
}

export default new Directory();
export { ERROR_PERMISSION, ERROR_WRONG_DIRECTORY };
