import asyncHandler from "express-async-handler";
// model
import Students from "../models/Siswa.js";

//@des      Get Siswa Lulus
//@route    GET /api/informasi-siswa-lulus
//@access   All
const getSiswaLulus = asyncHandler(async (req, res) => {
  try {
    // ambil data nisn dari body
    const {nisn} = req.query;
    const siswaLulus = await Students.findOne({nisn: nisn});
    if (siswaLulus && siswaLulus.status === "LULUS") {
      res.status(200).json(siswaLulus);
    } else {
      res.status(404).json({
        message:
          "Maaf, NISN Yang Anda Masukan Tidak Ditemukan Dalam Database, Harap Koreksi dan Atau Hubungi Pihak Sekolah.",
      });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

export {getSiswaLulus};
