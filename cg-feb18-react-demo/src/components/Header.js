import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {

    let [user, setUser] = useState({});

    useEffect(() => {
        setUser(localStorage.getItem('loggedInUser'));
        console.log(localStorage.getItem('loggedInUser'));
    }, []);

    if (user) {
        return (
            <header class="header sticky-top">
                <nav class="navbar navbar-fixed-top navbar-expand-lg navbar-dark bg-dark">
                    <div class="container">
                        <Link className="navbar-brand" to="/">
                            <img src="https://www.capgemini.com/wp-content/themes/capgemini-komposite/assets/images/logo.svg"
                                height="24px" alt="Capgemini" />
                        </Link>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarResponsive">
                            <ul class="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/parent" >Parent</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/child" >Child</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/emp" >EmpData</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/logout" >Logout</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
    else {

    }


    return (
        <header class="header sticky-top">
            <nav class="navbar navbar-fixed-top navbar-expand-lg navbar-dark bg-dark">
                <div class="container">
                    <Link className="navbar-brand" to="/">
                        <img src="https://www.capgemini.com/wp-content/themes/capgemini-komposite/assets/images/logo.svg"
                            height="24px" alt="Capgemini" />
                    </Link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarResponsive">
                        <ul class="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/register" >Register</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login" >Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );

}

export default Header;

