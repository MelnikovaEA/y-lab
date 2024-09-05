import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`

export const Input = styled.input`
    width: 100%;
    height: 40px;
    font-weight: 400;
    font-size: 13px;
    color: #403A4B;
    padding: 20px 16px 9px;
    background-color: #F8F1FF;
    border-radius: 8px;
    border: none;
    box-sizing: border-box;

    &:focus {
        -webkit-box-shadow: 0 0 8px 0 rgba(105, 68, 214, 1);
        box-shadow: 0 0 8px 0 rgba(105, 68, 214, 1);
        outline: none;
    }

    &[data-error="true"] {
        -webkit-box-shadow: 0 0 8px 0 crimson;
        box-shadow: 0 0 8px 0 crimson;
        outline: none;
    }
`

export const Label = styled.label`
    align-self: flex-start;
    font-size: 12px;
    padding-bottom: 2px;
`

export const InputMessageContainer = styled.div`
    min-height: 20px;
    align-items: center;
`

export const InputError = styled.p`
    margin: 0;
    color: #ff5e5e;
    font-size: 12px;
    padding-top: 2px;

    &[data-error="true"] {
        display: block;
    }
`