import { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { CitiesProvider } from "./Context/CitiesContent.jsx";

import Form from "./components/Form.jsx";
import { AuthProvider } from "./Context/fakeAuthContext.jsx";
import ProtectedRoute from "./pages/ProtectedRoute.jsx";

import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City";
import SpinnerFullPage from "./components/SpinnerFullPage.jsx";

// import Product from "./pages/Product";
// import Pricing from "./pages/Pricing";
// import Homepage from "./pages/Homepage";
// import PageNotFound from "./pages/PageNotFound";
// import AppLayout from "./pages/AppLayout";
// import Login from "./pages/Login";

const Homepage = lazy(() => import("./pages/Homepage"));
const Product = lazy(() => import("./pages/Product"));
const Pricing = lazy(() => import("./pages/Pricing"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const AppLayout = lazy(() => import("./pages/AppLayout"));
const Login = lazy(() => import("./pages/Login"));

// dist/assets/index-QNe7cjRH.css   31.12 kB │ gzip:   5.04 kB
// dist/assets/index-d-VRRmem.js   558.28 kB │ gzip: 162.77 kB

// after code splitting

// dist/assets/Logo-BYigXoGP.css               0.03 kB │ gzip:   0.05 kB
// dist/assets/Login-BJLq8WQv.css              0.34 kB │ gzip:   0.21 kB
// dist/assets/Product-fRlGNPaH.css            0.46 kB │ gzip:   0.27 kB
// dist/assets/Homepage--Nn6UKaD.css           0.49 kB │ gzip:   0.29 kB
// dist/assets/PageNav-HJgt5450.css            0.53 kB │ gzip:   0.29 kB
// dist/assets/fakeAuthContext-BoiP6cZx.css    0.55 kB │ gzip:   0.31 kB
// dist/assets/AppLayout-DjwMQ_q1.css          1.91 kB │ gzip:   0.68 kB
// dist/assets/index-ojmvCOrO.css             26.90 kB │ gzip:   4.25 kB
// dist/assets/Product.module-CEezLFuW.js      0.05 kB │ gzip:   0.06 kB
// dist/assets/PageNotFound-ZGK_qNw-.js        0.17 kB │ gzip:   0.16 kB
// dist/assets/Logo-DB9-Ye00.js                0.25 kB │ gzip:   0.21 kB
// dist/assets/PageNav-D0KPna5E.js             0.55 kB │ gzip:   0.29 kB
// dist/assets/Pricing-GTfQUnsG.js             0.66 kB │ gzip:   0.41 kB
// dist/assets/Homepage-CL2kmU34.js            0.70 kB │ gzip:   0.42 kB
// dist/assets/Product-CS4ygoFy.js             0.87 kB │ gzip:   0.48 kB
// dist/assets/fakeAuthContext-B4v-pP8Y.js     1.10 kB │ gzip:   0.61 kB
// dist/assets/Login-Cg6L72g_.js               1.13 kB │ gzip:   0.57 kB
// dist/assets/jsx-runtime-DXw-ElXV.js         1.14 kB │ gzip:   0.63 kB
// dist/assets/useUrlPosition-SfnQJYol.js      2.11 kB │ gzip:   0.81 kB
// dist/assets/dist-DfKnmUgk.js               35.06 kB │ gzip:  12.35 kB
// dist/assets/AppLayout-C_wFZvFg.js         155.91 kB │ gzip:  45.98 kB
// dist/assets/index-Cl6Ydqu4.js             362.51 kB │ gzip: 104.44 kB

function App() {
  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Suspense fallback={<SpinnerFullPage />}>
            <Routes>
              <Route index element={<Homepage />} />
              <Route path="homepage" element={<Homepage />} />
              <Route path="product" element={<Product />} />
              <Route path="pricing" element={<Pricing />} />
              <Route
                path="app"
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<Navigate replace to="cities" />} />
                <Route path="cities" element={<CityList />} />
                <Route path="cities/:id" element={<City />} />
                <Route path="countries" element={<CountryList />} />
                <Route path="form" element={<Form />} />
              </Route>
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  );
}

export default App;
