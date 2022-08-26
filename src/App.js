import { BrowserRouter, Route, Routes } from "react-router-dom";
import Create from "./pages/Create";
import Main from "./pages/Main";
import { CarMakeStore } from "./store/CarMakeStore";
import { CarModelStore } from "./store/CarModelStore";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main carModelStore={new CarModelStore([])} carMakeStore={new CarMakeStore()} />} />
        <Route path="/create" element={<Create carMakeStore={new CarMakeStore()} carModelStore={new CarModelStore([])} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
