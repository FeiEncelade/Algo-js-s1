
// 1. Créer une classe Pokémon

class Pokemon {
    constructor(name, hp, atk, def) {
        this.name = name
        this.hp = hp
        this.atk = atk
        this.def = def
    }

    // 5. Ajouter la fonction d'attaquer 
    attackPokemon(target) {
        target.hp -= this.atk
    }
}


// 2. Créer un pokémon avec cette classe

const carapuce = new Pokemon("Carapuce", 40, 4, 3)


// 3. Afficher ce pokémon dans la console

console.log(carapuce)


// 4. Créer un second pokémon

const salameche = new Pokemon("Salameche", 30, 5, 3)

console.log(salameche)


// 6. Faire s'attaquer deux Pokémons entre eux

carapuce.attackPokemon(salameche)


// const dammage = Pokemon.atk -= Pokemon.def

console.log(salameche.hp)

while (salameche.hp >= 0 || carapuce.hp >= 0) {

    carapuce.attackPokemon(salameche)
    console.log(' Carapuce a affligé ' + carapuce.atk + " points d'attaques à Salameche")
    console.log(' Salameche a ' + salameche.hp + ' points de vie.');

    if (salameche.hp <= 0) {
        console.log('Carapuce a gagné le combat !')

        break
    }
    salameche.attackPokemon(carapuce)
    console.log(' Salameche a affligé ' + salameche.atk + " points d'attaques à Carapuce")
    console.log(' Carapuce a ' + carapuce.hp + ' points de vie.');

    if (carapuce.hp <= 0) {
        console.log('Salameche a gagné le combat !')

        break
    }


}

