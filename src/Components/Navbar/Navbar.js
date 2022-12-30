import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {

    const [user] = useAuthState(auth);

    const handleSingOut = () => {
        signOut(auth);
    }

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
                        {user ?
                        <Link onClick={handleSingOut}>Sign Out</Link>
                        :
                        <Link className='mt-3' to={'/login'}>Login</Link>
                        }
                        <li><Link to="/signup">REGISTER</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;