import React from "react";

function Footer() {
  return (
    <div style={styles.footer}>
      <div style={styles.content}>
        <p style={styles.companyName}>Accredian</p>
        <p style={styles.contactDetails}>
          Contact us:
          <br />
          123 Main Street,
          <br />
          Springfield, USA
          <br />
          Phone: (123) 456-7890
          <br />
          Email: info@accredian.com
        </p>
        <p style={styles.copyRight}>© 2024</p>
      </div>
    </div>
  );
}

const styles = {
  footer: {
    backgroundColor: "#f1f1f1",
    padding: "20px",

    width: "100%",
    bottom: "0",
    borderTop: "1px solid #ccc",
    boxShadow: "0 -2px 10px rgba(0,0,0,0.1)",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  companyName: {
    fontSize: "1.5em",
    fontWeight: "bold",
  },
  contactDetails: {
    margin: "10px 0",
    textAlign: "center",
  },
  copyRight: {
    marginTop: "10px",
    fontSize: "0.9em",
  },
};

export default Footer;
