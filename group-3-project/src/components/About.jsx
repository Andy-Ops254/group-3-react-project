import React from 'react'

const About = () => {
  return (
    <div style = {styles.container}>  
        <h1 style={styles.header}>
          ABOUT 
        </h1>
        <p style={styles.paragraph}>
          Welcome to <strong>Jewelry Boutique</strong> - your one-step shop for beautifully crafted, handpicked jewelry. Our mission is to bring you timeless elegance through our collection of rings, necklaces, bracelets, and earrings.
        </p>
        
        <p style={styles.paragraph}>
        Whether you're looking for a gift, a personal statement piece, or just browsing for inspiration, we've curated a catalog to suit every single occasion. 
        </p>

        <p style={styles.paragraph}>
          All products are carefully selected from trusted artisans and vendors. We ensure quality, affordability, and fast delivery on every item.
        </p>

        <p style={styles.paragraph}>
          Thank you for choosing jewelry Boutique - where beauty meets simplicity.
        </p>
    </div>
  )
}
const styles = {
   container: {
    maxWidth: "800px",
    margin:"40px auto",
    padding:"40px",
    backgroundColor:"#fff",
    borderRadius:"12px",
    boxShadow:"0 10px 30px rgba(0,0,0,0.1)",
    fontFamily:"'Seoge Ui', Tahoma, Geneva, Verdana, sans-serif",
    textAlign:"center",
    lineHeight:"1.8",
    color:"#333",
    animation: "fadeIn 1.5s ease-in-out"
   },
header: {
  fontSize:"2.2rem",
  color:"#fa638e",
  marginBottom:"24px",
  fontWeight:"bold",
},
paragraph: {
  fontSize: "1.1rem",
  marginBottom: "18px",
  },
}

export default About
