import 'bulma/css/bulma.css';
import Entry from './Entry';

function App() {
  return (
    <div>
      <section className="hero is-info">
        <div className="hero-body">
          <p className="title">Journal</p>
        </div>
      </section>
      <Entry />
    </div>
  );
}

export default App;
