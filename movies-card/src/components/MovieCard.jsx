import PropTypes from "prop-types";
import "../index.css";
export const MovieCard = ({
  movie,
  image,
  genre,
  duration,
  year,
  director,
  description,
}) => {
  return (
    <div className="bg-[#000000] text-[#fff] w-[80%] m-auto mt-10 rounded-2xl p-10 shadow-3xl border-[#f0f0f0] border-2 mb-14">
      <div className="flex">
        <div>
          <img src={image} alt="" className="h-48" />
        </div>

        <div className="pl-5">
          <h1 className="text-3xl font-bold p-2">{movie}</h1>
          <h1 className="pl-2">
            {year}, {director}
          </h1>
          <div className="flex items-center">
            <h1 className="border-2 border-white w-20 pl-2 mt-2 ml-2 rounded-sm shadow-xl">
              {duration}
            </h1>
            <h1 className="pl-2 mt-2 ml-2">{genre}</h1>
          </div>
        </div>

        <div></div>
      </div>
      <div className="pt-5">
        <p>{description}</p>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
