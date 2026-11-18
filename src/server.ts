import { createServer, IncomingMessage, ServerResponse } from "http";
import routeHandler from "./routes/route";

const server = createServer((req :IncomingMessage, res :ServerResponse) => {
  // console.log("response :", req.url);
  // console.log("response :", req.method);


routeHandler(req, res);
});

server.listen(5000, () => {
  console.log("Server running at http://localhost:5000/");
});