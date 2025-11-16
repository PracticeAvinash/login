import React from 'react'
import './Home.css'

const Home = () => {
  const user=localStorage.getItem("username");
  return (
        <div className="home-wrapper">
      <div className="home-box">
        <h2>Hello, {user}! </h2>
        <p>Welcome to the Home Page</p>
      </div>
    </div>
  )
}

export default Home