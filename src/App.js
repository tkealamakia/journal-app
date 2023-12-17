import { useState } from 'react';
import 'bulma/css/bulma.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EntryForm from './EntryForm';
import EntryList from './EntryList';

function App() {
  const[entries, setEntries] = useState([]);

  const handleSubmit = (entry) => {
    setEntries([...entries, entry]);
  }

  return (
    <Router>
      <div>
        <section className="hero is-info">
          <div className="hero-body">
            <p className="title">Journal</p>
          </div>
        </section>
        <Routes>
          <Route path="/" element={<EntryList entries={ entries }/> } />
          <Route path="/entry-form" element={<EntryForm onSubmit={ handleSubmit }/> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
