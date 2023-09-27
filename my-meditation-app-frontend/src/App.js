import logo from './logo.svg';
//import './App.css';
import './styles/global.css';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserView from './views/UserView';
import AdminView from './views/AdminView';

const App = () => {
  // Dummy data, replace with real API data later
  const meditations = [
    { id: 1, title: 'Meditation 1', audio: 'audio1.mp3', image: 'image1.jpg' },
    { id: 2, title: 'Meditation 2', audio: 'audio2.mp3', image: 'image2.jpg' },
  ];

  const handleUpload = (e) => {
    e.preventDefault();
    // Handle upload logic here
  };

  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<AdminView onUpload={handleUpload}/>} />
        <Route path="/" element={<UserView meditations={meditations}/>} />
      </Routes>
    </Router>
  );
};

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Welcome to My Meditation App</h1>
//       </header>

//       <main>
//         <section id="meditations-list">
//           <h2>Available Meditations</h2>
//           {/* Meditation list will go here */}
//         </section>

//         <section id="admin-dashboard">
//           <h2>Admin Dashboard</h2>
//           {/* Admin functions will go here */}
//         </section>
//       </main>
//     </div>
//   );
// }


export default App;
