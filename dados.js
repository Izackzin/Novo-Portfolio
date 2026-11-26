/* Configuração: conta e repositório do GitHub onde o site está publicado */
var OWNER='Izackzin',REPO='Portfolio',TOKEN_KEY='isaac_token';
var PADRAO_PROJ=[
{id:1,titulo:'Portfólio web',categoria:'Desenvolvimento',tec:'HTML, CSS, JavaScript',desc:'Site pessoal bilíngue com tema claro e escuro, linha do tempo, certificados e painel de administração.',link:'https://izackzin.github.io/Portfolio/',status:'Ativo',visivel:true},
{id:2,titulo:'Currículo com design',categoria:'Design',tec:'Identidade visual, tipografia',desc:'Currículo de uma página com a identidade visual do portfólio, em português e inglês.',link:'',status:'Concluído',visivel:true},
{id:3,titulo:'README do perfil no GitHub',categoria:'Design',tec:'Markdown, SVG, badges',desc:'Perfil do GitHub com banner, selos de status e seções no estilo do portfólio.',link:'https://github.com/Izackzin',status:'Em andamento',visivel:true}];
var PADRAO_CERT=[
{id:'mk',titulo:'Game 2D',org:'MK+ Academy · 2021',horas:192,desc:'Formação completa em jogos 2D: game design, programação de mecânicas, animação de sprites, física, IA de NPCs, level design e publicação.',descEn:'Complete 2D game development training: game design, mechanics programming, sprite animation, physics, NPC AI, level design and publishing.',img:'certificados/mk.jpg'},
{id:'cs50',titulo:'CS50 · Harvard',org:'Ciência da Computação de Harvard no Brasil · Fundação Estudar',orgEn:'Harvard Computer Science in Brazil · Fundação Estudar',horas:70,desc:'Algoritmos, estruturas de dados, memória, C, Python, SQL, HTML, CSS e JavaScript, com projetos práticos.',descEn:'Algorithms, data structures, memory, C, Python, SQL, HTML, CSS and JavaScript, with practical projects.',img:'certificados/cs50.jpg'},
{id:'bradesco',titulo:'Python Básico',tituloEn:'Python Basics',org:'Fundação Bradesco · 2026',horas:18,desc:'Fundamentos da linguagem Python em curso autoinstrucional da Escola Virtual.',descEn:'Python fundamentals through a self-paced course from Escola Virtual.',img:'certificados/bradesco.jpg'},
{id:'santander',titulo:'Python',org:'Santander · 2026',horas:8,desc:'Introdução ao Python: sintaxe, variáveis, condicionais e lógica de programação.',descEn:'Introduction to Python: syntax, variables, conditionals and logic.',img:'certificados/santander.jpg'},
{id:'jornada',titulo:'Jornada Python',org:'Hashtag Treinamentos · 2026',horas:8,desc:'Evento prático de Python com foco em aplicação.',descEn:'Hands-on Python event focused on practice.',img:'certificados/jornada.jpg'},
{id:'devart',titulo:'DevArt: Um Novo Dia',org:'2026',horas:5,desc:'Design, desenvolvimento Front End e Inteligência Artificial aplicada.',descEn:'Design, Front End development and applied Artificial Intelligence.',img:'certificados/devart.jpg'},
{id:'rep',titulo:'Representante de Turma',tituloEn:'Class Representative',org:'UniCEUB · 2026',horas:20,desc:'Atuação de liderança estudantil no curso de Engenharia de Software.',descEn:'Student leadership role in the Software Engineering course.',img:'certificados/rep.jpg'}];
function token(){try{return sessionStorage.getItem(TOKEN_KEY)||localStorage.getItem(TOKEN_KEY)||''}catch(e){return ''}}
function en(){return document.documentElement.lang==='en'}
function el(tag,cls,txt){var e=document.createElement(tag);if(cls)e.className=cls;if(txt!=null)e.textContent=txt;return e}
function linkOk(u){return /^https?:\/\//i.test(u)}
function carregarJSON(arq,padrao){
return fetch('data/'+arq+'?t='+Math.floor(Date.now()/60000)).then(function(r){if(!r.ok)throw 0;return r.json()}).then(function(d){return Array.isArray(d)?d:padrao}).catch(function(){return padrao})}
function cartao(p){
var c=el('div','box'+(p.visivel?'':' off'));
c.appendChild(el('h3',null,p.titulo));
var t=el('div');t.style.margin='8px 0';
[p.categoria,p.status].concat((p.tec||'').split(',').map(function(s){return s.trim()}).filter(Boolean)).forEach(function(x){t.appendChild(el('span','tag',x))});
c.appendChild(t);c.appendChild(el('p','small',p.desc));
if(linkOk(p.link)){var a=el('a','btn p',en()?'View project':'Ver projeto');a.href=p.link;a.target='_blank';a.rel='noopener';c.appendChild(a)}
return c}
function cartaoCert(c,abrir){
var E=en(),d=el('div','box cert');
d.appendChild(el('span','h',c.horas+'h'));
d.appendChild(el('h3',null,(E&&c.tituloEn)||c.titulo));
d.appendChild(el('p','o',(E&&c.orgEn)||c.org));
d.appendChild(el('p',null,(E&&c.descEn)||c.desc));
if(/\.pdf$/i.test(c.img)){var a=el('a','view',E?'Open PDF':'Abrir PDF');a.href=c.img;a.target='_blank';a.rel='noopener';d.appendChild(a)}
else{var b=el('button','view',E?'View certificate':'Ver certificado');b.type='button';b.onclick=function(){abrir(c)};d.appendChild(b)}
return d}
function filtrar(l,cat,q){q=(q||'').toLowerCase();return l.filter(function(p){return(cat==='Todos'||p.categoria===cat)&&(p.titulo+' '+p.desc+' '+p.tec).toLowerCase().indexOf(q)>-1})}
function abas(box,aoMudar){
box.querySelectorAll('.tab').forEach(function(b){b.addEventListener('click',function(){
box.querySelectorAll('.tab').forEach(function(x){x.setAttribute('aria-pressed','false')});
b.setAttribute('aria-pressed','true');aoMudar(b.getAttribute('data-cat'))})})}
