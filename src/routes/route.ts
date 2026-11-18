import type { IncomingMessage, ServerResponse } from "http";
import productsController from "../controllers/product.controller";
import usersController from "../controllers/users.controller";

const routeHandler = (req: IncomingMessage, res: ServerResponse) => {
  const url = req.url;
  const method = req.method;

  if (url === "/" && method === "GET") {
    // console.log("it is working");
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({ status: true, message: "Welcome to the Home Page" }),
    );
  } 
  
  
  else if (url?.startsWith("/products")) {
    productsController(req, res);
  } 
  
  else if (url?.startsWith("/users")) {
    usersController(req, res);
  } 
  
  else {
    // console.log("it is not working");
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ status: false, error: "Page Not Found" }));
  }
};

export default routeHandler;
