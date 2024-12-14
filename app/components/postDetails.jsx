export default async function singlePostDetails({ postId }) {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000); // Set the timeout to 2000ms (2 seconds)
  });
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
    {
      next: {
        revalidate: 120,
      },
    }
  );
  const data = await response.json();
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
      <h2 style={{ background: "white", borderRadius: "5px", color: "black" }}>
        {data.title}
      </h2>
      <p style={{ background: "black", borderRadius: "5px", color: "white" }}>
        {data.body}
      </p>
    </div>
  );
}
