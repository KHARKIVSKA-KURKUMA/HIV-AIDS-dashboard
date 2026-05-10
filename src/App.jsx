import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Layout from "./components/Layout/Layout";
import ChartsPage from "./components/pages/ChartsPage";
import { GlobalStyle } from "./GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter
        basename={import.meta.env.DEV ? "/" : "/HIV-AIDS-dashboard/"}
      >
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="charts" element={<ChartsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
