import { createServer } from "http";

import { SERVER_BINDINGS } from "./common/config/server.bindings.mjs";

const { port } = SERVER_BINDINGS();

createServer((req, res) => {
  res.writeHead(200);
  res.end("WS server");
}).listen(port, () => {
  console.log(`Server starts listening on port: ${port}`);
});

["uncaughtException", "unhandledRejection"].forEach((event) =>
  process.on(event, (err) =>
    console.log(`event: ${event} with message ${err.stack || err}`)
  )
);
