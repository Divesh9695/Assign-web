import React, { useState } from 'react';
import { Eye, EyeOff, Facebook } from 'lucide-react';

const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden md:flex md:max-w-3xl">
        {/* Left Side - Blue Info Section */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-8 md:w-1/2 flex flex-col justify-center items-center text-center">
          <h2 className="text-2xl font-semibold mb-4">Build Your Website</h2>
          <p className="text-sm mb-6">
            Join us and start building beautiful, responsive websites in minutes!
          </p>
          <img
            src="/public/buil.webp"
            alt="Illustration"
            className="rounded-md shadow-md w-48 h-auto"
          />
        </div>

        {/* Right Side - Signup Form */}
        <div className="p-8 space-y-6 md:w-1/2">
          <div className="flex items-center gap-2">
            <img src="web.png" alt="Logo" className="h-8" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-900">Create a new account</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm text-gray-700">Full Name</label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Enter your full name"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-gray-700">Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm text-gray-700">Password</label>
              <div className="relative mt-1">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Create a password"
                  className="pr-10 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
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
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
              Sign Up
            </button>
          </form>
          <div className="text-center text-sm text-gray-600">
            Already have an account? <a href="#" className="text-blue-600 hover:text-blue-800">Login</a>
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
            <button className="w-full flex items-center justify-center gap-2 text-gray-700 border border-gray-300 p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2">
              Sign up with Google
            </button>
            <button className="w-full flex items-center justify-center gap-2 text-gray-700 border border-gray-300 p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
              <Facebook className="h-5 w-5 text-blue-500" />
              Sign up with Meta
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
