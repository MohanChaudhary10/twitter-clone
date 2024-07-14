import { useState } from "react";
import { usePostContext } from "../store/store";
import { Post } from "./Post";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const { postData } = usePostContext();
  return (
    <>
      {postData.length === 0 ? <LoadingSpinner /> : postData.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
};

export default PostList;
