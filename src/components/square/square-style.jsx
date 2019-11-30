import styled from 'styled-components';

const SquareStyle = styled.div`
    display: flex;
    width: ${props => props.width};
    border: 1px solid #000;
    background: ${props => props.background};
    &:after {
        content: '';
        padding-bottom: ${props => props.width};
    }
`;

export {SquareStyle};