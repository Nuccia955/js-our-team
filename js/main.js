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

//2. print teamList
//2.1 refs
const teamContainer = document.querySelector('.team-container');

//2.2 call genTeamList function
genTeamList(teamList, teamContainer);

//3 make form input dinamic to add new members
//3.1 refs
const btnAddMember = document.getElementById('addMemberButton');
btnAddMember.addEventListener('click', () => {
    const nameInput = document.getElementById('name').value;
    const roleInput = document.getElementById('role').value;
    const imageSrcInput = document.getElementById('image').value;
    //3.2 call genNewMember
    teamList.push(genNewMember(nameInput, roleInput, imageSrcInput));
    //3.3 update teamList in HTML
    genTeamList(teamList, teamContainer);
    console.table(teamList);
})





/***********
 * FUNZIONI
 * *********/
//1. define function to generate teamList
function genTeamList (nameList, nodeContainer) {
    nodeContainer.innerHTML = '';
    for (let i = 0; i < nameList.length; i++) {
        const teamMember = nameList[i];
        nodeContainer.innerHTML += `
        <div class="team-card">
            <div class="card-image">
              <img
                src="${teamMember.imgSrc}"
                alt="${teamMember.nameMember}"
              />
            </div>
            <div class="card-text">
              <h3>${teamMember.nameMember}</h3>
              <p>${teamMember.role}</p>
            </div>
          </div>`;
    }
    return nodeContainer;
}


//2. funzione per generare nuovo oggetto (nuovo membro del team)
function genNewMember (name, role, img) {
    const newMember = {
        nameMember: `${name}`,
        role: `${role}`,
        imgSrc: `${img}`,
    };    
    return newMember;
}