import { BrowserRouter as Router, Routes, Route, Form } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import PrivateRoute from "./components/Private/Private";
import { AuthProvider } from "./context/AuthContext";
import Mahasiswa from "./components/Dashboard/Mahasiswa/Mahasiswa";
import FormMahasiwa from "./components/Dashboard/Mahasiswa/FormMahasiwa";
import Acara from "./components/Dashboard/Acara/Acara";
import FormAcara from "./components/Dashboard/Acara/FormAcara";
import Dosen from "./components/Dashboard/Dosen/Dosen";
import Kerjasama from "./components/Dashboard/Kerjasama/Kerjasama";
import HMJ from "./components/Dashboard/HMJ/HMJ";
import FormHMJ from "./components/Dashboard/HMJ/FormHMJ";
import Tentang from "./components/Dashboard/Tentang/Tentang";
import Produk from "./components/Dashboard/Produk/Produk";
import FormDosen from "./components/Dashboard/Dosen/FormDosen";

function App() {
  return (
    <AuthProvider>
      <Router>
        <ToastContainer />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          {/* Mahasiswa */}
          <Route
            path="/mahasiswa"
            element={
              <PrivateRoute>
                <Mahasiswa />
              </PrivateRoute>
            }
          />
          <Route
            path="/mahasiswa/add"
            element={
              <PrivateRoute>
                <FormMahasiwa />
              </PrivateRoute>
            }
          />
          <Route
            path="/mahasiswa/edit/:id"
            element={
              <PrivateRoute>
                <FormMahasiwa />
              </PrivateRoute>
            }
          />
          {/* Acara */}
          <Route
            path="/acara/edit/:id"
            element={
              <PrivateRoute>
                <FormAcara />
              </PrivateRoute>
            }
          />
          <Route
            path="/acara/add"
            element={
              <PrivateRoute>
                <FormAcara />
              </PrivateRoute>
            }
          />
          <Route
            path="/acara"
            element={
              <PrivateRoute>
                <Acara />
              </PrivateRoute>
            }
          />
          {/* Dosen */}
          <Route
            path="/dosen"
            element={
              <PrivateRoute>
                <Dosen />
              </PrivateRoute>
            }
          />
          <Route
            path="/dosen/edit/:id"
            element={
              <PrivateRoute>
                <FormDosen />
              </PrivateRoute>
            }
          />
          <Route
            path="/dosen/add"
            element={
              <PrivateRoute>
                <FormDosen />
              </PrivateRoute>
            }
          />
          {/* Kerjasama */}
          <Route
            path="/kerjasama"
            element={
              <PrivateRoute>
                <Kerjasama />
              </PrivateRoute>
            }
          />
          {/* HMJ */}
          <Route
            path="/hmj"
            element={
              <PrivateRoute>
                <HMJ />
              </PrivateRoute>
            }
          />
          <Route
            path="/hmj/edit/:id"
            element={
              <PrivateRoute>
                <FormHMJ />
              </PrivateRoute>
            }
          />
          <Route
            path="/hmj/add/"
            element={
              <PrivateRoute>
                <FormHMJ />
              </PrivateRoute>
            }
          />
          {/* Tentang */}
          <Route
            path="/tentang"
            element={
              <PrivateRoute>
                <Tentang />
              </PrivateRoute>
            }
          />

          {/* Produk */}
          <Route
            path="/produk"
            element={
              <PrivateRoute>
                <Produk />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
