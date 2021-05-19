import Styled from 'styled-components';

const StyleSolidButton = Styled.button` 
    border: none;
    box-shadow: 1px 1px 6px 3px rgba(0,0,0,0.1);
    border-radius: 5px;
    background: white;
    color: black;
    padding: 7px 10px;
    font-size: 16px;
    margin: -3px;
    min-width: 66px;
    transition: 0.75s all ease-in-out;
    &:hover {
        cursor: pointer;
        opacity: 0.75;
    }
    ${props => props.type === 'primary' &&`
        background: #3535b2;
        color: white;
    ` }
    ${props => props.type === 'danger' &&`
        background: #b21111;
        color: white;
    ` }
    ${props => props.type === 'success' &&`
        background: #46a3446;
        color: purple;
    ` }
    ${props => props.type === 'search' &&`
        background: #46a3446;
        color: purple;
    ` }
`;
export default StyleSolidButton;