import PropTypes from "prop-types";

const PostBody = (props) => {
  const { children } = props;
  return (
    <div className="card-body text-dark">
      <p>{children}</p>
    </div>
  );
};

PostBody.propTypes = {
  content: PropTypes.string.isRequired,
};

export default PostBody;
