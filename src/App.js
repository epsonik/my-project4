import {Route, Routes} from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import BalNaukowca from "./BalNaukowca";
import Kongres from "./Kongres";
import NoMatch from "./NoMatch";
import JsonData from './assets/data.js'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home data={JsonData}/>}/>
          <Route path="balNaukowca" element={<BalNaukowca data={JsonData}/>}/>
          <Route path="kongres" element={<Kongres data={JsonData}/>}/>
          <Route path="*" element={<NoMatch/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
