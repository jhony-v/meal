import React from 'react'
import UIButton from 'shared/styled/UIButton'
import UIContainer from 'shared/styled/UIContainer'
import UIFlexContainer from 'shared/styled/UIFlexContainer'
import UIText from 'shared/styled/UIText'
import UITextSmooth from 'shared/styled/UITextSmooth'

function MyDescription() {
    return (
        <UIFlexContainer flexDir="column" align="stretch">
            <UIContainer>
                <UIContainer margin="1em 0">
                    <UIText weight size="big">My description</UIText>
                </UIContainer>
                <UIContainer margin="1em 0">
                    <UITextSmooth size="small">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam labore, numquam recusandae qui commodi distinctio consequatur deleniti architecto veniam sit praesentium cumque.</UITextSmooth>
                </UIContainer>
            </UIContainer>
            <UIButton>editar</UIButton>
        </UIFlexContainer>
    )
}

export default MyDescription;

