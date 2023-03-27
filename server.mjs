import { createServer } from "http";

import { SERVER_BINDINGS } from "./common/config/server.bindings.mjs";

const { port } = SERVER_BINDINGS();

createServer((req, res) => {}).listen(port, () =>
  console.log(`Server starts listening on port: ${port}`)
);
