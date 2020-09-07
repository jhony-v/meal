import React from "react";
import InputCommentUser from "shared/components/smarts/InputComment/InputCommentUser";
import HomeWrapperAddExtra from "./HomeWrapperAddPostExtra";

const HomeWrapperAddPost = () => {
  return (
    <InputCommentUser
      avatar="https://cdn.pixabay.com/photo/2020/07/10/15/37/apple-5391076__340.jpg"
			maxLength={50}
			onSendMessage={(e : any)=>alert(e)}
    >
        <HomeWrapperAddExtra/>
    </InputCommentUser>
  );
};

export default HomeWrapperAddPost;
