import styled  from "styled-components";

const HeaderStyled = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
console.log("header");
export const Header = () => {
    return(
    <HeaderStyled>
        <div>INPUT</div>
        <span>BELL</span>
        <span>IMAGE</span>
    </HeaderStyled>
    )
}