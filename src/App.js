import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import CustomNav from "./components/CustomNav";
import Home from "./components/Home";
import ReservationForm from "./components/ReservationForm";

function App() {
  return (
    <>
      <CustomNav claim="Best pasta in town!" />
      <ReservationForm />
      <Home />
    </>
  );
}

export default App;
