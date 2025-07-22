import {useState} from "react";

function Navbar({cartCount}) {
    const [hovered, setHovered] = useState(null);
    const handleMouseEnter = (item) => setHovered(item)
    const handleMouseLeave = () => setHovered(null)

    return (
        <nav style={styles.nav}>
            <h1 style={styles.logo}>Jewelry Boutique</h1>
            <div style={styles.menu}>
                <a href="" style={styles.link}>Home</a>
                <a href="" style={styles.link}>
                    cart <span style={styles.badge}>{cart}</span>
                </a>
            </div>
        </nav>
    )
}
const styles = {
    nav: {
        backgroundColor: rgb(245, 158, 11),
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
        color: "rgb(51, 51, 51)"
        
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
    badge: {
        color:"rgb(255, 255, 255)",
        backgroundColor: "#dc2626",
        borderRadius: "50%",
        padding: "2px 8px",
        fontSize: "0.8rem",
        marginLeft: "5px",
    }
}