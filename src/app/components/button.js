"use client"

import styled from 'styled-components';
const Button = styled.button`
drop-shadow(0px 2px 3px rgba(0, 0, 0, 0.24));
background-color:#D9D9D9A1;
color: #0092DD;
font-family: Inter;
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: normal;
width:20%;
`;

export default function funBotao(props){

    return(

        <Button>

         {props.name}

        </Button>

    )

}