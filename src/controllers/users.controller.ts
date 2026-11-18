import type { IncomingMessage, ServerResponse } from "http";

const usersController = (req: IncomingMessage, res: ServerResponse) => {

const method = req.method;

  if (method === "GET") {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(
    JSON.stringify({ status: true, message: "GET : Welcome to the Users Page get" }),
  );
};
}
export default usersController;
