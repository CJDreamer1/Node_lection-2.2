import express from "express";

const app = express();

// app.use((req, res, next) => {
//   console.log("Middleware 1");
//   next();
// });

// app.use((req, res, next) => {
//   console.log("Middleware 2");
//   next();
// });

// app.use((req, res, next) => {
//   console.log("Middleware 3");
//   next();
// });

// використання мідлвара тільки за умови переходу по шляху /ping
// app.use("/ping", (req, res, next) => {
//   console.log("Middleware Ping");
//   next();
// });
// =============================================================
// ================== це еквівалентно написанню звичного мідвара (за умови переходу на /ping )
function middlewarePing(req, res, next) {
  console.log("Middleware Ping");
  next();
}

// app.use("/ping", middlewarePing);

// ============================================================

app.get("/ping", middlewarePing, (req, res) => {
  res.send({ message: "pong" });
});

app.post("/ping", (req, res) => {
  res.send({ message: "pong" });
});

app.listen(8080, () => {
  console.log("server is started on port 8080");
});
