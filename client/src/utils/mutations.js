import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
        token
        user {
            username
            password
            email
        }
    }
    }
`

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`

export const FLHA_FORM_SUBMIT = gql`
    mutation submitFLHA($jobLocation: String!, $supervisor: String!, $primarytask: String!) {
    submitFLHA(
        jobLocation: $jobLocation, 
        supervisor: $supervisor, 
        primarytask:$primarytask
        
        ) {
    jobLocation
    supervisor
    primarytask
  }
}
`;
