import React from 'react'
export default function LoginPage() {
  return (
    <main>
      <h1 className="text-4xl">Login Page</h1>
      
    </main>
  )
}

export function signInButton() {
  function signIn() {
    localStorage.setItem('isAuthenticated', 'true')
  }
  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={signIn}>
      Sign In
    </button>
  )
}
