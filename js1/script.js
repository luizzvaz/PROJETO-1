/* eslint-disable import/extensions */
import navtab from './module/navtab.js';
import Acordion from './module/acodionn.js';
import ScrollSuave from './module/suavescroll.js';
import pageint from './module/animapage.js';
import modal from './module/modalLongin.js';
import balonmap from './module/balonmap.js';
import dropMenu from './module/dropMenu.js';
import menuMobile from './module/menuMobile.js';
import horario from './module/horarioFunc.js';
import infofetch from './module/fetchanimais.js';

const scrollSuave = new ScrollSuave('[data-menu="list"] a[href^="#"]');
scrollSuave.init(); // refatorado

const acodionn = new Acordion('[data-acordion="seletor"] dt');
acodionn.init();
horario();

navtab();

pageint();
modal();
balonmap();
dropMenu();
menuMobile();
infofetch();
