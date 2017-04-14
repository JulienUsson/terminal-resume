class Command {
  constructor(command) {
    this.command = command;
  }

  get result() {
    this.command = this.command;
    return 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut justo feugiat diam dictum ultricies.\nMaecenas fermentum sit amet erat lobortis maximus. Mauris at faucibus neque, eget ultricies ligula.\nMauris tortor nunc, sodales quis felis at, commodo bibendum neque.';
  }
}

export default Command;
