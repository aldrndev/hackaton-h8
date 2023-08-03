let account = [
  {
    name: 'aldrin',
    username: 'aldrin',
    password: 'hacktiv8',
  },
  {
    name: 'arif',
    username: 'arif',
    password: 'hacktiv8',
  },
  {
    name: 'rizal',
    username: 'rizal',
    password: 'hacktiv8',
  },
  {
    name: 'firdaus',
    username: 'firdaus',
    password: 'hacktiv8',
  },
  {
    name: 'rifyal',
    username: 'rifyal',
    password: 'hacktiv8',
  },
];

let user = document.querySelector('#username');
let pwd = document.querySelector('#password');
let login = document.querySelector('#login-btn');
let form = document.querySelector('.login-form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  let login = false;

  for (let i = 0; i < account.length; i++) {
    let username = account[i].username;
    let password = account[i].password;
    if (
      user.value.toLowerCase() === username &&
      pwd.value.toLowerCase() === password
    ) {
      login = true;
      window.location.href = 'game.html';
    }
  }
  if (!login) {
    alert('Login gagal karena username/password salah!! silahkan ulangi lagi');
  }
});

let dice = document.querySelector('.dice').classList.add;
