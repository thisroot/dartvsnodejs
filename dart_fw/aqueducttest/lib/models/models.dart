import 'package:json_annotation/json_annotation.dart';

part 'models.g.dart';

@JsonSerializable()
class Human {
  int id;
  String name;
  String surname;
  int age;
  bool gender;
  Human(this.id, this.name, this.surname, this.age, this.gender);

  factory Human.fromJson(Map<String, dynamic> json) => _$HumanFromJson(json);

  Map<String, dynamic> toJson() => _$HumanToJson(this);
}
