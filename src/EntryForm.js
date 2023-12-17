import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function EntryForm({ onSubmit }) {
  const[entry, setEntry] = useState('');
  const navigate = useNavigate();
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const journalEntry = {
      date: event.target.date.value,
      text: event.target.text.value
    };
    onSubmit(journalEntry);
    navigate('/');
  }
  return( 
      <section className="section">
        <div className="container">
          <form onSubmit={ handleFormSubmit }>
            <div className="field">
              <label className="label">Date</label>
              <div className="control">
                <input className="input" name="date" type="date" placeholder="Choose a date"/>
              </div>
            </div>
            <div className="field">
              <label className="label">Journal Entry</label>
              <div className="control">
                <textarea className="textarea" name="text" placeholder="Write your journal entry here..."></textarea>
              </div>
            </div>
            <div className="field">
              <div className="control">
                <button type="submit" class="button is-info">Create</button>
              </div>
            </div>
          </form>
        </div>
      </section>
  );
}

export default EntryForm;