import express, { Express } from "express";
import mongoose from "mongoose";
import financialRecordRoute from "./routes/financial-records"
import cors from "cors";

const app: Express = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

const mongoURI: string =
  "mongodb+srv://shadergaming1:FTgnxh0g34bcwrVA@personalfinancetracker.8dusr6e.mongodb.net/";

mongoose
  .connect(mongoURI)
  .then(() => console.log("---CONNECTED TO MONGODB---"))
  .catch((err) => console.error("Failed to Connect to MongoDB:", err));

app.use("/financial-records",financialRecordRoute);

app.listen(port, () => {
  console.log(`Server Running on Port ${port}`);
});