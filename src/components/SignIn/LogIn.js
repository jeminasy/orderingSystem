import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'


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
    height:100%auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const Form = styled.form`
    background: #D8B99C;
    max-width:450px;
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
    margin-bottom: 32px;
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

const Text = styled(Link)`
    text-align:center;
    margin-top:24px;
    color:#000;
    font-size: 14px;

`



const LogIn = () => {
    return (
        <>
        <Container>
            <FormWrap>
                <Icon></Icon>
                <FormContent>
                    <Form action="/user/login">
                        <FormH1>Sign in to your account</FormH1>
                        <FormLabel htmlFor="for">Email</FormLabel>
                        <FormInput type="email" required/>
                        <FormLabel htmlFor="for">Password</FormLabel>
                        <FormInput type="password" required/>
                        <FormButton type="submit">Sign In</FormButton>
                        <Text to="/">Forgot password?</Text>
                        <Text to="/user/register">Create Account</Text>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>  
        </>
    )
}

export default LogIn
