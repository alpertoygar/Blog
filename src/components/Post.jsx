import PostBody from "./PostBody";
import PostHead from "./PostHead";

const Post = (props) => {
  return (
    <div className="card border-dark bg-light m-4">
      <PostHead title={props.title} date={props.date}></PostHead>
      <PostBody content={props.content}></PostBody>
    </div>
  );
};

export default Post;
