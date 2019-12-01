import styled from 'styled-components';

const MenuWrapper = styled.div`
    display: flex;
`;

const MenuItem = styled.div`
    flex: 1;
    padding: 50px 0;
    border: 2px solid;
    font-size: 30px;
    background-color: ${props => props.backgroundColor};
    font-weight: ${props => props.active ? 'bold' : 'normal'}
`;

export {MenuWrapper, MenuItem}