/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <div>
            <nav class="container-fluid navbar navbar-expand-lg navbar-light bg-dark">
                <div class="container">
                    <Link class="navbar-brand text-light" to="/">Found of web IT</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse text-align-center " id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
                            <li class="nav-item">
                                <a class="nav-link active text-light " aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text-light" to="/about">About us</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text-light" to="/contact">Contact us</Link>
                            </li>
                        </ul>
                        <form class="d-flex">
                            <button class="btn btn-outline-light text-light" type="submit">Join</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}
