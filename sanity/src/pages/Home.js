import Footer from "../components/Footer";
import MovieList from "../components/MoviePage";

const Home = () => (
    <>
    <p>Henter data om filmklassikere lagret i Sanity og presenterer her:</p>
    <MovieList />
    <Footer />
    </>
);

export default Home;