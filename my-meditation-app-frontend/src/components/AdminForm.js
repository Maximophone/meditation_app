import React from 'react';

const AdminForm = ({ onUpload }) => {
  return (
    <form onSubmit={onUpload}>
      <input type="file" name="audio" accept="audio/*" />
      <input type="file" name="image" accept="image/*" />
      <button type="submit">Upload</button>
    </form>
  );
};

export default AdminForm;