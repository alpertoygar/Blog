import PostBody from "./PostBody";
import PostHead from "./PostHead";
import PropTypes from "prop-types";

const Post = (props) => {
  const { title, date, content } = props.post;
  return (
    <div className="card border-dark bg-light m-4">
      <PostHead title={title} date={date} />
      <PostBody>{content}</PostBody>
    </div>
  );
};

Post.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
  content: PropTypes.string.isRequired,
};

Post.defaultProps = {
  date: "",
};

export default Post;
