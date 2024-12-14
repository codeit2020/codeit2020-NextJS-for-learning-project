import PostDetails from "@/app/components/postDetails";
import { Suspense } from "react";
import "./loaderStyle.css";
export default function singlePost({ params }) {
  const postId = params.postId;
  const loadingJSX = (
    <div className="loading-page">
      <div className="spinner"></div>
      <p>Loading...</p>
    </div>
  );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingRight: "100px",
        paddingLeft: "100px",
      }}
    >
      <h1>Post details</h1>
      <Suspense fallback={loadingJSX}>
        <PostDetails postId={postId} />
      </Suspense>
    </div>
  );
}
