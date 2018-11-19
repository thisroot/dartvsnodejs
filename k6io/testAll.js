import http from "k6/http";
import { check, group, sleep } from "k6";
import { Rate, Trend } from "k6/metrics";

const errorRate = new Rate("errors");

const dartSync = new Trend("dartSync");
const dartAsync = new Trend("dartAsync");
const dartFwSync = new Trend("dartFwSync");
const dartFwAsync = new Trend("dartFwAsync");
const nodeJsSync = new Trend("nodeJsSync");
const nodeJSAsync = new Trend("nodeJSAsync");
const nodeExpressClusterSync = new Trend("nodeExpressClusterSync");
const nodeExpressClusterAsync = new Trend("nodeJnodeExpressClusterAsync");

export function loadPage(url, title, dataCollector) {
  const r = http.get(url);
  check(r, {
    [`${title} => status is OK!`]: r => r.status == 200 && r.url == url
  }) || metrics.errorRate.add(1);
  dataCollector.add(r.timings.duration);
  return r;
}

export default function() {
  // group("dart_sync", () => {
  //   loadPage("http://localhost:4040/2", "dart_sync", dartSync);
  // });
  // group("dart_async", () => {
  //   loadPage("http://localhost:4040/3", "dart_async", dartAsync);
  // });
  // group("dart_fw_sync", () => {
  //   loadPage("http://localhost:8888/2", "dart_fw_sync", dartFwSync);
  // });
  // group("dart_fw_async", () => {
  //   loadPage("http://localhost:8888/3", "dart_fw_async", dartFwAsync);
  // });
  // group("node_sync", () => {
  //   loadPage("http://localhost:8080/2", "node_sync", nodeJsSync);
  // });
  // group("node_async", () => {
  //   loadPage("http://localhost:8080/3", "node_async", nodeJSAsync);
  // });
  group("node_express_cluster_sync", () => {
    loadPage(
      "http://localhost:8181/2",
      "node_express_cluster_sync",
      nodeExpressClusterSync
    );
  });
  group("node_express_cluster_async", () => {
    loadPage(
      "http://localhost:8181/3",
      "node_express_cluster_async",
      nodeExpressClusterAsync
    );
  });
}
