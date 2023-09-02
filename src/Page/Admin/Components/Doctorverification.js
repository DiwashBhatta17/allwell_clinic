import React from "react";
import axios from "axios";
import AdminDoc from "../AdminDoc";
export default function Doctorverification() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    // Fetch the list of doctors from the Spring Boot API
    axios
      .get("http://localhost:8081/doctor/list-all-doctor")
      .then((response) => {
        setDoctors(response.data);
      })
      .catch((error) => {
        console.error("Error fetching doctors:", error);
      });
  }, []);
  return <div></div>;
}
