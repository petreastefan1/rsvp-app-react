import {useRef, useState} from "react";
import Card from  "./Card"
function Home() {


    let [users,setUsers]=useState([

        {
            name:"test1",
            id:1,
            confirmed:true
        },
        {
            name:"test2",
            id:2,
            confirmed:false
        },
        {
            name:"test3",
            id:3,
            confirmed:false
        },
        {
            name:"test4",
            id:4,
            confirmed:false
        }

    ])
    const inputRef = useRef();

    let handleAdd=(event)=>{

     let newUser =   {
            name:inputRef.current.value,
            id: Math.floor(Math.random()*100)
        }


        setUsers((prev)=>{

            return [...prev,newUser];
        })

    }




    return (
        <section className="page-container">
            <div className="header-container">
                <div className="top-colour">
                    <h1>RSVP</h1>
                    <p>My school app</p>
                </div>
                <div className="title-checkbox-container">
                    <div className="invitees-title">
                        <p>Invitees</p>
                    </div>
                    <div className="hide-checkbox">
                        <label for="hide-box">Hide those who haven't responded</label>
                        <input type="checkbox" id="hide-box"/>
                    </div>
                </div>
                <div className="search-container">
                    <input ref={inputRef} type="textbox" placeholder="Invite someone" id="name-inpt" />
                    <button onClick={handleAdd} id="submit-btn">Submit</button>

                </div>
            </div>
            <section className="invitees-container">

                {
                    users.map(element=>{

                         return <Card user={element} text={"asdasdasd"} key={element.id} />;
                    })
                }

            </section>
        </section>

    )
}


export default Home