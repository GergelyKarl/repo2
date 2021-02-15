import React, { forwardRef } from "react";
import "./VideoCard.css";
import TextTruncate from "react-text-truncate";
import ThumbUpSharpIcon from "@material-ui/icons/ThumbUpSharp";

//https://image.tmdb.org/t/p/w500
const VideoCard = forwardRef(({ movie }, ref) => {
  return (
    <div ref={ref} className="videocard">
      <img
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        alt="wallpaper"
      />
      <TextTruncate
        line={2}
        element="p"
        truncateText="..."
        text={movie.overview}
      />
      <h2>{movie.title || movie.original_title}</h2>
      <p className="videocard__stats">
        {movie.release_date} <ThumbUpSharpIcon />
        {movie.vote_count}
      </p>
    </div>
  );
});
export default VideoCard;
