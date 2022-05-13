import React from 'react'

export default function Navbar(props) {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">{props.title}</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Features</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Pricing</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                stock name
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a class="dropdown-item" href="#">Add Stock MOckup</a></li>
                                <li><a class="dropdown-item" href="#">Choose Stock Name</a></li>
                                <li><a class="dropdown-item" href="#">Transaction Type(Buy/Sell)</a></li>
                                <li><a class="dropdown-item" href="#">Quantity</a></li>
                                <li><a class="dropdown-item" href="#">Buying/Selling Price</a></li>
                                <li><a class="dropdown-item" href="#">Tracaction Date</a></li>




                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
