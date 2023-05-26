import React from 'react'
import { Link } from 'react-router-dom';



export default function Nav1() {
    return (
        <div>

            <nav >
                <ul className='d-flex justify-content-around list-unstyled mt-5 '>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/additem">Additems</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </nav>

        </div>
    )
}
