import React, { useEffect, useState } from "react";
import { render, screen } from "@testing-library/react";


// import { render, screen } from "@testing-library/react";
export default function List(user) {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    await fetch("http://174.138.103.233/api/employees")
      .then((response) => response.json())
      .then((response) => setUsers(response))
      .catch((error) => console.log({ error }));
  };
  
  return (
    <div >
      <h3 className="header">USER LIST</h3>
      <table className="userList">
  <tr> 
 <th>First Name</th>
 <th>Last Name</th>
 <th>Gender</th>
 <th>Birthday</th>
 <th>E-Mail</th>
 <th>About</th>
</tr> 
 <div className="users">
        {users.map((user) => {
          return (
            <div className="userName" key={user.name} id = "list">
             <tr>
               <td>{user.firstName}</td>
               <td>{user.lastName}</td>
               <td>{user.gender}</td>
               <td>{user.birthday}</td>
               <td>{user.email}</td>
               <td>{user.about}</td>
             </tr>
              
            </div>
          );
        })}
      </div>
      </table>
      
     
    </div>
  );
}

