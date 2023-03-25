import logo from "./logo.svg";
import "./App.css";
import InputDataForm from "./components/InputDataForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Store";
function App() {
  return (
<BrowserRouter>
<Provider store={store}>
  <Routes>
   <Route path="/" element={<InputDataForm/>}/> 
  </Routes>
</Provider>
</BrowserRouter>
  );
}

export default App;
