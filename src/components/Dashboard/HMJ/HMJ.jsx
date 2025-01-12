import { useState, useEffect } from "react";
import { getAllHmj, deleteHmj } from "../../../api/hmj-api-contract";
import { Link } from "react-router-dom";

function HMJ() {
  const [hmj, setHmj] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllHmj();
      setHmj(data.data);
    };
    fetchData();
  }, []);

  const handleDelete = async id_hmj => {
    await deleteHmj(id_hmj);
    const updatedHMJ = hmj.filter(item => item.id_hmj !== id_hmj);
    setHmj(updatedHMJ);
  };

  console.log(hmj);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Data HMJ</h1>
      <div className="my-5">
        <Link
          to="/hmj/add"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Tambah HMJ
        </Link>
      </div>

      {hmj.length === 0 ? (
        <p className="text-center text-gray-600">No data available</p>
      ) : (
        <table className="table-auto w-full border border-gray-300 rounded-md">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border border-gray-300">ID HMJ</th>
              <th className="p-2 border border-gray-300">Nama Lengkap</th>
              <th className="p-2 border border-gray-300">Tahun Jabatan</th>
              <th className="p-2 border border-gray-300">NIM</th>
              <th className="p-2 border border-gray-300">Jabatan</th>
              <th className="p-2 border border-gray-300">Image</th>
              <th className="p-2 border border-gray-300">Actions</th>
            </tr>
          </thead>
          <tbody>
            {hmj.map(item => (
              <tr key={item.id_hmj} className="hover:bg-gray-50">
                <td className="p-2 border border-gray-300">{item.id_hmj}</td>
                <td className="p-2 border border-gray-300">
                  {item.nama_lengkap}
                </td>
                <td className="p-2 border border-gray-300">
                  {item.tahun_jabatan}
                </td>
                <td className="p-2 border border-gray-300">{item.NIM}</td>
                <td className="p-2 border border-gray-300">{item.jabatan}</td>
                <td className="p-2 border border-gray-300">
                  <img
                    src={item.image}
                    alt={item.nama_lengkap}
                    className="w-16 h-16 object-cover rounded"
                  />
                </td>
                <td className="p-2 border border-gray-300">
                  <div className="flex space-x-2">
                    <Link
                      to={`/hmj/edit/${item.id_hmj}`}
                      className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(item.id_hmj)}
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

export default HMJ;
