import Navbar from './components/Navbar';
import GameList from './components/GameList';
import MovieList from './components/MovieList';
import Form from './components/Form';
import { ListProvider } from './ListContext';

function App() {
  return (
    <>
      <Navbar />
      <ListProvider>

        <GameList />
        <MovieList />
        <Form />
      </ListProvider>
      
    </>
  )
}

export default App;
