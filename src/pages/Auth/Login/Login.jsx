import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    return (
        <div className="flex items-center justify-center p-10">
            <div className="w-full max-w-md">
                <h2 className="text-3xl font-bold text-center">
                    Login
                </h2>
                <form className="space-y-5">
                    <div className="form-control">
                        <label
                            htmlFor="email"
                            className="label font-medium"
                        >
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            placeholder="Enter your email"
                            className="input input-bordered w-full p-3"
                        />
                    </div>

                    <div className="form-control">
                        <label
                            htmlFor="password"
                            className="label font-medium"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            required
                            placeholder="Enter your password"
                            className="input input-bordered w-full p-3"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 rounded-full text-white font-semibold bg-white"
                    >
                        Sign In
                    </button>
                </form>

                <div className="flex items-center gap-3 my-4">
                    <div className="grow h-px bg-gray-300"></div>
                    <span className="text-gray-500 text-sm">OR</span>
                    <div className="grow h-px bg-gray-300"></div>
                </div>

                <button
                    className="w-full py-3 rounded-full border border-gray-300 flex items-center justify-center gap-2 bg-white hover:bg-gray-50 transition-all"
                >
                    <span className="font-medium text-gray-600">
                        Continue with Google
                    </span>
                </button>

                <div className="text-center mt-4">
                    <p className="text-sm text-gray-600">
                        Don't have an account?{" "}
                        <Link
                            to="/auth/register"
                            className="font-semibold hover:underline"
                        >
                            Register here
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;