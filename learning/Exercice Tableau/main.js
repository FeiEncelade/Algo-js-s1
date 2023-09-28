let names = []

names.push("Vincent", "Paul", "Arthur")

console.log(names)

names.forEach(nom => {
    nom += "va à la pêche"
    console.log(nom)
})

///

console.log("Tu veux manger quoi ici? Voici le menu:")

let plats = []

plats.push(["Nouilles", 8], ["Beuf", 14], ["Poulet", 12])


plats.forEach(order => {
    order.forEach(element => {
        console.log(element)
    })
})

///

