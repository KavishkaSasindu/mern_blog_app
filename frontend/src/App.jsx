import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Author from "./pages/Author";
import AuthorPosts from "./pages/AuthorPosts";
import CategoryPosts from "./pages/CategoryPosts";
import CreatePosts from "./pages/CreatePost";
import Dashboard from "./pages/Dashboard";
import EditPost from "./pages/EditPost";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import LogOut from "./pages/LogOut";
import PostDetail from "./pages/PostDetail";
import Register from "./pages/Register";
import UserProfile from "./pages/UserProfile";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" index={true} element={<Home />} />{" "}
            {/* Home route set as index route */}
            <Route path="author" element={<Author />} />
            <Route path="postDetail/users/:id" element={<AuthorPosts />} />
            <Route
              path="postDetail/categories/:category"
              element={<CategoryPosts />}
            />
            <Route path="createPost" element={<CreatePosts />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="userProfile/:id/edit" element={<EditPost />} />
            <Route path="errorPage" element={<ErrorPage />} />
            <Route path="logIn" element={<LogIn />} />
            <Route path="logOut" element={<LogOut />} />
            <Route path="postDetail/post" element={<PostDetail />} />{" "}
            {/*must edit with id */}
            <Route path="register" element={<Register />} />
            <Route path="userProfile/:id" element={<UserProfile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
