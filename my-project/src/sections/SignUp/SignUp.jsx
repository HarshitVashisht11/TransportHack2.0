import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';

import { auth } from '../firebase';

function Signup() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errorMsg, setErrorMsg] = useState('');
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSignup = async () => {
    if (!values.email || !values.password || !values.confirmPassword) {
      setErrorMsg('Fill in all fields');
      return;
    }

    if (values.password !== values.confirmPassword) {
      setErrorMsg('Passwords do not match');
      return;
    }

    setErrorMsg('');
    setSubmitButtonDisabled(true);

    try {
      await createUserWithEmailAndPassword(auth, values.email, values.password);
      setSubmitButtonDisabled(false);
      navigate('/');
    } catch (err) {
      setSubmitButtonDisabled(false);
      setErrorMsg(err.message);
    }
  };

  return (
    <div className="bg-gradient-to-b from-cyan-500 to-cyan-800 min-h-screen flex flex-col justify-center items-center">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>
        <form onSubmit={(e) => { e.preventDefault(); handleSignup(); }}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-3 py-2 border rounded-md text-gray-700 focus:ring focus:ring-cyan-300 focus:outline-none"
              type="email"
              id="email"
              name="email"
              placeholder="Your email"
              required
              value={values.email}
              onChange={(e) => setValues({ ...values, email: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="w-full px-3 py-2 border rounded-md text-gray-700 focus:ring focus:ring-cyan-300 focus:outline-none"
              type="password"
              id="password"
              name="password"
              placeholder="Your password"
              required
              value={values.password}
              onChange={(e) => setValues({ ...values, password: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              className="w-full px-3 py-2 border rounded-md text-gray-700 focus:ring focus:ring-cyan-300 focus:outline-none"
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm password"
              required
              value={values.confirmPassword}
              onChange={(e) => setValues({ ...values, confirmPassword: e.target.value })}
            />
          </div>
          <button
            className="w-full bg-gradient-to-r from-cyan-400 to-cyan-600 text-white py-2 rounded-md hover:from-cyan-600 hover:to-cyan-800 focus:outline-none"
            type="submit"
            disabled={submitButtonDisabled}
          >
            Sign Up
          </button>
        </form>
        {errorMsg && <p className="text-red-500">{errorMsg}</p>}
        <p className="mt-4 text-center">
          Already have an account? <Link to="/login" className="text-cyan-600">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
