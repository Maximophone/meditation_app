import React from 'react';
import AdminForm from '../components/AdminForm';
import '../styles/AdminView.css';


const AdminView = ({ onUpload }) => {
  return (
    <div>
      <h1>Admin Interface</h1>
      <AdminForm onUpload={onUpload} />
    </div>
  );
};

export default AdminView;
