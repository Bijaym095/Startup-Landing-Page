import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Root from "./routes/root";

import Home from "./pages/Home";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Signin from "./pages/Signin";
import NotFound from "./pages/NotFound";
import Singup from "./pages/Singup";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Root />}>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Blog />} />
      <Route path="signin" element={<Signin />} />
      <Route path="signup" element={<Singup />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
