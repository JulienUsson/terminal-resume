import moment from 'moment';

moment.locale('fr');
const now = moment();
const birthday = moment('1994-05-07');
const uptime = moment.duration(now.diff(birthday));

function MotdCommand() {
  return `     ____.     .__  .__                 ____ ___                            
    |    |__ __|  | |__| ____   ____   |    |   \\______ __________   ____   
    |    |  |  \\  | |  |/ __ \\ /    \\  |    |   /  ___//  ___/  _ \\ /    \\  
/\\__|    |  |  /  |_|  \\  ___/|   |  \\ |    |  /\\___ \\ \\___ (  <_> )   |  \\ 
\\________|____/|____/__|\\_____>___|__/ |______//______>______>____/|___|__/ 

Hostname......: Usson
Date..........: ${now.format('LLLL')}
Uptime........: ${uptime.years()} ans ${uptime.months()} mois ${uptime.days()} jours

Type 'help' to list all commands or use 'resume.sh' to print my résumé.`;
}

export default MotdCommand;
