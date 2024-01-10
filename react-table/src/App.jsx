import { useState } from 'react';

import './App.css';
import { Modal } from './components/Modal';
import { Table } from './components/table';

function App() {
  const [modalOpen, setModalOpen] = useState(false)

  const rows = [
    {page:"Page 1 " , description:"This is the first page ", status:"Live"},
    {page:"Page 2 " , description:"This is the second page ", status:"Draft"},
    {page:"Page 3 " , description:"This is the third  page ", status:"Error"}
  ]
  return (
    <div className="App">
      <Table rows={rows} />
      <button className='btn'onClick={() => setModalOpen(true)}>Add</button>
      {modalOpen && (<Modal closeModal={() => {setModalOpen(false);
      }}
       />)}
    </div>
  );
}

export default App;
