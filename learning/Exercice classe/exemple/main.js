
// 1. Créer une classe Pokémon

class Pokemon {
    constructor(name, hp, atk, def, luck) {
        this.name = name
        this.hp = hp
        this.atk = atk
        this.def = def
        this.luck = luck
    }

    // Faire une fonction de Luck

    isLucky() {
        if (Math.random() <= this.luck) {
            return true
        } else {
            return false
        }
    }

    // 5. Ajouter la fonction d'attaquer 
    attackPokemon(target) {
        if (this.isLucky() === true) {


            let damage = this.atk - target.def
            target.hp -= damage
            console.log(this.name + ' a attaqué ' + target.name + ', il lui reste ' + target.hp + ' points de vie.')
        } else {
            console.log('Il rate son attaque !')
        }
    }
}


// 2. Créer un pokémon avec cette classe

const carapuce = new Pokemon("Carapuce", 20, 4, 3, 0.2)


// 3. Afficher ce pokémon dans la console

console.log(carapuce)


// 4. Créer un second pokémon

const salameche = new Pokemon("Salameche", 15, 5, 3, 0.5)

console.log(salameche)


// 6. Faire s'attaquer deux Pokémons entre eux

carapuce.attackPokemon(salameche)

// 7. Faire un while tant que l'un des deux a plus de hp

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

