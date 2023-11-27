
const userList = [
    {nome: "Giorgio", cognome: "Rossi", eta: 18},
    {nome: "Paolo", cognome: "Gialli", eta: 16},
    {nome: "Francesco", cognome: "Verdi", eta: 20},
    {nome: "Filippo", cognome: "Arancio", eta: 21},
    {nome: "Lola", cognome: "Rosso", eta: 15},
    {nome: "Lara", cognome: "Verde", eta: 25}
];

const newUserArray = userList.map( (user) => user = ` ${user.nome} ${user.cognome}, ${user.eta > 18 ? "Puo' guidare" : "Non puo' guidare"}`);

console.log(newUserArray);