import 'dart:math' as math;

const firstnames = const [
  "Иван",
  "Андрей",
  "Борис",
  "Семен",
  "Антон",
  "Сергей",
  "Владимир",
  "Денис",
  "Анна",
  "София",
  "Елена",
  "Мария",
  "Светлана"
];

const lastnames = const [
  "Михайлов",
  "Киркоров",
  "Трофимов",
  "Галкин",
  "Петросян",
  "Свиридова",
  "Пугачева",
  "Орбокайте",
  "Ещекккаянибудь",
  "Иеще",
  "Ещебольше",
  "Бесконца",
  "Итакдалее"
];

var rand = math.Random();

String getRandomLiterals(List<String> list) => list[rand.nextInt(list.length)];
