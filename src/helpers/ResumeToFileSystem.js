import FileSystemNode from '../models/FileSystemNode';

function experienceToFileSystem(experiences) {
  const experienceNode = new FileSystemNode('experience');
  experiences.forEach((category) => {
    const categoryNode = new FileSystemNode(category.title.toLowerCase());
    category.items.forEach((item) => {
      categoryNode.files.push(`-rw-r--r--  ${item.date} ${item.title} [${item.skills.join(', ')}]`);
    });
    experienceNode.repertories.push(categoryNode);
  });
  return experienceNode;
}

function educationsToFileSystem(educations) {
  const formationNode = new FileSystemNode('formation');
  educations.forEach((item) => {
    formationNode.files.push(`-rw-r--r-- ${item.date} ${item.title}`);
  });
  return formationNode;
}

function skillsToFileSystem(skills) {
  const skillsNode = new FileSystemNode('competences');
  skills.forEach((category) => {
    const categoryNode = new FileSystemNode(category.title.toLowerCase());
    category.items.forEach((item) => {
      let skill = `-rw-r--r--  ${item.title}`;
      if (item.description) {
        skill += ` [${item.description}]`;
      }
      categoryNode.files.push(skill);
    });
    skillsNode.repertories.push(categoryNode);
  });
  return skillsNode;
}

function hobbiesToFileSystem(hobbies) {
  const hobbiesNode = new FileSystemNode('hobbies');
  hobbies.forEach((item) => {
    hobbiesNode.files.push(`-rw-r--r-- ${item.title} (${item.description})`);
  });
  return hobbiesNode;
}

function ResumeToFileSystem(resume) {
  return {
    name: '~',
    repertories: [
      experienceToFileSystem(resume.experiences),
      educationsToFileSystem(resume.educations),
      skillsToFileSystem(resume.skills),
      hobbiesToFileSystem(resume.hobbies),
    ],
    files: [
      'hello.jpg',
    ],
  };
}

export default ResumeToFileSystem;
