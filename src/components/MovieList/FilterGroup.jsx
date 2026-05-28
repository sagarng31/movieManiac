const FilterGroup = ({ minRating, onRateClick, ratingRange }) => {
  return (
    <ul className="align_center movie_filter">
      {ratingRange.map((rate) => (
        <li
          className={`movie_filter_item ${minRating === rate && "active"}`}
          onClick={() => onRateClick(rate)}
        >
          {rate}+ Star
        </li>
      ))}
    </ul>
  );
};

export default FilterGroup;
