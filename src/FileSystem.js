const freelance = {
  name: 'freelance',
  repertories: [],
  files: [
    'Tapir',
    'Biose',
  ],
};

const emploi = {
  name: 'emploi',
  repertories: [],
  files: [],
};

const stage = {
  name: 'stage',
  repertories: [],
  files: [],
};

const experience = {
  name: 'experience',
  repertories: [
    freelance,
    emploi,
    stage,
  ],
  files: [],
};

const competences = {
  name: 'competences',
  repertories: [],
  files: [],
};

const formation = {
  name: 'formation',
  repertories: [],
  files: [
    'ISIMA',
    'DUT',
    'BAC',
  ],
};

const FileSystem = {
  name: '~',
  repertories: [
    experience,
    competences,
    formation,
  ],
  files: [],
};

export default FileSystem;
