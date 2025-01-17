import { useState, useEffect } from "react";
import { getAllDosen } from "../../../api/dosen-api-contract";
import { Link } from "react-router-dom";

function Dosen() {
  const [dosen, setDosen] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllDosen();
      setDosen(data.data);
    };
    fetchData();
  }, []);
  console.log(dosen);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Data Dosen</h1>
      <div className="my-5">
        <Link
          to="/dosen/add"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Tambah Dosen
        </Link>
      </div>

      {dosen?.length === 0 ? (
        <p className="text-center text-gray-600">No data available</p>
      ) : (
        <table className="table-auto w-full border border-gray-300 rounded-md">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border border-gray-300">NIDN</th>
              <th className="p-2 border border-gray-300">Nama Lengkap</th>
              <th className="p-2 border border-gray-300">NIP</th>
              <th className="p-2 border border-gray-300">Bidang Keahlian</th>
              <th className="p-2 border border-gray-300">
                Link Google Cendekia
              </th>
              <th className="p-2 border border-gray-300">Actions</th>
            </tr>
          </thead>
          <tbody>
            {dosen.map(dosenItem => (
              <tr key={dosenItem.id_dosen} className="hover:bg-gray-50">
                <td className="p-2 border border-gray-300">{dosenItem.NIDN}</td>
                <td className="p-2 border border-gray-300">
                  {dosenItem.nama_lengkap_dosen}
                </td>
                <td className="p-2 border border-gray-300">{dosenItem.NIP}</td>
                <td className="p-2 border border-gray-300">
                  {dosenItem.bidang_keahlian}
                </td>
                <td className="p-2 border border-gray-300">
                  <a
                    href={dosenItem.link_google_cendekia}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    View Profile
                  </a>
                </td>
                <td className="p-2 border border-gray-300">
                  <div className="flex space-x-2">
                    <Link
                      to={`/dosen/edit/${dosenItem.id_dosen}`}
                      className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                    >
                      Edit
                    </Link>
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

export default Dosen;
