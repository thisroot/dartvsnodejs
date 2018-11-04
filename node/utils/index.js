module.exports.firstnames = [
  'Иван',
  'Андрей',
  'Борис',
  'Семен',
  'Антон',
  'Сергей',
  'Владимир',
  'Денис',
  'Анна',
  'София',
  'Елена',
  'Мария',
  'Светлана'
]

module.exports.lastNames = [
  'Михайлов',
  'Киркоров',
  'Трофимов',
  'Галкин',
  'Петросян',
  'Свиридова',
  'Пугачева',
  'Орбокайте',
  'Ещекккаянибудь',
  'Иеще',
  'Ещебольше',
  'Бесконца',
  'Итакдалее'
]

let getRandomArbitrary = (min, max) => {
  return (Math.random() * (max - min) + min) | 0
}

// получаем случайное значение из массива
module.exports.getRandomLiterals = arr => {
  return arr[getRandomArbitrary(0, arr.length)]
}
