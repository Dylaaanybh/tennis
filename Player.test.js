/* eslint-dev jest */

const Player = require('./player.js')

test('Crear un jugador', () => {
  const player1 = new Player('Roger Federer', 1, 'August 8, 1978')
  expect(player1.name).toBe('Roger Federer')
})


test('Crear un jugador con ranking', () => {
  const player1 = new Player('Roger Federer', 1, 'August 8, 1978')
  expect(player1.ranking).toBe(1)
})

test('Crear un jugador sin ranking por defecto debe ser 500', () => {
  const player1 = new Player('Roger Federer', undefined, 'August 8, 1978')
  expect(player1.ranking).toBe(500)
})

test('Crea un jugador de género masculino', () => {
  const player1 = new Player('Roger Federer', 1, 'August 8, 1978', 'male')
  expect(player1.Gender).toBe('male')
})

test('El genero no se puede modificar', () => {
  const player1 = new Player('Roger Federer', 1, 'August 8, 1978', 'male')
  expect(player1.Gender).toBe('male')
  player1.gender = 'female'
  expect(player1.Gender).not.toBe('female')
})


test('Crea un jugador de genero femenino si nop se pone nada', () => {
  const player1 = new Player('Serena', 1, 'August 8, 1978', undefined)
  expect(player1.Gender).toBe('female')
})

test('Crea un jugador de genero femenino si no es ni masculino ni femenino', () => {
  const player1 = new Player('Serena', 1, 'August 8, 1978', 'other')
  expect(player1.Gender).toBe('female')
})



test('Crear un jugador con fecha de nacimiento', () => {
  const player1 = new Player('Roger Federer', 1, '8/8/1978')
  expect(player1.birthday).toStrictEqual(new Date(1978, 7, 8))
})


test('Crear un jugador con fecha de nacimiento incorrecta', () => {
    const player1 = new Player('Roger Federer', 1, '33/14/2000')
    expect(player1.birthday).toStrictEqual(new Date(2001, 2, 5))
})

test('Se muestra con el método getBirthday la fecha con el formato d/m/Y', () => {
  const player1 = new Player('Roger Federer', 1, '8/8/1978')
  expect(player1.getBirthday()).toBe('08/08/1978')
})


test('Se crea un jugador con fecha y muestra su edad correctamente', () => {
    const player1 = new Player('Roger Federer', 1, '8/8/1978')
    expect(player1.age).toBe(46)


    const player2 = new Player('Roger Federer', 1, '8/8/2000')
    expect(player2.age).toBe(24)
  })
