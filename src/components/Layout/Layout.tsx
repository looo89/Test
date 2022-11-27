
import {Routes, Route, Router} from 'react-router-dom';
import AlbumPage from '../../pages/AlbumPage/AlbumPage';
import PostPage from '../../pages/PostPage/PostPage';
import TodosPage from '../../pages/TodosPage/TodosPage';

const Layout = () => {
  return (
      <Routes>
          <Route path="/posts" element={<PostPage/>} />
          <Route path="/albums" element={<AlbumPage/>}/>
          <Route path="/todos" element={<TodosPage/>} />
          <Route path="/" element={<PostPage/>} />
        </Routes>
  );
};

export {Layout}