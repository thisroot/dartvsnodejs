import 'package:aqueducttest/routes/routes.dart' as handlers;
import 'aqueducttest.dart';

class AqueducttestChannel extends ApplicationChannel {
  @override
  Controller get entryPoint {
    final router = Router();

    router.route("/2").linkFunction(handlers.test2);
    router.route('/3').linkFunction((request) async {
      final result = await handlers.test3(request);
      return result;
    });

    return router;
  }
}
