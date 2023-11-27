
const userList = [
    {nome: "Giorgio", cognome: "Rossi", eta: 18},
    {nome: "Paolo", cognome: "Gialli", eta: 16},
    {nome: "Francesco", cognome: "Verdi", eta: 20},
    {nome: "Filippo", cognome: "Arancio", eta: 21},
    {nome: "Lola", cognome: "Rosso", eta: 15},
    {nome: "Lara", cognome: "Verde", eta: 25}
];

const newUserArray = userList.map( (user) => {
    const isAbleToDrive = user.eta > 18;
    return user = ` ${user.nome} ${user.cognome}, ${isAbleToDrive ? "Puo' guidare" : "Non puo' guidare"}`;
});

console.log(newUserArray);