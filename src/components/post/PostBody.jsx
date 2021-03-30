import PropTypes from "prop-types";

const postBodyStyle = {
  padding: 16,
  textAlign: "justify",
};

const PostBody = (props) => {
  const { children } = props;
  return (
    <div style={postBodyStyle} className="card-body text-dark">
      <p>{children}</p>
    </div>
  );
};

PostBody.propTypes = {
  children: PropTypes.string.isRequired,
};

export default PostBody;
