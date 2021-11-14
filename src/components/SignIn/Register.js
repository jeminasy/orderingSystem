import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

const Container = styled.div`
    min-height: 100vh;
    position: relative;
    
    z-index: 0;
    overflow: hidden;
    padding: 5rem calc((100vw - 1500px)/2);
    background: #F8F1EB;
    color: #000;
`

const FormWrap = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width:400px){
        height: 80%;
    }
`

const Icon = styled.div`
    margin-left: 32px;
    margin-top: 32px;
    text-decoration: none;
    color: #000;
    font-weight: 700;
    font-size: 32px;

    @media screen and (max-width: 480){
        margin-left: 16px ;
        margin-top: 8px;
    }
`
const FormContent = styled.div`
    height:auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const Form = styled.form`
    background: #D8B99C;
    max-width:550px;
    height: auto;
    width: 100%;
    z-index:1;
    display: grid;
    margin: 0 auto;
    padding: 80px 37px;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.9);

    @media screen and (max-width:400px){
        padding: 32px 32px;
    }
`

const FormH1 = styled.h1`
    margin-bottom: 40px;
    color: #000;
    font-weight: 600;
    font-size: 25px;
    text-align:center;
`
const FormLabel = styled.label`
    margin-bottom: 8px;
    font-size: 14px;
    color: #000;
`
const FormInput = styled.input`
    padding: 16px 16px;
    margin-bottom: 20px;
    border:none;
    border-radius: 4px;
`
const FormButton = styled.button`
    background: #B2784A;
    padding: 16px 0;
    border: none;
    border-radius: 4px;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
`

const Text1 = styled.span`
    text-align:center;
    margin-top:24px;
    color:#000;
    font-size: 14px;

`

const Text = styled(Link)`
    text-align:center;
    margin-top:15px;
    color:#000;
    font-size: 14px;

`


const LogIn = () => {
    const [user, setUser] = useState({
        lastName: '',
        firstName: '',
        email: '',
        password: '',
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setUser(prevInput => {
            return{
                ...prevInput,
                [name]: value,
            }
        });
        console.log(user);
    }

    function addUser(event) {
        event.preventDefault();
        const newUser = {
            lastName: user.lastName,
            firstName: user.lastName,
            email: user.email,
            password: user.password
        }
        axios
            .post('http://localhost:5000/user/register/create', newUser)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
            .catch(err => console.log(err));

        // console.log(newUser);
    }

    var check = function() {
        if (document.getElementById('password').value === document.getElementById('confirm_password').value) {
            document.getElementById('message').style.color = 'green';
            document.getElementById('message').innerHTML = 'Password match';
        } else {
            document.getElementById('message').style.color = 'red';
            document.getElementById('message').innerHTML = 'Password does not match';
        }
    }

    return (
        <>
        <Container>
            <FormWrap>
                <Icon></Icon>
                <FormContent>
                    {/* <Form action="/user/createUser"> */}
                    <Form>
                        <FormH1>Create an Account</FormH1>
                        <FormLabel htmlFor="for">Last Name</FormLabel>
                        <FormInput 
                            onChange={handleChange}
                            type="text"  
                            name="lastName"
                            value={user.lastName}
                            placeholder="Enter your last name" 
                            required/>
                        <FormLabel htmlFor="for">First Name</FormLabel>
                        <FormInput 
                            onChange={handleChange}
                            type="text"  
                            name="firstName"
                            value={user.firstName}
                            placeholder="Enter your first name"
                            required/>
                        <FormLabel htmlFor="for">Email</FormLabel>
                        <FormInput 
                            onChange={handleChange}
                            type="email"  
                            name="email"
                            value={user.email}
                            placeholder="Enter your email" 
                            required/>
                        <FormLabel htmlFor="for">Set Password</FormLabel>
                        <FormInput 
                            onChange={handleChange}
                            type="password"  
                            name="password"
                            value={user.password}
                            id="password"
                            placeholder="Enter your password" 
                            onKeyUp={() => check()}
                            required/>
                        <FormLabel htmlFor="for">Confirm Password</FormLabel>
                        <FormInput 
                            type="password"  
                            name="confirm_password"
                            id="confirm_password"
                            placeholder="Confirm your password" 
                            onKeyUp={() => check()}
                            required/>
                        <span id="message"> </span><br />

                        <button onClick={addUser}>Sign Up</button>
                        {/* <FormButton onclick={addUser}>Sign Up</FormButton> */}
                        {/* <FormButton type="submit">Sign Up</FormButton> */}
                        <Text1>Already have an account?</Text1>
                        <Text to="/user/login">Login Here</Text>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>  
        </>
    )
}

export default LogIn
