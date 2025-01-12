import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  getHmjById,
  updateHmj,
  createHmj,
} from "../../../api/hmj-api-contract";

function FormHMJ() {
  const [formData, setFormData] = useState({
    id_hmj: "",
    nama_lengkap: "",
    tahun_jabatan: "",
    NIM: "",
    jabatan: "",
    image: "",
  });

  const { id } = useParams(); // `id` digunakan untuk mode edit
  const navigate = useNavigate(); // Untuk redirect setelah submit

  // Fetch data HMJ jika dalam mode edit
  useEffect(() => {
    if (id) {
      const fetchHMJ = async () => {
        try {
          const data = await getHmjById(id); // Memuat data berdasarkan id_hmj
          setFormData(data.data);
        } catch (error) {
          console.error("Failed to fetch HMJ data:", error);
        }
      };
      fetchHMJ();
    }
  }, [id]);

  // Handle perubahan input
  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle submit form
  const handleSubmit = async e => {
    e.preventDefault();

    try {
      if (id) {
        // Mode edit: Update data HMJ
        await updateHmj(id, formData);
        alert("Data HMJ berhasil diperbarui!");
      } else {
        // Mode tambah: Buat data baru
        await createHmj(formData);
        alert("Data HMJ berhasil ditambahkan!");
      }
      navigate("/hmj"); // Redirect ke halaman HMJ
    } catch (error) {
      console.error("Failed to submit data:", error);
      alert("Terjadi kesalahan saat menyimpan data!");
    }
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          {id ? "Edit Data HMJ" : "Tambah Data HMJ"}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
              <label
                htmlFor="nama_lengkap"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Nama Lengkap
              </label>
              <input
                type="text"
                name="nama_lengkap"
                id="nama_lengkap"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Nama Lengkap"
                value={formData.nama_lengkap}
                onChange={handleChange}
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="NIM"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                NIM
              </label>
              <input
                type="text"
                name="NIM"
                id="NIM"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="NIM"
                value={formData.NIM}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label
                htmlFor="tahun_jabatan"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Tahun Jabatan
              </label>
              <input
                type="number"
                name="tahun_jabatan"
                id="tahun_jabatan"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Tahun Jabatan"
                value={formData.tahun_jabatan}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label
                htmlFor="jabatan"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Jabatan
              </label>
              <select
                name="jabatan"
                id="jabatan"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                value={formData.jabatan}
                onChange={handleChange}
                required
              >
                <option value="">Pilih Jabatan</option>
                <option value="Ketua">Ketua</option>
                <option value="Wakil Ketua">Wakil Ketua</option>
                <option value="Sekretaris">Sekretaris</option>
                <option value="Bendahara">Bendahara</option>
              </select>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="image"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                URL Gambar
              </label>
              <input
                type="text"
                name="image"
                id="image"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="URL Gambar"
                value={formData.image}
                onChange={handleChange}
              />
            </div>
          </div>
          <button
            type="submit"
            className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
          >
            {id ? "Update Data HMJ" : "Tambah Data HMJ"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default FormHMJ;
