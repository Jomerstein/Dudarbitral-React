import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/auth/screens/Login";
import ProfileCard from "./Profilecard";
import AdminPanel from "./pages/AdminPanel/Screens/AdminPanel";
import { AuthProvider } from "./pages/auth/AuthContext";

function App() {
  return (
    <>
      <AuthProvider>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<ProfileCard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/adminPanel" element={<AdminPanel />} />
        </Routes>
      </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
