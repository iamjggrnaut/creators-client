import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom'
import Main from './pages/Main';
import Gallery from './pages/Gallery';
import Booking from './pages/Booking';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import CompnayPage from './pages/CompnayPage';
import Navpanel from './components/Navpanel';
import Footer from './components/Footer';
import { useContext } from 'react';
import AuthContext from './service/AuthContext';
import AdminLogin from './pages/AdminLogin';
import AdminPage from './pages/AdminPage';

function App() {

  const { authToken, user } = useContext(AuthContext)

  // console.log(user, authToken);

  if (user) {
    return (
      <div className="App">
        <Navpanel />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/book' element={<Navigate to={'/account'} />} />
          <Route path='/login' element={<Navigate to={'/account'} />} />
          <Route path='/sign' element={<Navigate to={'/account'} />} />
          <Route path='/account' element={<Profile />} />
          {/* <Route path='/account' element={<Navigate to={'/signin'} />} /> */}
          <Route path='/about' element={<CompnayPage />} />


          <Route path='/room' element={<CompnayPage />} />
          <Route path='/gallery' element={<CompnayPage />} />
          <Route path='/contact' element={<CompnayPage />} />
          <Route path='/admin/login' element={<AdminLogin />} />
          <Route path='/admin/manage' element={<AdminPage />} />
          <Route path='/*' element={<Navigate to={'/'} />} />
        </Routes>
        <Footer />
      </div>
    );
  }

  return (
    <div className="App">
      <Navpanel />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/login' element={<SignIn />} />
        <Route path='/sign' element={<SignUp />} />
        <Route path='/account' element={<Navigate to={'/login'} />} />

        <Route path='/gallery' element={<Gallery />} />
        <Route path='/book' element={<Booking />} />
        <Route path='/about' element={<CompnayPage />} />

        <Route path='/room' element={<CompnayPage />} />
        <Route path='/contact' element={<CompnayPage />} />

        <Route path='/admin/manage' element={<CompnayPage />} />
        <Route path='/*' element={<Navigate to={'/'} />} />
      </Routes>
      <Footer />
    </div>
  )

  // return (
  //   <div className="App">
  //     <Navpanel />
  //     <Routes>
  //       <Route path='/' element={<Main />} />
  //       <Route path='/gallery' element={<Gallery />} />
  //       <Route path='/book' element={<Booking />} />
  //       <Route path='/login' element={<SignIn />} />
  //       <Route path='/sign' element={<SignUp />} />
  //       <Route path='/account' element={<Profile />} />
  //       {/* <Route path='/account' element={<Navigate to={'/signin'} />} /> */}
  //       <Route path='/about' element={<CompnayPage />} />


  //       <Route path='/room' element={<CompnayPage />} />
  //       <Route path='/gallery' element={<CompnayPage />} />
  //       <Route path='/contact' element={<CompnayPage />} />
  //       <Route path='/admin/login' element={<AdminLogin />} />
  //       <Route path='/admin/manage' element={<AdminPage />} />
  //       <Route path='/*' element={<Navigate to={'/'} />} />
  //     </Routes>
  //     <Footer />
  //   </div>
  // );
}

export default App;
