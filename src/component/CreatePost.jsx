import { useRef } from "react";
import { usePostContext } from "../store/store";

const CreatePost = ({ SetSelectedTab }) => {
  const { addPost } = usePostContext();
  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const reachedElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const reached = reachedElement.current.value;
    const tags = tagsElement.current.value.split(" ");
    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionsElement.current.value = "";
    reachedElement.current.value = "";
    tagsElement.current.value = "";
    addPost(userId, postTitle, postBody, reactions, reached, tags);
    SetSelectedTab("Home");
  };

  return (
    <>
      <form className="form-bx" onSubmit={handleSubmit}>
        <h3 className="tt fs-2 text-center mb-4">
          <strong>Create A Post !!</strong>
        </h3>
        <div className="row g-3">
          <div className="col-6">
            <input
              type="text"
              placeholder="Enter User Id"
              ref={userIdElement}
              required
            />
          </div>
          <div className="col-6">
            <input
              type="text"
              placeholder="How many people have reached this post?"
              ref={reachedElement}
              required
            />
          </div>
          <div className="col-6">
            <input
              type="text"
              placeholder="How many people liked this post?"
              ref={reactionsElement}
              required
            />
          </div>
          <div className="col-6">
            <input type="text" placeholder="Enter Hashtag" ref={tagsElement}
            required />
          </div>
          <div className="col-12">
            <input
              type="text"
              placeholder="Enter Post Title"
              ref={postTitleElement}
              required
            />
          </div>
          <div className="col-12">
            <textarea
              cols="30"
              rows="3"
              placeholder="Tell More About It...."
              ref={postBodyElement}
              required
            ></textarea>
          </div>
          <div className="col-12">
            <input type="submit" value="Post" className="post-btn" />
          </div>
        </div>
      </form>
    </>
  );
};

export default CreatePost;
