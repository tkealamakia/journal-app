function EntryShow({ entry }) {
  return (
    <tr>
      <td>{ entry.date }</td>
      <td>{ entry.text }</td>
    </tr>
  );
}

export default EntryShow;