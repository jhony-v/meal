import React from 'react'
import FlatList from 'shared/components/dumbs/FlatList'
import { UICard } from 'shared/styled/UICard'
import { UIContainer } from 'shared/styled/UIContainer'
import { UIFlexContainer } from 'shared/styled/UIFlexContainer'
import { UIAvatarImage } from 'shared/styled/UIAvatar'
import { UIText } from 'shared/styled/UIText'
import { UITextSmooth } from 'shared/styled/UIText'
import { IoMdGlobe } from 'react-icons/io'

const NewsFeedContainer = () => {
	return (
		<FlatList
			data={Array(10).fill(0)}
			render={(e,i) => (
				<UICard key={i} m="2em auto 4em" >
					<UIFlexContainer>
						<UIAvatarImage src="https://cdn.pixabay.com/photo/2015/03/17/14/05/sparkler-677774__340.jpg"/>
						<UIContainer ml="10px">
						<UIText weight block variant="grayDark1">Jhon Doe Stark</UIText>
						<UITextSmooth size="small3">Publicado hace 13 horas <IoMdGlobe size={12} /></UITextSmooth>
						</UIContainer>
					</UIFlexContainer>
					<UIContainer my="1em">
						<UITextSmooth size="small2">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ad libero cum voluptatem nihil commodi qui recusandae, dolores quas impedit. Explicabo, ipsa assumenda nam cumque nesciunt mollitia minus ut officia!
						</UITextSmooth>
					</UIContainer>
				</UICard>
			)}
		/>
	)
}

export default NewsFeedContainer
