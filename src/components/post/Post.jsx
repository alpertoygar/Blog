import PostBody from "./PostBody";
import PostHead from "./PostHead";
import PropTypes from "prop-types";
import { Card, Elevation } from "@blueprintjs/core";

const postStyle = {
  margin: 8,
  marginBottom: 16,
  padding: 0,
  backgroundColor: "#F5F8FA",
};

const Post = (props) => {
  const { title, date, content } = props.post;
  return (
    <Card style={postStyle} elevation={Elevation.THREE}>
      <PostHead title={title} date={date} />
      <PostBody>{content}</PostBody>
    </Card>
  );
};

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.string,
    content: PropTypes.string.isRequired,
  }),
};

Post.defaultProps = {
  post: {
    title: "Title",
    date: "",
    content: "Content",
  },
};

export default Post;
