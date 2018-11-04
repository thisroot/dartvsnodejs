import 'dart:io';
import 'package:dartvsnode/src/models/models.dart' as models;
import 'package:dartvsnode/src/utils/fake.dart';
import 'dart:convert' show json;

void test1(HttpRequest request) {
  request.response
    ..write('Hello, world!')
    ..close();
}

void test2(HttpRequest request) {
  int count = 10000;
  var humans = List<models.Human>();

  for (int i = 0; i < count; i++) {
    humans.add(models.Human(i, getRandomLiterals(firstnames),
        getRandomLiterals(lastnames), rand.nextInt(60), rand.nextBool()));
  }

  request.response.headers.contentType = ContentType.json;

  request.response
    ..write(json.encode(humans))
    ..close();
}

void defaultHandler(HttpRequest request) {
  request.response
    ..write('DartVsNodejs')
    ..close();
}
