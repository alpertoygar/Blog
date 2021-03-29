const PostHead = (props) => {
  return (
    <div className="card-header navbar">
      <h2>{props.title}</h2>
      <span>{props.date}</span>
    </div>
  );
};

export default PostHead;
