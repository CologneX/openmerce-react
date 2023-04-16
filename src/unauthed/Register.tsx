import React, { useEffect } from 'react'

export default function RegisterPage() {
  useEffect(() => {
    document.title = 'OpenMerce | Register'
  }, [])
  return (
    <main>
      <h1 className="text-4xl">Register Page</h1>
    </main>
  )
}
