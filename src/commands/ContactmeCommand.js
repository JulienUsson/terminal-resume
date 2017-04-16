const MAIL_ACCOUNT = '<a href="mailto:usson.julien@gmail.com" target="_blank">usson.julien@gmail.com</a>';
const GITHUB_ACCOUNT = '<a href="https://github.com/JulienUsson" target="_blank">https://github.com/JulienUsson</a>';
const TWITTER_ACCOUNT = '<a href="https://twitter.com/JulienUsson" target="_blank">https://twitter.com/JulienUsson</a>';
const LINKEDIN_ACCOUNT = '<a href="https://www.linkedin.com/in/julien-usson-64bbbb107" target="_blank">https://www.linkedin.com/in/julien-usson-64bbbb107</a>';

function ContactmeCommand() {
  return `Contactez moi par mail : ${MAIL_ACCOUNT}
Découvrez mon GitHub : ${GITHUB_ACCOUNT}
Retrouvez moi sur LinkedIn : ${TWITTER_ACCOUNT}
Suivez moi sur Twitter : ${LINKEDIN_ACCOUNT}
`;
}

export default ContactmeCommand;
