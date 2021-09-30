function Rating(props) {
  const { rating, numReviews } = props;
  return (
    <div className="rating">
      <span>
        <i
          className={
            rating < 0.5
              ? "fa fa-star-o"
              : rating >= 0.5 && rating < 1
              ? "fa fa-star-half-o"
              : "fa fa-star"
          }
        ></i>
      </span>
      <span>
        <i
          className={
            rating < 1.5
              ? "fa fa-star-o"
              : rating >= 1.5 && rating < 2
              ? "fa fa-star-half-o"
              : "fa fa-star"
          }
        ></i>
      </span>
      <span>
        <i
          className={
            rating < 2.5
              ? "fa fa-star-o"
              : rating >= 2.5 && rating < 3
              ? "fa fa-star-half-o"
              : "fa fa-star"
          }
        ></i>
      </span>
      <span>
        <i
          className={
            rating < 3.5
              ? "fa fa-star-o"
              : rating >= 3.5 && rating < 4
              ? "fa fa-star-half-o"
              : "fa fa-star"
          }
        ></i>
      </span>
      <span>
        <i
          className={
            rating < 4.5
              ? "fa fa-star-o"
              : rating >= 4.5 && rating < 5
              ? "fa fa-star-half-o"
              : "fa fa-star"
          }
        ></i>
      </span>
      <span>{numReviews + " reviews"}</span>
    </div>
  );
}

export default Rating;
