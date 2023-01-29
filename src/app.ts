import bodyParser from "body-parser";
import express, { Request, Response } from "express";
import bmi from "./bmi";

const app = express();

const port = 3000;

app.use(bodyParser.json())

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.get("/bmi", async (req: Request, res: Response) {
  const weight = req.params.weight;
  const weightUnit = req.params.weightUnit;
  const height = req.params.height;
  const heightUnit = req.params.heightUnit;

  res.send({
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
export default app;
