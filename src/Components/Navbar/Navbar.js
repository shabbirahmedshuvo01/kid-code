import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div class="navbar bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">
                <div class="flex-1">
                    <a class="btn btn-ghost normal-case text-xl">
                        <img className='w-14' src="https://www.suvidhashiksha.org/logo.png?v=9" alt="" />
                    </a>
                </div>
                <div class="flex-none">
                    <ul class="menu menu-horizontal p-0 text-white">
                        <li><Link to="/">How It Works</Link></li>
                        <li><Link to="/">PROGRAMS</Link></li>
                        <li><Link to="/login">LOGIN</Link></li>
                        <li><Link to="/">REGISTER</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;