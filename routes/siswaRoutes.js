import express from "express";
const router = express.Router();
import {getSiswaLulus} from "../controllers/siswaController.js";

// routes informasi kelulusan siswa untuk semua user
router.route("/informasi-siswa-lulus").get(getSiswaLulus);

export default router;
