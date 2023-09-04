import React, { useEffect, useState } from 'react'
import userProfilehistoryList from '../../../Services/User/userProfilehistoryList';
import UserMedicalInfo from './UserMedicalInfo';

function UserMedicalHistory() {
    const [medicalHistory, setMedicalHistory] = useState([]);
    const [getTrigger, setTrigger] = useState(false);
    const [appoinmentId, setAppointmentId] = useState();

    async function fetchData(){
       try {
        const userId = sessionStorage.getItem('userId')
        const data= await  userProfilehistoryList(userId);
        setMedicalHistory(data);
        
       } catch (error) {
        console.log(error);
       }
    }

    useEffect(()=> {
        fetchData();
    },[])


    function handleClick(appId){
      setTrigger(true);
      setAppointmentId(appId);

    }
  return (

    <div>
        <div className="mt-3 ml-[98px]">
        <h1 className="text-3xl font-bold mb-2">उपचार विवरण</h1>
        <hr className="w-[91%] mb-3" />

        <table className="table table-striped table-hover w-[91%]">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">बिरामीको नाम</th>
              <th scope="col">उपचार मिति</th>
              <th scope="col">दर्ता</th>
            </tr>
          </thead>
          <tbody>
            {medicalHistory.map((value, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>
                  <button onClick={() => handleClick(value.appointmentId)}>
                    {value.name}
                  </button>
                </td>
                <td>
                  <button onClick={() => handleClick(value.appointmentId)}>
                    {value.appointmentDate}
                  </button>
                </td>
                <td>
                  <button onClick={() => handleClick(value.appointmentId)}>
                    {value.category}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <UserMedicalInfo statuse={getTrigger} appointmentId={appoinmentId} setTrigger={setTrigger}/>
      
    </div>
  )
}

export default UserMedicalHistory
