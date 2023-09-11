import styled from "styled-components";

export const Container = styled.div`
margin:0;
box-sizing: border-box;
min-height:100vh;
width:100%;
justify-content:center;
align-items:center;
color: #767676;
background-color:white;
font-size:15px;
display: flex;
`

export const AllContainer = styled.div`
height:auto;
width:auto;
box-shadow: 6px 4px 6px 2px rgba(171,195,211,0.75);
-webkit-box-shadow: 6px 4px 6px 2px rgba(171,195,211,0.75);
-moz-box-shadow: 6px 4px 6px 2px rgba(171,195,211,0.75);
border:1px solid #abc3d3;
@media (max-width : 600px){
    box-shadow: none;
-webkit-box-shadow: none;
-moz-box-shadow:none;
border: none;
}
`

export const BoxContainer1 = styled.div`
height:auto;
width:100%;
background-color:beige;
display:flex
`

export const BoxContainer = styled.div`
height:auto;
width:auto;
`


export const Box1 = styled.div`
height:auto;
width:100%;
background-color:#047cd2;
color:#87d1ef;
padding:34px;

p{
    margin-top:1Opx;
    margin-bottom: 10px
};
`

export const Box1Header = styled.div`
height:auto;
width:auto;
color:#87d1ef;
padding:4px;
border-bottom:1px solid gray;
margin-bottom:10px;

h1{
    color:white;
   font-size:35px;
   margin-bottom:10px;
   margin-top:0px
   
};

h2{
    color:white; 
    font-weight:normal;
    margin-top:0px
};

p{
    margin-bottom:10px
};

div{
    display: flex;
    align-content:center;
    align-items:center;
 
};


img{
    width:30px;
    height:auto;
    margin-bottom:10px

};
`


export const Box2 = styled.div`
height:auto;
width:400px;
background-color:#1b93d6;
justify-content: center;
align-content: center;
display:flex;
align-items:center;
color: white;
font-size:22px;

img{
    width:180px;
    height:auto
};

@media (max-width : 600px){
display:none
};
`





