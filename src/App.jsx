import { Route, Routes } from "react-router-dom";

// Layout: pages
import PagesLayout from "./Common/PagesLayout/PagesLayout";

// pages: primary
import PrimaryLayout from './Pages/Primary/PrimaryLayout';
import Home from "./Pages/Primary/Home/Home";
import Staff from "./Pages/Primary/Staff/Staff";
import Contact from "./Pages/Primary/Contact/Contact";

// pages: courseWork
import CourseWorkLayout from './Pages/CourseWork/CourseWorkLayout';
import Essays from "./Pages/CourseWork/Essays/Essays";
import SunAndMoon from "./Pages/CourseWork/SunAndMoon/SunAndMoon";
import Responsive from "./Pages/CourseWork/Responsive";

const App = () => {
  return (
    <Routes>
      <Route element={ <PagesLayout /> }>
        <Route element={ <PrimaryLayout /> } path="">
          <Route element={<Home />} path="" />
          <Route element={<Staff />} path="Staff" />
          <Route element={<Contact />} path="contact" />
        </Route>

        <Route  element={ <CourseWorkLayout /> } path="course-work">
          <Route element={<Essays />} path="" />
          <Route element={<SunAndMoon />} path="sun-and-moon" />
          <Route element={<Responsive />} path="responsive" />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
