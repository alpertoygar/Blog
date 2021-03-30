import { Alignment, Button, Navbar } from "@blueprintjs/core";

const navbarStyle = {
  backgroundColor: "#137CBD",
  color: "#FFFFFF",
  zIndex: 100,
};

const buttonStyle = {
  color: "#FFFFFF",
  outline: "none",
};

const NavBar = () => {
  return (
    <Navbar style={navbarStyle} fixedToTop={true}>
      <Navbar.Group align={Alignment.LEFT}>
        <Navbar.Heading>Developer Zone</Navbar.Heading>
        <Navbar.Divider />
        <Button
          style={buttonStyle}
          minimal={true}
          outlined={false}
          text="Home"
        />
        <Button
          style={buttonStyle}
          minimal={true}
          outlined={false}
          text="Posts"
        />
      </Navbar.Group>
    </Navbar>
  );
};

export default NavBar;
