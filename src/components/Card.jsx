import React, {useRef, useState} from "react";


    function Card({user}) {

        const [isEdit,setIsEdit]=useState(false);
        const [isSave,setIsSave] = useState(false);
        const inputName = useRef()

        let handleEdit=(event)=>{


            setIsEdit(true);



        }

        let handleSave =()=>{
           user.name=inputName.current.value;


           setIsEdit(false);
        }

    return (
        <>

            {
                !isEdit && (
                    <div className="card-container asdasd"><p>{user.name}</p>
                        <div className="confirmed-container">
                            <label htmlFor="confirmed-box">Confirmed</label>
                            <input type="checkbox" id="confirmed-box " checked={user.confirmed}/>
                        </div>
                        <div className="card-buttons">
                            <button onClick={handleEdit} className="change-buttons edit-btn">Edit</button>
                            <button className="change-buttons remove-btn">Remove</button>
                        </div>
                    </div>
                )
            }

            {
                isEdit && (
                    <div className="card-container asdasd">
                        <input type="text" defaultValue={user.name} ref={inputName}/>
                        <div className="confirmed-container">
                            <label htmlFor="confirmed-box">Confirmed</label>
                            <input type="checkbox" id="confirmed-box " checked={user.confirmed}/>
                        </div>
                        <div className="card-buttons">
                            <button onClick={handleSave} className="change-buttons edit-btn">Save</button>
                            <button className="change-buttons remove-btn">Remove</button>
                        </div>
                    </div>
                )
            }

        </>
    )
}


export default Card