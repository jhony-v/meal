import httpProxy from "http-proxy";
import proxyServicesURL from "./proxyServicesURL";

const proxy = httpProxy.createProxyServer();

httpProxy.createServer((req, res) => {
  proxyServicesURL.forEach((e) => proxy.web(req, res, { target: e.target }));
});

proxy.on("error", (e) => console.log(e));

proxy.listen(process.env.PORT || 7000);
