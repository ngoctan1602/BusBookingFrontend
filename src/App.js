import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Login from "./pages/Login";
import { publicRoutes } from "./routers";
import { DefaultLayout } from "./components/Layout";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>

          {/* <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} /> */}
          {
            publicRoutes.map((route, index) => {
              return <Route
                key={index}
                path={route.path}
                element={
                  <DefaultLayout>
                    <route.component />
                  </DefaultLayout>
                }
              />
            }
            )
          }


        </Routes>
      </div>
    </Router>

  );
}

export default App;
