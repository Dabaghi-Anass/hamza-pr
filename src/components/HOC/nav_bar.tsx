import logoImage from "../../assets/images/app_logo.png";

const NavBar = () => {
  return (
    <nav className="nav-bar flex align-center justify-center w-full bg-primary-200 px-4 py-3">
      <a href="#" className="no-underline w-44">
        <img src={logoImage} alt="app-logo" className="w-100"/>
      </a>
    </nav>
  )
}

export default NavBar