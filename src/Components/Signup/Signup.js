import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Signup = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const navigate = useNavigate();


    if (user) {
        navigate('/');
    }

    const handleSignUp = () => {
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        console.log(name, email, password);
        createUserWithEmailAndPassword(email, password);
    }

    return (
        <div>
            <section>
                <div class="hero min-h-screen bg-base-300">

                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                        <div className='flex flex-col justify-center items-center'>
                            <img className='w-28 mt-5' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLU5_eUUGBfxfxRd4IquPiEwLbt4E_6RYMw&usqp=CAU" alt="" />

                            <h1 className='text-3xl font-bold pt-5'>Sign up</h1>
                        </div>

                        <div class="card-body">
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Your Name</span>
                                </label>
                                <input type="text" required ref={nameRef} placeholder="Your Name" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input type="email" required ref={emailRef} placeholder="Enter Your Email" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Password</span>
                                </label>
                                <input type="password" required ref={passwordRef} placeholder="password" class="input input-bordered" />
                            </div>
                            <div class="form-control mt-3">
                                <button onClick={() => handleSignUp()} class="btn btn-primary">Login</button>
                            </div>

                            <div>
                                <p>Already have an account? <span className='text-primary hover:link'><Link to='/login'>Log In</Link></span></p>
                            </div>

                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Signup;