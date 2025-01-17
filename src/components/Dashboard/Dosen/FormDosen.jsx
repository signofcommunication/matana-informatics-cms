import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  getDosenById,
  updateDosen,
  createDosen,
} from "../../../api/dosen-api-contract";

function FormDosen() {
  const [formData, setFormData] = useState({
    NIDN: "",
    nama_lengkap_dosen: "",
    NIP: "",
    bidang_keahlian: "",
    link_google_cendekia: "",
  });

  const { id } = useParams(); // `id` digunakan untuk mode edit
  const navigate = useNavigate(); // Untuk redirect setelah submit

  // Fetch data dosen jika dalam mode edit
  useEffect(() => {
    if (id) {
      const fetchDosen = async () => {
        try {
          const data = await getDosenById(id); // Memuat data berdasarkan id_dosen
          setFormData(data.data);
        } catch (error) {
          console.error("Failed to fetch dosen data:", error);
        }
      };
      fetchDosen();
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
        // Mode edit: Update data dosen
        await updateDosen(id, formData);
        alert("Data dosen berhasil diperbarui!");
      } else {
        // Mode tambah: Buat data baru
        await createDosen(formData);
        alert("Data dosen berhasil ditambahkan!");
      }
      navigate("/dosen"); // Redirect ke halaman dosen
    } catch (error) {
      console.error("Failed to submit data:", error);
      alert("Terjadi kesalahan saat menyimpan data!");
    }
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          {id ? "Edit Data Dosen" : "Tambah Data Dosen"}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
              <label
                htmlFor="NIDN"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                NIDN
              </label>
              <input
                type="text"
                name="NIDN"
                id="NIDN"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="NIDN"
                value={formData.NIDN}
                onChange={handleChange}
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="nama_lengkap_dosen"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Nama Lengkap Dosen
              </label>
              <input
                type="text"
                name="nama_lengkap_dosen"
                id="nama_lengkap_dosen"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Nama Lengkap Dosen"
                value={formData.nama_lengkap_dosen}
                onChange={handleChange}
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="NIP"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                NIP
              </label>
              <input
                type="text"
                name="NIP"
                id="NIP"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="NIP"
                value={formData.NIP}
                onChange={handleChange}
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="bidang_keahlian"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Bidang Keahlian
              </label>
              <input
                type="text"
                name="bidang_keahlian"
                id="bidang_keahlian"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Bidang Keahlian"
                value={formData.bidang_keahlian}
                onChange={handleChange}
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="link_google_cendekia"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Link Google Cendekia
              </label>
              <input
                type="text"
                name="link_google_cendekia"
                id="link_google_cendekia"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Link Google Cendekia"
                value={formData.link_google_cendekia}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
          >
            {id ? "Update Data Dosen" : "Tambah Data Dosen"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default FormDosen;
