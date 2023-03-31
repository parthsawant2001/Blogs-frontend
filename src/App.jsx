// import logo from './logo.svg';
import './App.css';
import Post from './Components/Post';
import Layout from './Components/Layout';
import Header from './Components/Header';
import IndexPage from './Pages/IndexPage';
import PostPage from './Pages/PostPage';
import LoginPage from './Pages/LoginPage';
import CreatePost from './Pages/CreatePost';
import EditPost from './Pages/EditPost';
import RegisterPage from './Pages/RegisterPage';
import { Routes, Route } from 'react-router-dom';
import { UserContextProvider } from './UserContext';

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path={'/'} element={<Layout />}>
          <Route index element={<IndexPage />} />

          <Route path={'/login'} element={<LoginPage />} />
          <Route path={'/register'} element={<RegisterPage />} />
          <Route path={'/create'} element={<CreatePost />} />
          <Route path={'/post/:id'} element={<PostPage />} />
          <Route path={'/edit/:id'} element={<EditPost />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
