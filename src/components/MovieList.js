import movieLogo from '../assets/img/benjody.jpg';
import './list.css';

const MovieList = () => {

    const desc = "Since deciding to leave Filosofi Kopi, Ben has lived in his hometown and actively defending farmer groups whose lands have been taken over by the Company."

    const slicedDescription = (words, total = 100) => {
        if (words.length > total) {
            let trimmed = words.substr(0, total)
            trimmed = trimmed.substr(0, Math.min(trimmed.length, trimmed.lastIndexOf(" ")))
            trimmed += "..."
            return trimmed
        }
        else {
            return words
        }
    }

    return (
        <>
            <div className="container" id="movie-list-container">

                <div className="text-center mb-3 mt-4">
                    <h2>Movie List</h2>
                </div>

                <div className="row justify-content-md-start justify-content-center">
                    <div className="col-10 col-md-3">
                        <div className="card">
                            <img src={movieLogo} alt="logo-movie" />
                            <div className="card-body">
                                <h4>Ben & Jody</h4>
                                <h6 className="fw-bold">2022</h6>
                                <h6 className="fw-bold">Action, Adventure, Drama</h6>
                                <p>{slicedDescription(desc)}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MovieList