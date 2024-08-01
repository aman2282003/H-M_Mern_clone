import { Navbar } from "./components/Navbar";
import { Dropdown } from "./components/Dropdown";
import { Midd } from "./components/Midd";
import { Footer } from "./components/Footer";
import "./index.css";
export default function App() {
  return (
    <div>
      <Navbar />
      <Dropdown />
      <Midd />
      <Footer />
    </div>
  );
}
