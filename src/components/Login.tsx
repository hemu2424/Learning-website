import React from 'react'

export default function Login() {
  const handleSubmit = ()=>{
    console.log("Submit button click")
  }
  return (
    <div>
      <div>
        <h2>Get started with LetsUpgrade</h2>

      <h2> Learn. Build. Share. Grow</h2>
      <button type="submit" onClick={handleSubmit}>Get Strated</button>
      </div>

      <div>
        <img src="/main.logo.png" alt="" />
        <h2>B.Tech Cohort 24 Launch . LetsUpgrade x ITM </h2>

        <p>Program built for Ambitious future</p>
        <br />
        <p>Founders, Tech, Product & Bussiness leaders</p>
      </div>
    </div>
  )
}
