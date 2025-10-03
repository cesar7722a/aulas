import express from "express";
const app = express();

// Middleware 1: Logger
// app.use((req, res, next) => {
//   console.log(`${new Date().toISOString()}: ${req.method} ${req.url}`);
//   next(); // Pass control to the next middleware
// });

// // Middleware 2: Request timer
// app.use((req, res, next) => {
//   req.requestTime = Date.now();
//   next();
// });

// // Route handler
// app.get("/", (req, res) => {
//   res.send(
//     `Hello! Your request came in at: ${new Date(req.requestTime).toISOString()}`
//   );
// });

// This middleware applies to all routes
// app.use((req, res, next) => {
//   console.log("This middleware runs for every request");
//   next();
// });

// // This middleware only applies to the specified path
// app.use("/user", (req, res, next) => {
//   console.log("This runs only for routes starting with /user");
//   next();
// });

// Authentication middleware
function authMiddleware(req, res, next) {
  // Get auth token from header
  const authToken = req.headers.authorization;

  if (authToken === "secret-token-123") {
    // If authentication is successful
    req.user = { id: 1, name: "Example User" };
    next(); // Proceed to the next middleware/route handler
  } else {
    // If authentication fails
    res.status(401).send("Unauthorized: Invalid token");
    // Note: We don't call next() here because we're ending the request-response cycle
  }
}

// Use the middleware only for protected routes
app.get("/public", (req, res) => {
  res.send("This is public content");
});

app.get("/protected", authMiddleware, (req, res) => {
  res.send(`Hello, ${req.user.name}! This is protected content.`);
});

app.listen(4040, () => {
  console.log("Server is running on port 4040");
});
