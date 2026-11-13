import { createServer, IncomingMessage, ServerResponse } from "http";

const server = createServer((req :IncomingMessage, res :ServerResponse) => {
  // console.log("response :", req.url);
  // console.log("response :", req.method);


  const url = req.url;
  const method = req.method;


  if(url === "/" && method === "GET"){
    // console.log("it is working");
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ status: true, message: "Welcome to the Home Page" }));
  }
  
  else if (url?.startsWith("/products") && method === "GET") {
    // console.log("it is working");
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ status: true, message: "Welcome to the Products Page" }));
  }

  else if (url === "/users" && method === "GET") {
    // console.log("it is working");
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ status: true, message: "Welcome to the Users Page" }));
  }
  



  else{
    // console.log("it is not working");
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ status: false, error: "Page Not Found" }));
  }
});

server.listen(5000, () => {
  console.log("Server running at http://localhost:5000/");
});