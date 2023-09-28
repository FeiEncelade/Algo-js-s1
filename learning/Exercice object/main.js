let user = {
    firstName : "Fei",
    lastName : "JIAN",
    age : 23,
    sexe : true,
    birthday : "05/12/1999",
    passion : "jouer aux jeux"
}

console.log(user)
console.log("First Name : " + user.firstName)
console.log("Last Name : " + user.lastName)
console.log("Birthday : " + user.birthday)


let sentence = user.firstName + user.lastName + " est née le " + user.birthday + " qui adore " + user.passion

console.log(sentence)

if(user.age > 18) {
    console.log("Cet ulitisateur est majeur!")
}
else {
    console.log("Cet utilisateur est mineur!")
}


if(user.sexe == true) {
    console.log("Cet utilisateur est féminin.")
}
else {
    console.log("Cet utilisateur n'est pas féminin.")
}
