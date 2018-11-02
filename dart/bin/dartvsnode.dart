import 'dart:io';
import 'dart:async';
import 'package:dartvsnode/src/routes/routes.dart' as handlers;

Future main() async {
  var server = await HttpServer.bind(
    InternetAddress.loopbackIPv4,
    4040,
  );
  print('Listening on localhost:${server.port}');

  await for (HttpRequest request in server) {
    List<String> path = request.uri.pathSegments;
    if (path.length > 0) {
      switch (path[0]) {
        case '1':
          //simple hello world test
          handlers.test1(request);
          break;
        case '2':
          handlers.test2(request);
          break;
        default:
          handlers.defaultHandler(request);
          break;
      }
    } else {
      handlers.defaultHandler(request);
    }
  }
}
