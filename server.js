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
    origin: ["https://smkn1laisfrontend-b25kzg52p-reflys-projects.vercel.app"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);
//ROMBONGAN ROUTES NYA
// routes siswa
app.use("/api/siswa", siswaRoutes);
app.get("/", (req, res) => {
  res.send("Api Berjalan");
});

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Dalam Mode ${process.env.NODE_ENV} Di Port ${PORT}`)
);
