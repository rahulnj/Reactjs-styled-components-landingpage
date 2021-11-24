import { StyledHeader, Logo, Nav, Image } from "./styles/Header.Styled"
import { Container } from "./styles/Container.Styled"
import { Button } from "./styles/Button.Styled"
import { Flex } from "./styles/Flex.Styled"

export default function Header() {
    return (
        <StyledHeader>
            <Container>
                <Nav>
                    <Logo src='./images/logo.svg' />
                    <Button>Sign Out</Button>
                </Nav>
                <Flex>
                    <div>
                        <h1>Build the Community where you can connect each other</h1>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some
                            form, by injected humour, or randomised words which don't look even slightly believable. If you are
                            going to use apassage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                        <Button bg=' rgba(153, 0, 255, 0.959);' color='#fff'>
                            Get Started For Free
                        </Button>
                    </div>
                    <Image src='./images/illustration-mockups.svg' alt='' />
                </Flex>
            </Container>
        </StyledHeader>
    )
}
