import './App.css';
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route ,Redirect} from "react-router-dom";
import Home from './page/home/home';
import Header from './component/header/header';
import Sidenav from './component/sideNav/sideNav';
import Error from './page/home/pageNot Found/errorPg';
import Barchart from './component/recharts/barchart/barcharts';
// import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="row side-nav-home m-0  flex-nowrap">
        <div className="col-auto p-0 ">
          <Sidenav />
        </div>
        <div className="col" style={{ backgroundColor: "#E5E5E5" }}>
          <Routes>
            <Route >
              <Route path="/" element={<Home />} />
              <Route path="/user/:id" element={<Home />} />
              <Route path="/form" element={<Error />} />
              <Route path="/line" element={<Barchart />} />
              <Route path="/" to="/user/18" />
              {/* <Redirect to="/user/18" /> */}
              {/* <Route path="*" element={<Header />} /> */}
            </Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;
