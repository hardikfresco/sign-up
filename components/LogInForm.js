"use client";
import { signInUser } from '@/store/action/auth';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const LogInForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState([]);
  const router = useRouter();
  const dispatch = useDispatch();
  const { user, loading } = useSelector((state) => state.auth);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors([]); // Clear all errors on input change
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await dispatch(signInUser(formData));
    const { errors, status } = res?.payload || {};

    if (status === 1) {
      router.push('/home');
    } else if (errors) {
      setErrors(errors); // Set all errors to state
    }
  };

  // Function to retrieve error message for a specific field using path
  const getErrorMessage = (field) => {
    const error = errors.find((err) => err.path === field); // Find error by path
    return error ? error.msg : null;
  };

  // Function to get general error message
  const getGeneralError = () => {
    const generalError = errors.find((err) => err.param === null); // Find general error
    return generalError ? generalError.msg : null;
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center justify-center p-8 bg-white shadow-lg rounded-lg max-w-sm w-full">
        <h1 className="text-2xl font-bold text-center mb-6">Sign In</h1>

        
        

        <form onSubmit={handleSubmit} className="w-full">
          
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className={`bg-gray-50 border ${
                getErrorMessage('email') ? 'border-red-500' : 'border-gray-300'
              } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
            />
            {getErrorMessage('email') && (
              <p className="text-red-500 text-sm mt-1">{getErrorMessage('email')}</p>
            )}
          </div>
          <div className="mb-4">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className={`bg-gray-50 border ${
                getErrorMessage('password') ? 'border-red-500' : 'border-gray-300'
              } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
            />
            {getErrorMessage('password') && (
              <p className="text-red-500 text-sm mt-1">{getErrorMessage('password')}</p>
            )}
          </div>
          <div className="mb-5">
            <button
              type="submit"
              disabled={loading}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5"
            >
              {loading ? 'Signing In...' : 'Sign In'}
            </button>
          </div>
        </form>
        {user && <p className="text-green-500 text-center">Welcome, {user.name}!</p>}
        {getGeneralError() && (
          <p className="text-red-500 text-center mb-4">{getGeneralError()}</p>
        )}
        <Link href='/signup'>Dont have an account?</Link>
        <a></a>
      </div>
    </div>
  );
};

export default LogInForm;
