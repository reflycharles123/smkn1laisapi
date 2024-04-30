import mongoose from "mongoose";

const siswaSchema = mongoose.Schema(
  {
    nama_siswa: {
      type: String,
      required: true,
    },
    nipd: {
      type: Number,
    },
    jenis_kelamin: {
      type: String,
      required: true,
    },
    nisn: {
      type: Number,
    },
    tempat_lahir: {
      type: String,
      required: true,
    },
    ttl: {
      type: String,
      required: true,
    },
    nik: {
      type: Number,
      required: true,
    },
    kelas: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
  {timestamps: true}
);

export default mongoose.model("Students", siswaSchema);
