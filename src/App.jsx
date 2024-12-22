import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import PrivateRoute from "./components/Private/Private";
import { AuthProvider } from "./context/AuthContext";
import Mahasiswa from "./components/Dashboard/Mahasiswa/Mahasiswa";
import FormMahasiwa from "./components/Dashboard/Mahasiswa/FormMahasiwa";
import Acara from "./components/Dashboard/Acara/Acara";
import FormAcara from "./components/Dashboard/Acara/FormAcara";

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
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
