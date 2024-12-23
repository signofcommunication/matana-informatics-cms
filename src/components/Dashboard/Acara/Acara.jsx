import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllAcara, deleteAcara } from "../../../api/acara-api-contract";

function Acara() {
  const [acara, setAcara] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAcara = async () => {
      try {
        const data = await getAllAcara();
        setAcara(data.data);
      } catch (err) {
        console.error("Error fetching acara data:", err);
        setError("Gagal memuat data acara.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchAcara();
  }, []);

  const handleDelete = async id => {
    if (window.confirm("Yakin ingin menghapus acara ini?")) {
      try {
        await deleteAcara(id);
        setAcara(acara.filter(event => event.id_agenda !== id));
        alert("Acara berhasil dihapus.");
      } catch (err) {
        console.error("Error deleting acara:", err);
        alert("Gagal menghapus acara.");
      }
    }
  };

  const handleEdit = id => {
    navigate(`/acara/edit/${id}`);
  };

  const handleAdd = () => {
    navigate("/acara/add");
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-4xl">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Daftar Acara
          </h1>
          <button
            onClick={handleAdd}
            className="px-4 py-2 text-sm font-medium text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Tambah Acara
          </button>
        </div>
        {acara.length === 0 ? (
          <p className="text-gray-700 dark:text-gray-300">
            Belum ada acara yang tersedia.
          </p>
        ) : (
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    No
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Nama Acara
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Tanggal
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Keterangan
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Waktu
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Tagline
                  </th>
                  <th scope="col" className="px-6 py-3 text-right">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody>
                {acara.map((event, index) => (
                  <tr
                    key={event.id_agenda}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <td className="px-6 py-4">{index + 1}</td>
                    <td className="px-6 py-4">{event.nama_acara}</td>
                    <td className="px-6 py-4">{event.tanggal}</td>
                    <td className="px-6 py-4">{event.keterangan}</td>
                    <td className="px-6 py-4">{event.waktu}</td>
                    <td className="px-6 py-4">{event.tagline}</td>
                    <td className="px-6 py-4 text-right">
                      <button
                        onClick={() => handleEdit(event.id_agenda)}
                        className="px-2 py-1 text-sm text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 mr-2"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(event.id_agenda)}
                        className="px-2 py-1 text-sm text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900"
                      >
                        Hapus
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
}

export default Acara;
