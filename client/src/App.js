import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from "./Pages/Home/Navbar";
import Home from './Pages/Home/Homescreen';

import SignIn from "./Pages/Home/SignIn";
import SignUp from "./Pages/Home/SignUp";
import AdminProjects from "./Pages/Home/AdminProjects";
import AdminCreateProject from "./Pages/Home/AdminCreateProject";
import AdminEditProject from "./Pages/Home/AdminEditProject"; // <-- ADD THIS

import Qualifications from "./Pages/Home/Qualifications";
import AdminAddQualification from "./Pages/Home/AdminAddQualification";
import AdminQualifications from "./Pages/Home/AdminQualifications";
import AdminEditQualification from "./Pages/Home/AdminEditQualification";

import AdminContacts from "./Pages/Home/AdminContacts";
import AdminEditContact from "./Pages/Home/AdminEditContact";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return(
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="/education" element={<Qualifications />} />

         <Route path="/admin/projects" element={
          <PrivateRoute adminOnly={true}>
            <AdminProjects />
          </PrivateRoute>
        }/>
        <Route path="/admin/projects/create" element={
          <PrivateRoute adminOnly={true}>
            <AdminCreateProject />
          </PrivateRoute>
        }/>
        <Route path="/admin/projects/:projectId/edit" element={
          <PrivateRoute adminOnly={true}>
            <AdminEditProject />
          </PrivateRoute>
        }/>

        <Route path="/admin/qualifications" element={
          <PrivateRoute adminOnly={true}>
            <AdminQualifications />
          </PrivateRoute>
        }/>
        <Route path="/admin/qualifications/add" element={
          <PrivateRoute adminOnly={true}>
            <AdminAddQualification />
          </PrivateRoute>
        }/>
        <Route path="/admin/qualifications/edit/:id" element={
          <PrivateRoute adminOnly={true}>
            <AdminEditQualification />
          </PrivateRoute>
        }/>

        <Route path="/admin/contacts" element={
          <PrivateRoute adminOnly={true}>
            <AdminContacts />
          </PrivateRoute>
        }/>
        <Route path="/admin/contacts/:contactId" element={
          <PrivateRoute adminOnly={true}>
            <AdminEditContact />
          </PrivateRoute>
        }/>

        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </div>
  );
}

export default App;
