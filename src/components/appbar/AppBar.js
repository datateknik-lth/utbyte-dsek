import React from "react";

class AppBar extends React.Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">Brand</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapsableContent"
                        aria-controls="navbarCollapsableContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarCollapsableContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li>
                            <a className="nav-link" href="/table">Uni Table</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default AppBar;