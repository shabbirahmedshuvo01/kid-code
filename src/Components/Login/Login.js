import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    const emailRef = useRef('');
    const passwordRef = useRef('');

    const handlelogin = () => {
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email || 0, password || 0)
    }

    return (
        <div>
            <section>
                <div class="hero min-h-screen bg-base-300">

                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                        <div className='flex flex-col justify-center items-center'>
                            <img className='w-28 mt-5' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLU5_eUUGBfxfxRd4IquPiEwLbt4E_6RYMw&usqp=CAU" alt="" />

                            <h1 className='text-3xl font-bold pt-5'>Login</h1>
                        </div>

                        <div class="card-body">
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
                                <label class="label">
                                    <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div class="form-control mt-3">
                                <button onClick={() => handlelogin()} class="btn btn-primary">Login</button>
                            </div>

                            <div>
                                <p>Don't have an account? <span className='text-primary hover:link'><Link to='/'>Sign up</Link></span></p>
                            </div>

                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Login;