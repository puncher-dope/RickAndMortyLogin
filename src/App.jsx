import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { Characters, Episode, Home, Location, Login, NotFound } from "./pages";
import styled from "styled-components";
import { Categories } from "./pages/Categories";
import { AuthProvider } from "./context";
import { PrivateRoute } from "./context/components";

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

function App() {
  return (
    <>
      <Nav>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/categories"}>Categories</Link>
          </li>
        </ul>
      </Nav>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/categories/*"
            element={
              <PrivateRoute>
                <Routes>
                  <Route index element={<Categories />} />
                  <Route path="characters" element={<Characters />} />
                  <Route path="locations" element={<Location />} />
                  <Route path="episodes" element={<Episode />} />
                </Routes>
              </PrivateRoute>
            }
          />

          <Route path="/login" element={<Login />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
