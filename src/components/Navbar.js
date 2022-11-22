
import './Navbar.css';

function Navbar () {

  

    return (
        <nav className="navbar navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand">Immunefi</a>
          <form className="d-flex">
            <button className="btn btn-light" type="submit">Sign up</button>
            <button className="btn btn-light" type="submit">Log in</button>
          </form>
        </div>
      </nav>
    );
}

export default Navbar;