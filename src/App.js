import Mockman from "mockman-js";
import "./App.css";
import { Route, Routes } from "react-router";
import { Home } from "./Components/Home";
import "./utils.css";
import { MainContainer } from "./Components/MainContainer";

import "react-toastify/dist/ReactToastify.css";

import { Profile } from "./Components/Profile/Profile";
import { Explore } from "./Components/Explore";
import { Bookmark } from "./Components/Bookmark";
import { Login } from "./Components/Login";
import { Signup } from "./Components/Signup";
import { AnyProfile } from "./Components/Profile/AnyProfile";
import { PageNotFound } from "./Components/PageNotFound";

import { PostDetails } from "./Components/PostDetails";
import { ToastContainer } from "react-toastify";
import { Loader } from "./Components/Loader";
import { useData } from "./Context/DataContext";

function App() {
  const { isLoading } = useData();

  return (
    <div className="App">
      <ToastContainer
        position="top-center"
        autoClose={1200}
        reverseOrder={false}
      />
      {isLoading && <Loader />}
      <Routes>
        <Route
          path="/"
          element={
            <MainContainer>
              <Home />
            </MainContainer>
          }
        />
        <Route
          path="/explore"
          element={
            <MainContainer>
              <Explore />
            </MainContainer>
          }
        />
        <Route
          path="/bookmark"
          element={
            <MainContainer>
              <Bookmark />
            </MainContainer>
          }
        />
        <Route
          path="/profile"
          element={
            <MainContainer>
              <Profile />
            </MainContainer>
          }
        />
        <Route
          path="/post/:_id"
          element={
            <MainContainer>
              <PostDetails />
            </MainContainer>
          }
        />
        <Route
          path="/profile/:userHandler"
          element={
            <MainContainer>
              <AnyProfile />
            </MainContainer>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mockman" element={<Mockman />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
