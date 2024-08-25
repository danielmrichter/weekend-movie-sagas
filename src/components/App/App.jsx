import { Route, HashRouter as Router } from 'react-router-dom';
import MovieList from '../MovieList/MovieList';
import './App.css';
import NavBar from '../NavBar/NavBar';
import 'primereact/resources/themes/md-dark-deeppurple/theme.css'
import Search from '../Search/Search';

function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>
        <NavBar />
        <Route path="/" exact>
          <MovieList />
        </Route>
        <Route exact path='/search'>
          <Search />
        </Route>
      </Router>
    </div>
  );
}

export default App;
