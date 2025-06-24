import http from "http";
import fs from "fs";

const port = 3000;

const server = http.createServer((req, res) => {
  try {
    throw new Error("Test error");

    res.setHeader("Content-Type", "text/plain");
    res.statusCode = 200;
    res.end("Request successfully done");
  } catch (error) {
    const errorMessage = `${new Date().toISOString()} - ${error.message}\n`;
    fs.appendFile("errors.log", errorMessage, (err) => {
      if (err) {
        console.error("Error during writing file:", err);
      }
    });

    res.setHeader("Content-Type", "text/plain");
    res.statusCode = 500;
    res.end("Internal Server Error\n");
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
