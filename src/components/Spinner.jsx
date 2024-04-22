import ClipLoader from "react-spinners/ClipLoader";
import PropTypes from "prop-types";

const Spinner = ({ loading }) => {
  const override = {
    display: "block",
    margin: "100px auto",
  };

  return (
    <ClipLoader
      color={"#4338ca"}
      loading={loading}
      cssOverride={override}
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

Spinner.propTypes = {
  loading: PropTypes.bool,
};

export default Spinner;
