class Player {
  name
  ranking
  birthday
  #gender
  constructor (name, ranking = 500, birthday, gender) {
    this.name = name
    this.ranking = ranking
    if (gender === 'male') this.#gender = 'male'
    else this.#gender = 'female'
    const [day, month, year] = birthday.split('/')
    this.birthday = new Date(year, month - 1, day)
  }

  get Gender () {
    return this.#gender
  }

  getBirthday () {
    return new Intl.DateTimeFormat('es-ES', { 
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      }).format(this.birthday)
  }

  get age () {
    return new Date().getFullYear() - this.birthday.getFullYear()
  }
}

module.exports = Player
