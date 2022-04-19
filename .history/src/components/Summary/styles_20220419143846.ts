import styled from "styled-components";


export const Container = styled.div`

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: -10rem;

    div {
        background: var(--shape);
        padding: 1.5rem 2rem;
        border-radius: 0%.25rem;
        color: var(--text-tittle);

        header {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        strong {
            margin-top: 1rem;
            fonts
        }
    }

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