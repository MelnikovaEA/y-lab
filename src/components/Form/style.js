import styled from "styled-components";

export const Form = styled.form`
    padding: 4rem;
    border-radius: 8px;
    background-color: mintcream;
`

export const Header = styled.h1`
    font-size: 34px;
    margin-top: 0;
`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 20px;
`

export const Button = styled.button`
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    color: #403A4B;
    background-color: #F8F1FF;
    cursor: pointer;
    transition: border-color 0.25s;
    width: 40%;
    box-sizing: border-box;

    &:hover,
    &:focus {
        -webkit-box-shadow: 0 0 8px 0 rgba(105, 68, 214, 1);
        box-shadow: 0 0 8px 0 rgba(105, 68, 214, 1);
        outline: none;
    }

    &[data-disabled="false"] {
        opacity: 0.5;
        border-color: transparent;
        outline: none;
        
        &:hover,
        &:focus{
            box-shadow: none;
        }
    }
`

export const MessageContainer = styled.div`
    height: 40px;
    min-height: 40px;
    padding: 2px
`

export const ErrorMessage = styled.p`
    color: crimson;
    font-size: 18px;
    font-weight: 700;
`
export const SuccessMessage = styled.p`
    color: lightseagreen;
    font-size: 18px;
    font-weight: 700;
`
