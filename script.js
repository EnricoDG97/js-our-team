/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede
*/

// MILESTONE 1: creo array di oggetti
let members = [
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        image: "wayne-barnett-founder-ceo.jpg"
    },
    {
        name: "Angela Caroll",
        role: "Chief Editor",
        image: "angela-caroll-chief-editor.jpg"
    },
    {
        name: "Walter Gordon",
        role: "Office Manager",
        image: "walter-gordon-office-manager.jpg"
    },
    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        image: "angela-lopez-social-media-manager.jpg"
    },
    {
        name: "Scott Estrada",
        role: "Developer",
        image: "scott-estrada-developer.jpg"
    },
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        image: "barbara-ramos-graphic-designer.jpg"
    },
];

console.log(members);

// MILESTONE 2 + bonus

const membersContainerEl = document.getElementById("membersContainer");


for (let i=0; i < members.length; i++) {
    let newMember = document.createElement("div");

    membersContainerEl.append(newMember);
    newMember.classList.add("card");

    let currentMember = members[i];

    // creo elementi per ciascuna chiave
    let memberImage = document.createElement("img");
    let memberName = document.createElement("div");
    let memberRole = document.createElement("div");
    // aggiungo stilizzazione con classi
    memberImage.classList.add("image");
    memberName.classList.add("title");
    memberRole.classList.add("role");
    // stampo in pagina
    memberImage.src = "img/" + currentMember.image;
    memberName = currentMember.name;
    memberRole = currentMember.role;
    // appendo gli elementi
    newMember.append(memberImage);
    newMember.append(memberName);
    newMember.append(memberRole);
}
