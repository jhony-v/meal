import Container from 'shared/styled/Container'
import FlexContainer from 'shared/styled/FlexContainer'
import Smooth from 'shared/styled/Smooth'
import { useTheme } from 'emotion-theming'
import { Link } from 'react-router-dom'
import Text from 'shared/styled/Text'
import Span from 'shared/styled/Span'
import { jsx } from "@emotion/core"
/**@jsx jsx*/

const HeaderLink = ({ to, icon: IconLink, children, selected, ...props }) => {
    let theme = useTheme();
    let selectedColor = selected && {
        css: { color: theme.colors.primary }
    }
    let selectedColorContainer = selected && {
        css: {
            background: "rgba(230,60,90,.08)",
            borderRadius: "20px",
            padding: "10px 20px"
        }
    }

    return (
        <Link to={to}>
            <Smooth>
                <FlexContainer justify="center" {...selectedColorContainer}>
                    <IconLink {...selectedColor} />
                    <Container margin="0 0 0 10px">
                        <Text size="small2" weight {...selectedColor} ><Span>{children}</Span></Text>
                    </Container>
                </FlexContainer>
            </Smooth>
        </Link>
    );
}

export default HeaderLink;