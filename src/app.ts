import express, { Request, Response, NextFunction } from "express";
import routes from "./routes/routes";
import { CustomError } from "./models/Error/Error";
import bodyParser from "body-parser";
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/myTwitter", routes);
app.use(
  (error: CustomError, req: Request, res: Response, next: NextFunction) => {
    res.status(error.statusCode).json({ message: error.message });
  }
);
app.listen(3000, () => {
  console.log("server started at 3000");
});
