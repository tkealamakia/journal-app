import { useState } from 'react';
import 'bulma/css/bulma.css';
import Entry from './Entry';
import EntryList from './EntryList';

function App() {
  const[entries, setEntries] = useState([]);

  const handleSubmit = (entry) => {
    console.log(entry.date);
    setEntries([...entries, entry]);
  }

  return (
    <div>
      <section className="hero is-info">
        <div className="hero-body">
          <p className="title">Journal</p>
        </div>
      </section>
      <Entry onSubmit={ handleSubmit }/>
      <EntryList entries={ entries } />
    </div>
  );
}

export default App;
