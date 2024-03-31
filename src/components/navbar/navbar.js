import { Ancor, Container, DrawerBtn, LinkWrapper, Logo, NavRight, NavbarWrapper, TopLink, TopWrapper, } from "./style";



const Navbar = () => {
  

    return(
        <NavbarWrapper>
            <TopWrapper>
      <TopLink>
      Join AdVenture in Brooklyn on April 17th for DOLAH Conference—Tickets on Sale!
      </TopLink>
            </TopWrapper>
            <Container>
            <Logo>google ads</Logo>
            <NavRight>
                <LinkWrapper>
                    <Ancor>services</Ancor>
                    <Ancor>results</Ancor>
                    <Ancor>about</Ancor>
                    <Ancor>training</Ancor>

                </LinkWrapper>
                <DrawerBtn>
                        <div>
                        GET A PROPOSAL
                        </div>
                </DrawerBtn>
            </NavRight>
             
            </Container>
        </NavbarWrapper>
    )
}
export default Navbar;