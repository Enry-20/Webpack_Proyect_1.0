import '../css/components.css';
import webpacklogo from '../img/webpack-logo.png';


export const heyBitch = (nombre) =>{

const header = document.createElement('header');
document.body.append(header);

const conteiner1 = document.createElement('div');
conteiner1.classList.add('conteiner1')
header.appendChild(conteiner1);
const h1 = document.createElement('h1');
h1.innerText = `Hey ${nombre}, welcome to`;
conteiner1.appendChild(h1);

//img

const imag = document.createElement('img');
imag.src = webpacklogo;
imag.style.width = "50%"/*el tamaño de la imgaen hace que no este indefinida la imagen */
conteiner1.appendChild(imag)
const h2 = document.createElement('h2');
h2.innerText = `Thanks ${nombre}, for stay here`;
conteiner1.appendChild(h2);

};


   

