import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import User from "./components/User/User";
import Github from "./components/Github/Github";
import { GithubInfo } from "./components/Github/GithubInfo";
import Login from './components/Auth/Login'
import Singup from './components/Auth/Singup'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="home" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="user/:id" element={<User />} />
      <Route path="github" element={<Github />} loader={GithubInfo} />
      <Route path="login" element={<Login />} />
      <Route path="singup" element={<Singup />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
