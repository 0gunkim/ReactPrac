import React from "react";
import styled from "styled-components";

const HdStyle = styled.div`
    border: 1px solid #323232;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    height: 50px;
`;

const Header = () => {
    return (
        <HdStyle>
        <h1>
            투두 리스트
        </h1>
        <div>
            리엑트
        </div>
        </HdStyle>
        
    )
}

export default Header;