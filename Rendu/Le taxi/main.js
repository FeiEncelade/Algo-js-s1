
// 1. Faire une classe "personnage" 

class character {
  constructor(name, mentalHealth) {
    this.name = name
    this.hp = mentalHealth
  }

  // 5. Créer une fonction Trajet dans la classe "personnage"

  Trajet(playlist) {
    console.log(playlist)

    let numChangeTaxi = 0
    let numRedLights = 0

    while (numRedLights < 30 && this.hp > 0) {
      numRedLights++
      console.log(numRedLights)

      var shuffleplaylist = playlist[Math.floor(Math.random() * playlist.length)]


      if (shuffleplaylist === 'Wejdene - Anissa') {
        this.hp--
        numChangeTaxi++
      }
      console.log(this.hp === 0)
      if (this.hp === 0) {
        console.log('John est explosé !')

        break
      }
      if (numRedLights === 30) {
        console.log('John est arrivé !')

        break
      }
    }
  }

}


// 2. Créer John

const John = new character('John', 4)
console.log(John.hp)

// 3. Créer un tableau Musique

let musics = ['Wejdene - Anissa', 'Apple - Eminem', 'Hayloft - Mother Mother', 'Hard Times - Paramore', 'Dummy! - Toby Fox']


// 4. Afficher les infos

console.log(John, musics)


// 6. Appeler la fonction Trajet

John.Trajet(musics)


