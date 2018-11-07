import 'dart:io';
import 'dart:async';
import 'package:aqueduct/aqueduct.dart';
import 'package:aqueducttest/models/models.dart' as models;
import 'package:aqueducttest/utils/fake.dart';
import 'dart:convert' show json;

const countHumans = 1000;

Response test1(Request request) {
  return Response.ok('Hello world');
}

Response test2(Request request) {
  final humans = List<models.Human>();

  for (int i = 0; i < countHumans; i++) {
    humans.add(models.Human(i, getRandomLiterals(firstnames),
        getRandomLiterals(lastnames), rand.nextInt(60), rand.nextBool()));
  }

  return Response.ok(humans);
}

Future<Response> test3(Request request) {
  final humans = List<models.Human>();

  for (int i = 0; i < countHumans; i++) {
    humans.add(models.Human(i, getRandomLiterals(firstnames),
        getRandomLiterals(lastnames), rand.nextInt(60), rand.nextBool()));
  }
  return Future.value(Response.ok(humans));
}
