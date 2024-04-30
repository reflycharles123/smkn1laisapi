import express from "express";
// logger nya menggunakan morgan
import morgan from "morgan";
import dotenv from "dotenv";
import path from "path";
import cors from "cors";
//import routes
import siswaRoutes from "./routes/siswaRoutes.js";

//import koneksi nya
import conn from "./config/db.js";
// dotenv config nya
dotenv.config();
// konek ke db
conn();

const app = express();

//APP USE NYA
//sama fungsi seperti bodyparser
app.use(express.json());
app.use(
  cors({
    origin: ["https://smkn1lais-uk16.vercel.app"],
    methods: ["GET"],
    credentials: true,
  })
);
//ROMBONGAN ROUTES NYA
app.get("/", (req, res) => {
  res.send("Api Berjalan");
});
// routes siswa
app.use("/api/siswa", siswaRoutes);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Dalam Mode ${process.env.NODE_ENV} Di Port ${PORT}`)
);
