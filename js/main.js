/* TASK:
1. Creiamo il nostro array di oggetti che rappresentano ciascun membro del team. Ogni membro (oggetto) dovrà avere le informazioni (chiavi) necessarie per stampare la relativa card: Nome, Ruolo e Foto.


2.stampiamo tutte le card del nostro team.
  -refs nel DOM
  -invoca funzione per generare le card
  -inserire nell'html


3. Utilizziamo poi gli input presenti nella pagina per permettere all’utente di aggiungere nuovi membri del team.
  -refs nel DOM per selezionare valori inseriti nella form
  -invoca funzione per generare nuovo membro
  -inserisci oggetto nell'array 
*/

//1. create the array of team members
const teamList = [
    {
        nameMember: 'Wayne Barnett',
        role: 'Founder & CEO',
        imgSrc: 'img/wayne-barnett-founder-ceo.jpg',
    },
    {
        nameMember: 'Angela Caroll',
        role: 'Chief Editor',
        imgSrc: 'img/angela-caroll-chief-editor.jpg',
    },
    {
        nameMember: 'Walter Gordon',
        role: 'Office Manager',
        imgSrc: 'img/walter-gordon-office-manager.jpg',
    },
    {
        nameMember: 'Angela Lopez',
        role: 'Social Media manager',
        imgSrc: 'img/angela-lopez-social-media-manager.jpg',
    },
    {
        nameMember: 'Scott Estrada',
        role: 'Developer',
        imgSrc: 'img/scott-estrada-developer.jpg',
    },
    {
        nameMember: 'Barbara Ramos',
        role: 'Graphic Designer',
        imgSrc: 'img/barbara-ramos-graphic-designer.jpg',
    },
];




/***********
 * FUNZIONI
 * *********/
//1. funzione per generare le card


//2. funzione per generare nuovo oggetto (nuovo membro del team)