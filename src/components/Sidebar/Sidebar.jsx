import logo from "assets/logo.svg"
import styled from 'styled-components'
import { NavLink } from "react-router-dom"
import img1 from 'assets/img1.svg'
import img2 from 'assets/img2.svg'
import img3 from 'assets/img3.svg'
import img4 from 'assets/img4.svg'
import img5 from 'assets/img5.svg'
import img6 from 'assets/img6.svg'
import img7 from 'assets/img7.svg'
import img8 from 'assets/img8.svg'
import img9 from 'assets/img9.svg'
import {Card} from 'components/Card'

const StyledSidebar = styled.div`
  background-color: white ;
  height: 100vh;
  padding: 32px;
  .logo {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 54px;
  }
`;
const StyledNavItem = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 16px;
  font-weight: 500;
  line-height: 21px;
  color: #7A797D;
  margin-bottom: 25px;
  a {
    text-decoration: unset;
    color: #7A797D;
  }
`

const NavItem = ({text,path,image}) => {
  return (
    <StyledNavItem>
      <img src={image} alt="nav-icon" />
      <NavLink to={path}>{text}</NavLink>
    </StyledNavItem>
  )
}
console.log("sidebar");
export const Sidebar = () => {
  return (
    <StyledSidebar>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="nav">
          <NavItem text="Home" path="/" image={img1}></NavItem>
          <NavItem text="About" path="/about" image={img2}></NavItem>
          <NavItem text="Login" path="/login" image={img3}></NavItem>
        </div>
        <h3>PROFILE</h3>
        <br></br>
        <div className="nav">
          <NavItem text="My Portfolio" path="/portfolio" image={img4}></NavItem>
          <NavItem text="Wallet" path="/wallet" image={img5}></NavItem>
          <NavItem text="Favourites" path="/favourites" image={img6}></NavItem>
          <NavItem text="History" path="/history" image={img7}></NavItem>
          <NavItem text="Settings" path="/settings" image={img8}></NavItem>
        </div>
        <h3>OTHER</h3>
        <br></br>
        <NavItem text="Light Mode" path="/" image={img9}></NavItem>
        
        <Card title={"Revenue"} amount="5.00" percent={12.3}
         background="linear-gradient(228.89deg, #5429FF 1.12%, #BBAAFF 100%);"
         width="228px"
         height="220px"
         titleColor="white"
         >
         </Card>
    </StyledSidebar>
  )
}