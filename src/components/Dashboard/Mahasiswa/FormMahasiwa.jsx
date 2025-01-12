import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  getMahasiswaByNIM,
  updateMahasiswa,
  createMahasiswa,
} from "../../../api/mahasiswa-api-contract";

function FormMahasiswa() {
  const [formData, setFormData] = useState({
    nama_lengkap: "",
    NIM: "",
    angkatan: "",
    tahun_lulus: "",
  });

  const { id } = useParams(); // `id` digunakan untuk mode edit
  const navigate = useNavigate(); // Untuk redirect setelah submit

  // Fetch data mahasiswa jika dalam mode edit
  useEffect(() => {
    if (id) {
      const fetchMahasiswa = async () => {
        try {
          const data = await getMahasiswaByNIM(id); // Memuat data berdasarkan NIM
          setFormData({
            ...data.data,
            tahun_lulus: data.tahun_lulus?.toString() || "",
          });
        } catch (error) {
          console.error("Failed to fetch mahasiswa data:", error);
        }
      };
      fetchMahasiswa();
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
        // Mode edit: Update data mahasiswa
        await updateMahasiswa(id, formData);
        alert("Data mahasiswa berhasil diperbarui!");
      } else {
        // Mode tambah: Buat data baru
        await createMahasiswa(formData);
        alert("Data mahasiswa berhasil ditambahkan!");
      }
      navigate("/mahasiswa"); // Redirect ke halaman mahasiswa
    } catch (error) {
      console.error("Failed to submit data:", error);
      alert("Terjadi kesalahan saat menyimpan data!");
    }
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          {id ? "Edit Mahasiswa" : "Tambah Mahasiswa Baru"}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
              <label
                htmlFor="nama_lengkap"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Nama Mahasiswa
              </label>
              <input
                type="text"
                name="nama_lengkap"
                id="nama_lengkap"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Nama Mahasiswa"
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
                NIM Mahasiswa
              </label>
              <input
                type="text"
                name="NIM"
                id="NIM"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="NIM Mahasiswa"
                value={formData.NIM}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label
                htmlFor="angkatan"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Angkatan
              </label>
              <input
                type="number"
                name="angkatan"
                id="angkatan"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Angkatan"
                value={formData.angkatan}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label
                htmlFor="tahun_lulus"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Tahun Lulus
              </label>
              <select
                name="tahun_lulus"
                id="tahun_lulus"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                value={formData.tahun_lulus}
                onChange={handleChange}
                required
              >
                <option value="">Pilih Tahun Lulus</option>
                {[...Array(10)].map((_, i) => {
                  const year = (2014 + i).toString();
                  return (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <button
            type="submit"
            className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
          >
            {id ? "Update Mahasiswa" : "Tambah Mahasiswa"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default FormMahasiswa;
