import store from '../store';

function WhoamiCommand() {
  const name = store.getters.resume.profil.name;
  const description = store.getters.resume.profil.description;
  return `${name}\n${description}`;
}

export default WhoamiCommand;
