import React from 'react';

function SignIn() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 mt-20">
      <div className="bg-white rounded-lg shadow-lg flex items-center justify-center w-full max-w-4xl">
        <div className="w-1/2 p-8">
          <h2 className="text-2xl font-bold mb-8">Sign in</h2>
          {/* Add the action attribute to the form tag */}
          <form action="college-profile.html" method="get">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Enter your password"
              />
            </div>
            <div className="mb-6">
              <input
                className="mr-2 leading-tight"
                type="checkbox"
                id="remember-me"
              />
              <label className="text-sm" htmlFor="remember-me">
                Keep me logged in
              </label>
            </div>
            <div className="flex items-center justify-between">
              <a href="collegeProfileMain.html">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Sign in
                </button>
              </a>
            </div>
            <div className="text-center my-4 text-gray-600">or</div>
            <button
              className="flex items-center justify-center w-full border border-gray-300 text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              <img
                src="https://www.google.com/favicon.ico"
                alt="Google"
                className="w-5 h-5 mr-2"
              />
              Sign in with Google
            </button>
            <div className="text-center mt-4">
              <a href="signup" className="text-blue-500 text-sm">
                Need an account?{' '}
                <span className="underline">Create one</span>
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
