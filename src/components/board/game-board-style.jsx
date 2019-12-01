import styled from 'styled-components';

const GameBoardStyle = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const RestartButton = styled.div`
    position: absolute;
    z-index: 1;
    top :0;
    right: 0;
`;

export {GameBoardStyle, RestartButton};