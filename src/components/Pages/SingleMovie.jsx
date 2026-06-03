import { useParams, useNavigate } from "react-router-dom";
const SingleMovie = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div style={{ padding: "30px" }}>
      <h2>Selected Movie : {movieId}</h2>
      <button type="button" onClick={handleBack}>
        Back
      </button>
    </div>
  );
};

export default SingleMovie;
