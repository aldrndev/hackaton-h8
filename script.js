let question = [
  'welcome',
  'tangan kesemutan',
  'kucing belang',
  'minum jamu',
  'rumah tangga',
  'senam otak',
  'lebih baik',
  'polisi tidur',
  'racun tikus',
  'pulang sekolah',
  'untaian bunga',
  'rumput kering',
  'harga pas',
  'jangka kaki',
  'pohon rambutan roboh',
  'tempat makan',
  'hidup senang',
  'petenis handal',
];

let dice = document.querySelector('.dice');
let newBtn = document.querySelector('.btn--new');
let nextBtn = document.querySelector('.btn--roll');
let answerBtn = document.querySelector('.btn--answer');
let lifeBtn = document.querySelector('.btn--life');
let scoreBtn = document.querySelector('.btn--score');
let cekJawaban = document.querySelector('#cek-jawaban');

let idSoal = 0;
let score = 0;
let life = 3;

nextBtn.innerHTML = '🎮 Start Game';
cekJawaban.style.display = 'none';
answerBtn.style.display = 'none';
newBtn.style.display = 'none';
nextBtn.addEventListener('click', function () {
  if (idSoal < question.length-1) {
    dice.src = `${idSoal + 1}.png`;
    idSoal++;
    answerBtn.style.display = 'inline';
  nextBtn.innerHTML = '⏭️ Next Guess';
  cekJawaban.style.display = 'inline';
  nextBtn.style.display = 'none';
  cekJawaban.style.display ='inline'
  } else {
    dice.src = 'game-over.jpg';
    cekJawaban.style.display = 'none';
    answerBtn.style.display = 'none';
    nextBtn.style.display = 'none';
    newBtn.style.display='inline'
  }
  
});

answerBtn.addEventListener('click', function () {
  if (!cekJawaban.value) return alert('Jawaban harus di isi');

  if (cekJawaban.value.toLowerCase() === question[idSoal]) {
    alert('Selamat jawaban kamu benar dan skor bertambah 5');
    score += 5;
    scoreBtn.innerHTML = Math.floor(score);
    answerBtn.style.display = 'none';
    nextBtn.style.display = 'inline';
    cekJawaban.style.display='none'
  }

  if (cekJawaban.value.toLowerCase() !== question[idSoal]) {
    alert('Yahhh jawaban kamu salah nihhh, nyawa kamu berkurang 1');
    life--;
    lifeBtn.innerHTML = life;
    if (life === 0) {
      dice.src = 'game-over.jpg';
      answerBtn.style.display = 'none';
      cekJawaban.style.display = 'none';
      nextBtn.style.display = 'none';
      newBtn.style.display = 'inline';
      alert(
        `Nyawa kamu sudah habis, selamat kamu mendapatkan score sebanyak ${score} point`
      );
    }
  }
  cekJawaban.value=''
});

newBtn.addEventListener('click', function () {
  score =0
  scoreBtn.innerHTML = score
  idSoal = 1;
  dice.src = `${idSoal}.png`;
  cekJawaban.style.display = 'inline';
  answerBtn.style.display = 'inline';
  nextBtn.style.display = 'none';
  life = 3;
  lifeBtn.innerHTML = life;
  newBtn.style.display = 'none';
  
});
