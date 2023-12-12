import EntryShow from "./EntryShow";

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
    </section>
  );
}

export default EntryList;