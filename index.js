const express = require("express");
const path = require("path");
const bp = require("body-parser");
const { rootRouter } = require("./routers/root.router");
const app = express();
// app.use(express.json());

app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

const publicDirectlyPath = path.join(__dirname, "/");
app.use(express.static(publicDirectlyPath));

app.use("/api", rootRouter);

const port = 4000;
app.listen(port, () => {
  console.log(`App is running port ${port}`);
});
