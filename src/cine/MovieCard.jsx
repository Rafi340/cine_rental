import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { MovieContext } from "../context/index";
import { getImageUrl } from "../utils/helper";
import MovieDetailsModals from "./MovieDetailsModals";
import Rating from "./Rating";
const MovieCard = ({ movie }) => {
  const [showModal, setShowModal] = useState(false);
  const [select, setSelect] = useState(null);

  const { state, dispatch } = useContext(MovieContext);
  const { cartItems } = state;
  const handleModalClose = () => {
    setShowModal(!showModal);
    setSelect(null);
  };
  const handleModalOpen = (movie) => {
    setSelect(movie);
    setShowModal(!showModal);
  };
  const addToCart = (e, movie) => {
    e.stopPropagation();
    console.log(state);
    const find = cartItems?.find((t) => t.id === movie.id);

    if (!find) {
      dispatch({
        type: "ADD_TO_CART",
        payload: { ...movie },
      });
      toast.success("Wow Added the movie");
    } else {
      toast.error("Wow Already Added this move!");
    }
  };
  return (
    <>
      {showModal && (
        <MovieDetailsModals
          movie={select}
          onClose={handleModalClose}
          onCartAdd={addToCart}
        />
      )}
      <figure
        className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl"
        onClick={() => handleModalOpen(movie)}
      >
        <img
          className="w-full object-cover"
          src={getImageUrl(movie.cover)}
          alt=""
        />
        <figcaption className="pt-4">
          <h3 className="text-xl mb-1">{movie.title}</h3>
          <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
          <div className="flex items-center space-x-1 mb-5">
            <Rating value={movie.rating} />
          </div>
          <a className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm">
            <img src="./assets/tag.svg" alt="" />
            <span
              className="cursor-pointer"
              onClick={(e) => addToCart(e, movie)}
            >
              ${movie.price} | Add to Cart
            </span>
          </a>
        </figcaption>
      </figure>
    </>
  );
};

export default MovieCard;
