import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './index.css';
import Layout from './Layout';
import SignUp from './Auth/SignUp/SignUp';
import SignIn from './Auth/SignIn/SignIn';
import JobPortal from './components/Jobs/JobPortal';
import JobPost from './components/Jobs/JobPost';
import JobList from './components/Jobs/JobList';
import { JobProvider } from './components/Jobs/JobContext';
import Home from './Home/Home';
import Event from './Home/Event';
import Stories from './Home/Stories';
import DonationForm from './Donation/DonationForm';
import TransactionPage from './Donation/TransactionPage';
import DonationError from './Donation/DonationError';

import StoryForm from './Home/StoryForm';
import { StoryProvider } from './contexts/StoryContext';
import ProfilePage from './Profile/ProfilePage';
import Account from './Account/Account';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='signin' element={<SignIn />} />
      <Route path='signup' element={<SignUp />} />
      <Route path='event' element={<Event />} />
      <Route path='stories' element={<Stories />} />
      <Route path='donation' element={<DonationForm />} />
      <Route path='transaction' element={<TransactionPage />} />
      <Route path='donation-error' element={<DonationError />} />
      <Route path='storyform' element={<StoryForm />} />
      <Route path='jobportal' element={<JobProvider><JobPortal /></JobProvider>} />
      <Route path='jobpost' element={<JobProvider><JobPost /></JobProvider>} />
      <Route path='joblist' element={<JobProvider><JobList /></JobProvider>} />

      <Route path='donation-error' element={< DonationError/>} />
      <Route path='profile' element={< ProfilePage/>} />
      <Route path='account' element={< Account/>} />
      



      {/* JobPortal and its related routes */}
      <Route
        path='jobportal'
        element={
          <JobProvider>
            <JobPortal />
          </JobProvider>
        }
      />
      <Route
        path='jobpost'
        element={
          <JobProvider>
            <JobPost />
          </JobProvider>
        }
      />
      <Route
        path='joblist'
        element={
          <JobProvider>
            <JobList />
          </JobProvider>
        }
      />

    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StoryProvider>
      <RouterProvider router={router} />
    </StoryProvider>
  </React.StrictMode>
);
