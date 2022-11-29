import React from 'react';

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
                        <li><a>How It Works</a></li>
                        <li><a>PROGRAMS</a></li>
                        <li><a>LOGIN</a></li>
                        <li><a>REGISTER</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;