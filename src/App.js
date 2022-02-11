import Navbar from './components/Navbar';
import GameList from './components/GameList';
import MovieList from './components/MovieList';
import Form from './components/Form';
import { ListProvider } from './ListContext';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <ListProvider>

        <GameList />
        <MovieList />
        <Form />
      </ListProvider>
      
      <Footer />
    </>
  )
}

export default App;
