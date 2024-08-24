import { Route, HashRouter as Router } from 'react-router-dom';
import MovieList from '../MovieList/MovieList';
import './App.css';
import NavBar from '../NavBar/NavBar';
import 'primereact/resources/themes/md-dark-deeppurple/theme.css'

function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>
        <NavBar />
        <Route path="/" exact>
          <MovieList />
        </Route>
        {/* Add Movie page */}
      </Router>
    </div>
  );
}

export default App;
