import type { IncomingMessage, ServerResponse } from "http";
import { productService } from "../service/product.service";
const productsController = (req: IncomingMessage, res: ServerResponse) => {
  const url = req.url;
  const method = req.method;
  const product = productService()
  if (url === "/products" && method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        status: true,
        message: "Product received successfully",
        data: product,
      }),
    );
  }
};

export default productsController;
