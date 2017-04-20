import FileSystem from '../../FileSystem';

export const ERROR_PERMISSION = 'ERROR_PERMISSION';
export const ERROR_WRONG_DIRECTORY = 'ERROR_WRONG_DIRECTORY';
export const UPDATE_PATH = 'UPDATE_PATH';

// state
const state = {
  directories: [FileSystem],
};

// getters
const getters = {
  path: (state) => {
    const directoriesName = state.directories.map(directory => directory.name);
    return directoriesName.join('/');
  },
  listDir: (state, getters) => (path = null) => {
    let directory = state.directories[state.directories.length - 1];
    if (path !== null) {
      const directories = getters.searchDir(path);
      directory = directories[directories.length - 1];
    }

    let list = directory.repertories.map(repertory => repertory.name);
    list = list.concat(directory.files);
    return list;
  },
  searchDir: state => (path = null) => {
    const dirs = path.split('/');
    const directoriesTmp = state.directories.slice(0);
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
  },
};

// actions
const actions = {
  changeDirectory({ state, commit }, directories) {
    commit(UPDATE_PATH, directories);
  },
};

// mutations
const mutations = {
  [UPDATE_PATH](state, directories) {
    state.directories = directories;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
