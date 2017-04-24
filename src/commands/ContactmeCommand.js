import store from '../store';

function ContactmeCommand() {
  const mail = store.getters.resume.contact.mail;
  const github = store.getters.resume.contact.github;
  const linkedin = store.getters.resume.contact.linkedin;
  const twitter = store.getters.resume.contact.twitter;

  return `Contactez-moi par mail : <a href="mailto:${mail}" target="_blank">${mail}</a>
Découvrez mon GitHub : <a href="${github}" target="_blank">${github}</a>
Retrouvez-moi sur LinkedIn : <a href="${linkedin}" target="_blank">${linkedin}</a>
Suivez-moi sur Twitter : <a href="${twitter}" target="_blank">${twitter}</a>`;
}

export default ContactmeCommand;
