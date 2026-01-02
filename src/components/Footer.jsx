import React from "react";

function Footer() {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>© 2025 Anup Shahi. All rights reserved.</p>

      <div style={styles.links}>
        <a
          href="https://github.com/AnupShahi07"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.link}
        >
          <i className="fa-brands fa-github"></i>
        </a>

        <a
          href="https://www.linkedin.com/in/anupshahi07"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.link}
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "rgb(41, 41, 42)",
    color: "white",
    padding: "5px 0",
    textAlign: "center",
  },
  text: {
    color: "yellow",
    marginBottom: "10px",
    fontSize: "14px",
  },
  links: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
  },
  link: {
    color: "#2980b9",
    fontSize: "22px",
    textDecoration: "none",
  },
};

export default Footer;
