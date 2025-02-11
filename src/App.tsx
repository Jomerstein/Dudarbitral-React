import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/auth/screens/Login";
import ProfileCard from "./equipos/Profilecard";
import AdminPanel from "./pages/AdminPanel/Screens/AdminPanel";
import { AuthProvider } from "./pages/auth/AuthContext";
import Layout from "./components/Layout";


function App() {
  return (
    <>
      <AuthProvider>
      <BrowserRouter>
        <Layout>
        <Routes>
          <Route path="/" element={<ProfileCard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/adminPanel" element={<AdminPanel />} />
        </Routes>
        
        </Layout>
      
      </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
