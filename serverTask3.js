import http from "http";

const port = 3000;

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/plain");

  if (req.method === "PUT") {
    res.statusCode = 200;
    res.end("PUT request completed\n");
  } else if (req.method === "DELETE") {
    res.statusCode = 200;
    res.end("DELETE request completed\n");
  } else {
    res.statusCode = 405;
    res.end("Method not supported\n");
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
