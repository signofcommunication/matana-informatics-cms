import { useState } from "react";
import { useParams } from "react-router-dom";
import { createAcara } from "../../../api/acara-api-contract";

function FormAcara() {
  const [formData, setFormData] = useState({
    namaAcara: "",
    tanggal: "",
    keterangan: "belum selesai",
  });
  const { id } = useParams();

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    // Implementasi logika untuk submit data
    await createAcara({
      nama_acara: formData.namaAcara,
      tanggal: formData.tanggal,
      keterangan: formData.keterangan,
    });
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          {id ? "Edit Acara" : "Tambah Acara Baru"}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
              <label
                htmlFor="namaAcara"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Nama Acara
              </label>
              <input
                type="text"
                id="namaAcara"
                name="namaAcara"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Masukkan nama acara"
                value={formData.namaAcara}
                onChange={handleChange}
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="tanggal"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Tanggal Acara
              </label>
              <input
                type="date"
                id="tanggal"
                name="tanggal"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                value={formData.tanggal}
                onChange={handleChange}
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="keterangan"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Keterangan Acara
              </label>
              <select
                id="keterangan"
                name="keterangan"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                value={formData.keterangan}
                onChange={handleChange}
                required
              >
                <option value="belum selesai">Belum Selesai</option>
                <option value="selesai">Selesai</option>
              </select>
            </div>
          </div>
          <button
            type="submit"
            className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
          >
            {id ? "Edit Acara" : "Tambah Acara"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default FormAcara;
