import { useState } from "react";

const RegistrationForm = () => {
    return <h1>Registration Form</h1>
}

const RegistationForm = () =>{
    const userNameRef = useRef();
    const  emailRef = useRef();
    const passwordRef = useRef();

const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Username:', userNameRef.current.value);
    console.log('Email:', emailRef.current.value);  
    console.log('Password', passwordRef.current.value);
};

return(
    <form onSubmit = {handleSubmit}>
        <input type = "text" name="username" ref={userNameRef} />

        <input type = "email" name="email" ref={emailRef} />

        <input type = "submit" name="password" ref={passwordRef} />
    </form>
);

 };

export default RegistrationForm;