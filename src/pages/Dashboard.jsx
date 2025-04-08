import React, { useEffect, useState } from "react";
import SingleEmployee from "../components/SingleEmployee";
import axios from "axios";
import { useAuth } from "../context/authContext";

function Dashboard() {
  const data = [
    { firstName: "Daniel Ken", lastName: "Solas" },
    {
      firstName: "Aby",
      lastName: "Jerry",
    },
  ];
  const { accessToken } = useAuth();
  const [employees, setEmployees] = useState([]);
  const accesstoken = sessionStorage.getItem("authToken");

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        if (!accesstoken) {
          throw new Error("No auth token found");
        }
        const resp = await axios.get(
          `${import.meta.env.VITE_SERVER_URL}/employees`,
          {
            headers: {
              Authorization: `Bearer ${accesstoken}`,
              "Content-Type": "application/json",
            },
          }
        );
        const contents = resp.data;
        setEmployees(contents);
        console.log("API response:", resp.data);
      } catch (error) {
        console.error("Failed to fetch from server ", error);
      }
    };
    fetchEmployees();
  }, []);

  useEffect(() => {
    console.log("Updated employees:", employees);
  }, [employees]);

  const styles = {
    display: "flex",
    flexDirection: "row",
  };
  return (
    <div style={{ styles }}>
      {employees.map((x) => (
        <div>
          <SingleEmployee
            empFirstName={x.firstname}
            empLastName={x.lastname}
            id={x._id}
          />
        </div>
      ))}
    </div>
  );
}

export default Dashboard;
