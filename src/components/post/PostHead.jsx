import PropTypes from "prop-types";

const PostHead = (props) => {
  const { title, date } = props;
  return (
    <div className="card-header navbar">
      <h2>{title}</h2>
      <span>{date}</span>
    </div>
  );
};

PostHead.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
};

PostHead.defaultProps = {
  date: "",
};

export default PostHead;
