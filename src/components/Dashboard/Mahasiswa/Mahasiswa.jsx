import { useState, useEffect } from "react";
import {
  getAllMahasiswa,
  deleteMahasiswa,
} from "../../../api/mahasiswa-api-contract";
import { Link } from "react-router-dom";

function Mahasiswa() {
  const [mahasiswa, setMahasiswa] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllMahasiswa();
      setMahasiswa(data.data);
    };
    fetchData();
  }, []);

  const handleDelete = async nim => {
    await deleteMahasiswa(nim);
    const updatedMahasiswa = mahasiswa.filter(mhs => mhs.NIM !== nim);
    setMahasiswa(updatedMahasiswa);
  };

  console.log(mahasiswa);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Data Mahasiswa</h1>
      <div className="my-5">
        <Link
          to="/mahasiswa/add"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Tambah Mahasiswa
        </Link>
      </div>

      {mahasiswa.length === 0 ? (
        <p className="text-center text-gray-600">No data available</p>
      ) : (
        <table className="table-auto w-full border border-gray-300 rounded-md">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border border-gray-300">Nama Lengkap</th>
              <th className="p-2 border border-gray-300">NIM</th>
              <th className="p-2 border border-gray-300">Angkatan</th>
              <th className="p-2 border border-gray-300">Tahun Lulus</th>
              <th className="p-2 border border-gray-300">Actions</th>
            </tr>
          </thead>
          <tbody>
            {mahasiswa.map(mhs => (
              <tr key={mhs.NIM} className="hover:bg-gray-50">
                <td className="p-2 border border-gray-300">
                  {mhs.nama_lengkap_mahasiswa}
                </td>
                <td className="p-2 border border-gray-300">{mhs.NIM}</td>
                <td className="p-2 border border-gray-300">
                  {mhs.tahun_angkatan}
                </td>
                <td className="p-2 border border-gray-300">
                  {mhs.tahun_lulus}
                </td>
                <td className="p-2 border border-gray-300">
                  <div className="flex space-x-2">
                    <Link
                      to={`/mahasiswa/edit/${mhs.NIM}`}
                      className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(mhs.NIM)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Mahasiswa;
