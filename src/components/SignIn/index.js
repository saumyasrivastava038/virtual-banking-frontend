import React from 'react'
import {Container, FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FromInput, FormButton, Text} from "./SignInElements"

const SignIn = () => {
    return (
        <>
        <Container>
            <FormWrap>
                <Icon to= "/">dolla</Icon>
                <FormContent>
                    <Form action = "#">
                        <FormH1>SignIn to your account</FormH1>
                        <FormLabel htmlFor= "for">Email</FormLabel>
                        <FromInput type = "email" requied />
                        <FormLabel htmlFor= "for">Password</FormLabel>
                        <FromInput type = "password" requied />
                        <FormButton type = "submit" requied >Submit</FormButton>
                        <Text>Forgot Password</Text>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
            
        </>
    )
}

export default SignIn
