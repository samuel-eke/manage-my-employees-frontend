import React from "react";
import styles from "../styles/SingleEmployee.module.css";

function SingleEmployee({ empFirstName, empLastName }) {
  const editFunction = () => {
    alert("function working");
  };
  return (
    <main className={styles.main}>
      <div className={styles.namesection}>
        <span>First Name</span>
        <p>{empFirstName}</p>
        <span>Last Name</span>
        <p>{empLastName}</p>
      </div>
      <div className={styles.btnarea}>
        <button
          className={styles.edit}
          onClick={editFunction}>
          Edit
        </button>
        <button className={styles.del}>Delete</button>
      </div>
    </main>
  );
}

export default SingleEmployee;
