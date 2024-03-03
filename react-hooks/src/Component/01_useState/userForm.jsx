import { useState } from "react"
import userFormStyle from './userForm.module.css';


function UserForm() {
    const [firstName, setFirstName] = useState("S")
    const [lastName, setLasttName] = useState("B")

    return (
        <>
            <div className={userFormStyle.userForm}>
                <div className="fname" >
                    <input 
                        type="text" 
                        value={firstName} 
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>
                <br />
                <div className="lname">
                    <input 
                        type="text" 
                        value={lastName}
                        onChange={(e) => setLasttName(e.target.value)}
                    />
                </div>
                <h3>Hello, {firstName} {lastName}</h3>
            </div>
        </>
    )
};


export default UserForm;