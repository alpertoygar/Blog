import { Alignment, H2, H4, Navbar } from "@blueprintjs/core";
import PropTypes from "prop-types";

const postHeadStyle = {
  backgroundColor: "#48AFF0",
  height: "100%",
  display: "flex",
};

const textStyle = {
  margin: "auto",
  textAlign: "justify",
};

const titleGroupStyle = {
  height: "100%",
  display: "flex",
  paddingRight: 16,
  paddingBottom: 8,
  paddingTop: 6,
};

const dateGroupStyle = {
  margin: "auto",
};

const PostHead = (props) => {
  const { title, date } = props;
  return (
    <Navbar style={postHeadStyle}>
      <Navbar.Group style={titleGroupStyle} align={Alignment.LEFT}>
        <H2 style={textStyle}>{title}</H2>
      </Navbar.Group>
      <Navbar.Group style={dateGroupStyle} align={Alignment.RIGHT}>
        <H4 style={textStyle}>{date}</H4>
      </Navbar.Group>
    </Navbar>
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
