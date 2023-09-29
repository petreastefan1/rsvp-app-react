import React from "react";


    function Card({user,ceva,text,sdsa}) {


    return (
            <div className="card-container asdasd"><p>{user.name}</p>
                <div className="confirmed-container"><label htmlFor="confirmed-box">Confirmed</label>
                    <input type="checkbox" id="confirmed-box " checked={user.confirmed}/>
                </div>
                <div className="card-buttons">
                    <button className="change-buttons edit-btn">Edit</button>
                    <button className="change-buttons remove-btn">Remove</button>
                </div>
            </div>
    )
}


export default Card