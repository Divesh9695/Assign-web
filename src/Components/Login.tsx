import React, { useState } from 'react';
import { Facebook, Eye, EyeOff,  } from 'lucide-react';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Remember Me:', rememberMe);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-white via-purple-100 to-purple-200 flex items-center justify-center">
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl md:flex md:max-w-2xl lg:max-w-3xl">
                {/* Left Side: Login Form */}
                <div className="p-8 space-y-6 md:w-1/2 ">
                    <div className="flex items-center gap-2">
                        <img
                            src="web.png"
                            alt="Logo"
                            className="h-8"
                        />
                        
                    </div>
                    <h2 className="text-2xl font-semibold text-gray-900">Login to your account</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                          
                
                            <label htmlFor="email" className="block text-sm text-gray-700">Email / Phone</label>
                            <input
                                id="email"
                                type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                placeholder="Enter your email or phone"
                                className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:border-purple-500 focus:ring-purple-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm text-gray-700">Enter Password</label>
                            <div className="relative mt-1">
                                <input
                                    id="password"
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    placeholder="Enter your password"
                                    className="pr-10 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:border-purple-500 focus:ring-purple-500"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-400"
                                >
                                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                                </button>
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    id="rememberMe"
                                    checked={rememberMe}
                                    onChange={() => setRememberMe(!rememberMe)}
                                    className="form-checkbox h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                                />
                                <label htmlFor="rememberMe" className="text-sm text-gray-700">Remember Me</label>
                            </div>
                            <a href="#" className="text-sm text-purple-600 hover:text-purple-800">Forgot Password?</a>
                        </div>
                        <button type="submit" className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2">
                            Login
                        </button>
                    </form>
                    <div className="text-center text-sm text-gray-600">
                        Don't have an account? <a href="#" className="text-purple-600 hover:text-purple-800">Register</a>
                    </div>
                    <div className="my-4 relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300"></div>
                        </div>
                        <div className="relative text-sm flex justify-center">
                            <span className="bg-white text-gray-500 px-3">OR</span>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <button className="w-full flex items-center justify-center gap-2 text-gray-700 border border-gray-300 p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2">
                            {/* Assuming you have a Google Icon component */}
                            {/* < className="h-5 w-5" /> */}
                            Sign in with Google
                        </button>
                        <button className="w-full flex items-center justify-center gap-2 text-gray-700 border border-gray-300 p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
                            <Facebook className="h-5 w-5 text-blue-500" />
                            Sign in with Meta
                        </button>
                        <button className="w-full flex items-center justify-center gap-2 text-gray-700 border border-gray-300 p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2">
                            {/* You might need to replace this with the actual icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M19 10a9 9 0 01-9 9 9 9 0 01-9-9 9 9 0 019-9 9 9 0 019 9zm-7 5v-4h2a1 1 0 001-1v-2a1 1 0 00-1-1h-2V5h3a1 1 0 001-1H6a1 1 0 00-1 1v10a1 1 0 001 1h3z" clipRule="evenodd" />
                            </svg>
                            Create Website Using FB Page
                        </button>
                    </div>
                </div>

                {/* Right Side: Engagement Info */}
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-8 md:w-1/2 flex flex-col justify-center items-center text-center">
                    <h2 className="text-2xl font-semibold mb-4">Enhance User Engagement</h2>
                    <p className="text-sm mb-6">
                        Websites with fresh content see a 45% increase in user engagement. Don't let
                        your site become stale—keep your audience interested by updating
                        regularly!
                    </p>
                    <img
                        src="/buil.webp"
                        alt="Engagement Image"
                        className="rounded-md shadow-md w-48 h-auto"
                    />
                </div>
            </div>
        </div>
    );
};

export default LoginPage;