import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavbarCom from "./components/NavbarCom";

const App = () => {
  return (
   <BrowserRouter>
      <NavbarCom/>
     <AppRouter />
   </BrowserRouter>
  );
}

export default App;
