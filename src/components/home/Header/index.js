import React from "react";
import { HeaderWrapper, Title, Wrapper,Text, BtnWrapper, Btn, Container } from "./style";
const Header = () => {
    return(
        <HeaderWrapper>
            <Container>
            <Wrapper>
                <Title>
                The performance media agency  <br/>chosen by the world's best firms
                </Title>
                <Text>
                We exist to get you more sales and conversions through really smart execution <br/>across today's most relevant digital channels.
                </Text>
            </Wrapper>
            <BtnWrapper>
                <Btn>SERVICEs</Btn>
            </BtnWrapper>
            </Container>
        </HeaderWrapper>
    )
}
export default Header;