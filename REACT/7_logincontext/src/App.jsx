import "./App.css";
import { AuthProvider } from "./components/AuthContext";
import Login from "./components/Login";

function App() {
  return (
    <>
      <AuthProvider>
        <Login></Login>
      </AuthProvider>
    </>
  );
}

export default App;
