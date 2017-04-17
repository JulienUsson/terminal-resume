import EchoCommand from './EchoCommand';
import WhoamiCommand from './WhoamiCommand';
import ContactmeCommand from './ContactmeCommand';
import LsCommand from './LsCommand';

function ResumeShCommand() {
  let resume = '';
  resume += WhoamiCommand();
  resume += EchoCommand(['----- experience/freelance -----']);
  resume += LsCommand(['experience/freelance']);
  resume += EchoCommand(['----- experience/emploi -----']);
  resume += LsCommand(['experience/emploi']);
  resume += EchoCommand(['----- experience/stage -----']);
  resume += LsCommand(['experience/stage']);
  resume += EchoCommand(['----- Competences -----']);
  resume += LsCommand(['competences']);
  resume += EchoCommand(['----- Formation -----']);
  resume += LsCommand(['formation']);
  resume += ContactmeCommand();
  return resume;
}

export default ResumeShCommand;
