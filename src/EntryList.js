import EntryShow from "./EntryShow";
import { Link } from 'react-router-dom';

function EntryList({ entries }) {
  const renderedEntries = entries.map((entry) => {
    return <EntryShow entry={entry} />;
  });

  return (
    <section className="section">
      <div className="container">
        <table>
          <tr>
            <th>Date</th>
            <th>Entry</th>
          </tr>
          {renderedEntries}
        </table>
      </div>
      <Link to="/entry-form">Add an Entry</Link>
    </section>
  );
}

export default EntryList;