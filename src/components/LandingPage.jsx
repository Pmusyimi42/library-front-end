import React from 'react'

export default function LandingPage() {
  return (
    <div style={{ 
      backgroundImage: `url("https://asset.nasen.org.uk/styles/690_auto/public/media/2020-11/generic%20book%20open.jpg?itok=mS2HwCG0")`,
      height:'900px',
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      fontWeight: "bold",
      justifyContent: "center"
      

    }}>
      <div style={{
        width: "50%",
        textAlign: "center"
      }}>
        <h1>WORDLINE</h1>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
      </div>

    </div>
  )
}
