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
    console.log(formData)
};

return(
    <form onSubmit = {handleSubmit}>
        <input 
        type = "text" 
        value = {formData.name}
        ref={userNameRef} />

        <input 
        type = "email" 
        name ="email" 
        value = {formData.email}
        ref={emailRef} />

        <input 
        type = "submit" 
        name="password" 
        value = {formData.password}
        ref={passwordRef} />
    </form>
);

 };

export default RegistrationForm;