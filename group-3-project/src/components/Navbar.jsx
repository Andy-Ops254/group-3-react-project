function Navbar({cartCount}) {
    return (
        <nav style={Styles.nav}>
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