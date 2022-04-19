import styled from "styled-components";


export const Container = styled.div`

    display: grid;
    grid-remplate-columns: repeat(3,1);

    .incomeImg {
        width: 50px;

        filter: invert(1);
        transform: rotate(180deg);
    }

    .outcomeImg {
        width: 50px;
    }

    .totalImg {
        width: 50px;
    }
`;