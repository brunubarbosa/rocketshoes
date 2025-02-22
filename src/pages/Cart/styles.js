import styled from 'styled-components';

import { darken } from 'polished';

export const Container = styled.div`
    padding: 30px;
    background: #fff;
    border-radius: 4px;

    footer {
        margin-top: 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        button {
            background: #7159C1;
            color: #FFF;
            border: 0;
            border-radius: 4px;
            padding: 12px 20px;
            font-weight: bold;
            text-transform: uppercase;
            transition: background .2s;

            &:hover {
                background: ${darken(.03, '#7159C1')};
            }
        }
    }
`;

export const ProductTable = styled.table`
    width: 100%;

    thead th {
        color: #999;
        text-align: left;
        padding: 12px;
    }

    tbody td {
        padding: 12px;
        border-bottom: 1px solid #EEE;
    }

    img {
        height: 100px;
    }

    strong {
        color: #333;
        display: block;
    }

    span {
        display: block;
        margin-top: 5px;
        font-size: 18px;
        font-weight: bold;
    }

    div {
        display: flex;
        align-items: center;

        input {
            border: 1px solid #DDD;
            border-radius: 4px;
            color: #666;
            padding: 6px;
            width: 50px;
        }
    }

    button {
        background: none;
        border: 0;
        padding: 6px;
    }
`;
export const Total = styled.div`
    display: flex;
    align-items: baseline;

    span {
        color: #999;
        font-weight: bold;
    }

    strong {
        font-size: 28px;
        margin-left: 5px;
    }
`;