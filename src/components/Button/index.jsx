import styled from "styled-components";

const Button = styled.button`    
    width: 163px;
    height: 50px;
    color: black;
    background-color: white;
    border: solid 1.3px black;
    border-radius: 5px;
    text-align: center;
    font-family: Roboto;
    font-weight: 500;    
    cursor: pointer;
    transition: border-color 0.3s, color 0.3s;
    outline:none;

    &:hover {
        border-color: ${props => props.borderColor};
        color: ${props => props.textColor};
    }
`

export default Button;