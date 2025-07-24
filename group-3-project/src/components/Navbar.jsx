import {useState} from "react";
import { NavLink } from "react-router-dom";


function Navbar({cartCount}) {
    const [hovered, setHovered] = useState(null);
    const handleMouseEnter = (item) => setHovered(item)
    const handleMouseLeave = () => setHovered(null)

    return (
        <nav style={styles.nav}>
            <h1 style={styles.logo}>Jewelry Boutique</h1>
            <div style={styles.menu}>
                <NavLink to="/" href="#" style={{...styles.link,
                    color:hovered === "home" ? "#6FE6FC" : "#fff",
                }}
                onMouseEnter={() => handleMouseEnter("home")}
                onMouseLeave={handleMouseLeave} id="home"
                >Home </NavLink>

                 <NavLink to="/About" href="#" style={{...styles.link,
                    color:hovered === "about" ? "#6FE6FC" : "#fff",
                }}
                onMouseEnter={() => handleMouseEnter("about")}
                onMouseLeave={handleMouseLeave} id="about"
                >About</NavLink>


                <NavLink to="/cart" style = {{...styles.link, 
                    color:hovered === "cart" ? "#6FE6FC" : "#fff" ,

                }}
                onMouseEnter={()=> handleMouseEnter("cart")}
                onMouseLeave={handleMouseLeave}
                id="cart">🛒 Cart({cartCount})</NavLink>

                 <div>

                <NavLink to="/newform">ADD NEW FORM</NavLink>
                
            </div>

            </div>
        </nav>
    )
}
const styles = {
    nav: {

        backgroundColor: "#0065F8",
        padding:"16px 32px",
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        borderBottom:"1px solid #ddd",
        position:"sticky",
        top: 0,
        zIndex: 10,
    },
    logo: {
        fontSize: "1.8rem",
        fontWeight: "bold",
        color: "white",
        cursor: "pointer"

    },
    menu: {
        display: "flex",
        gap: "32px",
        alignItems: "center",
    },
    
    link: {
        color: "rgb(255, 255, 255)",
        fontSize: "16px",
        textDecoration: "none",
        transition: "color 0.3s ease",
    },
  
}
export default Navbar;