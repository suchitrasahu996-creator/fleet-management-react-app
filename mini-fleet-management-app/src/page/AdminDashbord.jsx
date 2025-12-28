import React, { useState } from "react";


function AdminDashbord() {
const [fleets,setFleets]=useState([]);
const [Form,setForm]=useState({
    RegNo:"",
    category:"",
    Driver:"",
    Status:"Available",

});
const handleChange=(e)=>{
    setForm ({Form,[e.target.name]:e.target.value });
};




    const addFleet=()=>{
    if(!Form.RegNo || !Form.category || !Form.Driver){
        alert ("All Fields are Required");
        return;

    }
}




  return (
    <div>
        <h2>Admin Dashboard</h2>
        <div>
            <h3>Add Fleet</h3>
            <input name="RegNo" placeholder="Vechicle Reg No" value={Form.RegNo} onChange={handleChange}/>
            <selec>
                <option value="">Selecte from the below Category</option>
                <option>Auto</option>
                <option>Car</option>
                <option>Truck</option>
                <option>Bus</option>
            </selec>
            <input name="Driver" placeholder="Driver Name" value={Form.Driver} onChange={handleChange}/>
            <select name="Status" value={Form.Status} onChange={handleChange}>
                <option>Available</option>
                <option>Unavailable</option>

            </select>
            <button onClick={addFleet}>ADD FLEET</button>

        </div>
      
    </div>
  )
}

export default AdminDashbord;
