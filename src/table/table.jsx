import React from "react";

const Table = () => {
  return (
    <div style={styles.container}>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Programs</th>
            <th style={styles.th}>referer bonuse</th>
            <th style={styles.th}>refer bonuse</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={styles.td}>prifesional certificte program </td>
            <td style={styles.td}>7000</td>
            <td style={styles.td}>90000</td>
          </tr>
          <tr>
            <td style={styles.td}>pg certificate program</td>
            <td style={styles.td}>9000</td>
            <td style={styles.td}>11000</td>
          </tr>
          <tr>
            <td style={styles.td}>executive program in data driven</td>
            <td style={styles.td}>11000</td>
            <td style={styles.td}>13000</td>
          </tr>
          <tr>
            <td style={styles.td}>executive program in project managmennt</td>
            <td style={styles.td}>10000</td>
            <td style={styles.td}>12000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f0f0f0",
  },
  table: {
    borderCollapse: "collapse",
    width: "80%",
    margin: "20px 0",
  },
  th: {
    border: "1px solid #ddd",
    padding: "8px",
    backgroundColor: "#f2f2f2",
    textAlign: "center",
  },
  td: {
    border: "1px solid #ddd",
    padding: "8px",
    textAlign: "center",
  },
};

export default Table;
