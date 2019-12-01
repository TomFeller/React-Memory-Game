import styled from 'styled-components';


const SquareStyle = styled.div`
    display: flex;
    width: ${props => props.width}%;
    height: ${props => props.height}vh;
    border: 1px solid #000;
    background: ${props => props.background};
    background-position: center center;
    background-size: cover; 
    position: relative;
    cursor: pointer;
    &:after {
        content: '';
        padding-bottom: ${props => props.width};
    }
    .mark {
        content: '2';
        position: absolute;
        // width: 15px;
        // height: 15px;
        padding: 3px 5px;
        top: 0;
        right: 0;
        background-color: ${props => props.borderColor};
        color: #fff
    }
    &:hover {
        opacity: 0.9;
    }
`;

export {SquareStyle};