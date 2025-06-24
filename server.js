import http from "http";

const port = 3000;

const server = http.createServer((req, res) => {
  const authHeader = req.headers["authorization"];
  res.setHeader("Content-Type", "text/plain");

  if (authHeader) {
    res.statusCode = 200;
    res.end("Authorization header received\n");
  } else {
    res.statusCode = 401;
    res.end("Unauthorized\n");
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
