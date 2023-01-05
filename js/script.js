const root = document.querySelector(':root');
const btnTema = document.querySelector('#btn-theme');

const portuguese = document.querySelector('#brasil-flag');
const english = document.querySelector('#england-flag');

const h1 = document.querySelector('article h1');
const h2 = document.querySelector('article h2');
const h3 = document.querySelector('article h3');
const p = document.querySelector('article p');

const h1PortugueseTitle = 'Olá eu sou o Hugo !';
const h1EnglishTitle = `Hi, I'm Hugo!`

const h2PortugueseTitle = "Atualmente moro em São Paulo e sou estudante da Cubos Academy";
const h2EnglishTitle = "I currently live in São Paulo and I am a student at Cubos Academy";

const h3PortugueseTitle = "Assim que concluir desejo ingressar no mercado de trabalho e poder mostrar o meu potencial. ";
const h3EnglishTitle = "As soon as I conclude, I want to enter the job market and be able to show my potential.";

const portugueseText = `Sempre me interessei por tudo relacionado a computadores, 
Realizei alguns cursos profissionalizantes todos voltados a área da informática.
Em 2014 conclui um curso de Técnico em informática onde acabei me interessando ainda mais pela área da programação.
Através de pesquisas na internet conheci a Cubos Academy e atualmente realizo o curso de Desenvolvedor de Software `;
const englishText = `I have always been interested in everything related to computers,
I took some professional courses all focused on the area of informatics.
In 2014, I completed a Computer Technician course where I ended up becoming even more interested in the area of programming.
Through research on the internet I came across Cubos Academy and I am currently taking the Software Developer course `;

const idioma = () => {

  if (localStorage.getItem('idioma') === 'portugues') {
    h1.textContent = h1PortugueseTitle;
    h2.textContent = h2PortugueseTitle;
    h3.textContent = h3PortugueseTitle;
    p.textContent = portugueseText;
  } else {
    h1.textContent = h1EnglishTitle;
    h2.textContent = h2EnglishTitle;
    h3.textContent = h3EnglishTitle;
    p.textContent = englishText;
  }

};

idioma()

const temas = () => {

  if (localStorage.getItem('tema') === 'black') {
    root.style.setProperty('--cor-fundo', 'black');
    root.style.setProperty('--cor-testo', 'white');
    root.style.setProperty('--cor-top', 'rgb(105, 103, 105)');
    btnTema.setAttribute('src', './assets/moon.svg');
    console.log('escuro')
  } else {
    root.style.setProperty('--cor-fundo', 'white');
    root.style.setProperty('--cor-testo', 'black');
    root.style.setProperty('--cor-top', 'blue');
    btnTema.setAttribute('src', './assets/sun.svg');
    console.log('claro')
  }

};

temas()

btnTema.addEventListener('click', () => {
  if (btnTema.src.includes('moon.svg')) {
    localStorage.setItem('tema', 'white')
    btnTema.setAttribute('src', './assets/sun.svg');
  } else {
    localStorage.setItem('tema', 'black')
    btnTema.setAttribute('src', './assets/moon.svg');
  }
  return temas()
});

portuguese.addEventListener('click', () => {
  localStorage.setItem('idioma', 'portugues')
  return idioma()
})

english.addEventListener('click', () => {
  localStorage.setItem('idioma', 'english')
  return idioma()
})