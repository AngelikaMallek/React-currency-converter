import styled from "styled-components";

export const StyledForm = styled.form`
    margin: 20px;
    padding: 20px;
    background-color: white;
    border-radius: 10px;
`;

export const Fieldset = styled.fieldset`
    padding: 20px;
    padding-bottom: 0;
`;

export const Legend = styled.legend`
    background-color: teal;
    padding: 10px;
    border-radius: 10px;
    color: white;
`;

export const Field = styled.input`
    padding: 8px;
    border: solid 1px #bbb;
    border-radius: 5px;
    max-width: 300px;
    width: 100%;
    font-size: 15px;
    text-align: center;
`;

export const Text = styled.span`
    display: inline-block;
    padding: 8px;
    max-width: 300px;
    width: 100%;
    font-size: 15px;
`;

export const Button = styled.button`
    padding: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    width: 100%;
    color: white;
    background-color: teal;
    border-radius: 10px;
    border: 0;

    &:hover {
        background-color: hsl(180, 100%, 30%);
        cursor: pointer;
    }
`;

export const Loading = styled.p`
    color: teal;
`;

export const Error = styled.p`
    color: crimson;
`;