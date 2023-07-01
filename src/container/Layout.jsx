import NavBar from "../component/NavBar"

const Layout = (props) => {
    console.log(props)
  return (
    <>
      <NavBar />
      {props.children}
      {/*{DYANMIC COMPONENT}*/}
    </>
  );
};

export default Layout;
