import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import styled from "styled-components";
import { AuthProvider } from "./context";
import { PrivateRoute } from "./context/components";
import { lazy, Suspense } from "react";
import ErrorBoundary from "./utils/ErrorBoundary";
// import { Home } from "./pages/Home";

const Nav = styled.nav`
  font-size: 32px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #333;
  width: 100%;
  z-index: 100;

  & ul {
    display: flex;
    justify-content: space-around;
  }

  & li {
    color: white;
    text-decoration: none;
    list-style-type: none;
  }
`;

const Home = lazy(() => import("./pages/Home"));
const Categories = lazy(() => import("./pages/Categories"));
const Characters = lazy(() => import("./pages/Characters"));
const Location = lazy(() => import("./pages/Location"));
const Episode = lazy(() => import("./pages/Episode"));
const Login = lazy(() => import("./pages/Login"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <>
      <Nav>
        <ul>
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/categories"}>Categories</Link></li>
        </ul>
      </Nav>
      <AuthProvider>
          <Suspense fallback={<div>Подождите немного...</div>}>
        <ErrorBoundary>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/categories" element={<PrivateRoute><Categories /></PrivateRoute>} />
              <Route path="/categories/characters" element={<PrivateRoute><Characters /></PrivateRoute>} />
              <Route path="/categories/locations" element={<PrivateRoute><Location /></PrivateRoute>} />
              <Route path="/categories/episodes" element={<PrivateRoute><Episode /></PrivateRoute>} />
              <Route path="/login" element={<Login />} /> 
              <Route path="*" element={<NotFound />} />
            </Routes>
        </ErrorBoundary>
          </Suspense>
      </AuthProvider>
    </>
  );
}

export default App;