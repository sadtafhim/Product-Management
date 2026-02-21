import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div className="flex items-center justify-center p-10 min-h-screen">
            <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md">
                <h2 className="text-3xl font-bold text-center text-[#1E293B]">
                    Register
                </h2>

                <form className="space-y-5 mt-6">
                    <div className="form-control">
                        <label
                            htmlFor="email"
                            className="label font-medium text-[#1E293B]"
                        >
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            placeholder="Enter your email"
                            className="input input-bordered w-full p-3 focus:border-[#2563EB] focus:outline-none"
                        />
                    </div>

                    <div className="form-control">
                        <label
                            htmlFor="password"
                            className="label font-medium text-[#1E293B]"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            required
                            placeholder="Enter your password"
                            className="input input-bordered w-full p-3 focus:border-[#2563EB] focus:outline-none"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 rounded-full text-white font-semibold bg-[#2563EB] hover:bg-[#1D4ED8] transition-all"
                    >
                        Sign In
                    </button>
                </form>

                <div className="flex items-center gap-3 my-6">
                    <div className="grow h-px bg-[#E2E8F0]"></div>
                    <span className="text-[#64748B] text-sm">OR</span>
                    <div className="grow h-px bg-[#E2E8F0]"></div>
                </div>

                <button
                    className="w-full py-3 rounded-full border border-[#E2E8F0] flex items-center justify-center gap-2 bg-white hover:bg-[#F1F5F9] transition-all"
                >
                    <span className="font-medium text-[#1E293B]">
                        Continue with Google
                    </span>
                </button>

                <div className="text-center mt-6">
                    <p className="text-sm text-[#64748B]">
                        Don't have an account?{" "}
                        <Link
                            to="/auth/login"
                            className="font-semibold text-[#2563EB] hover:text-[#1D4ED8] hover:underline"
                        >
                            Login here
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;