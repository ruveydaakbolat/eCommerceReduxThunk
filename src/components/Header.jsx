import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <header className="navbar navbar-expand-l bg-body-tertiary">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">
                Navbar
            </a>

            <nav className="d-flex gap-5">
                <NavLink to={'/'}>Anasayfa</NavLink>
                <NavLink to={'/sepet'}>
                    <span>Sepet</span>
                    <span className="ms-2 badge bg-danger"></span>
                </NavLink>
            </nav>
        </div>
    </header>
  )
}

export default Header