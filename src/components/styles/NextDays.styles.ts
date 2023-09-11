import styled from "styled-components";


export const Box3 = styled.div`
height:auto;
width:100%;
background-color:white;
display:flex;
padding-top:10px;
padding-bottom:10px;

@media (max-width : 600px){
flex-wrap: wrap;
border-right: none;
padding-left: 30px;
padding-right:30px;
padding-bottom:0
};
`

export const Box3Container = styled.div`
width:100%;
height:auto;
padding:10px;
border-right:1px solid #87d1ef;
background-color:white;

&:last-child {
        border-right: none;
    };

div{
    display:flex;
    justify-content:center;
    align-items:center;
    align-content:center;
};

header{
    font-weight:bold;
    margin-bottom:10px;
    text-align:center;
};

p{
    margin-bottom:10px;
    text-align:center;
};

@media (max-width : 600px){
border-right: none;
border-bottom:1px solid #87d1ef;
&:last-child {
        border-bottom: none;
    }
}
`