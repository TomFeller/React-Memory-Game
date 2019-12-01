import styled from 'styled-components';

const SquareStyle = styled.div`
    display: flex;
    width: ${props => props.width};
    border: ${props => `4px solid ${props.borderColor}`};
    background: ${props => props.background};
    &:after {
        content: '';
        padding-bottom: ${props => props.width};
    }
`;

export {SquareStyle};