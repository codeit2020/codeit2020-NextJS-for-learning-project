import Link from "next/link";

export default async function posts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 120,
    },
  });
  const data = await response.json();

  const firstTen = data.slice(0, 10);

  const posts = firstTen.map((element) => {
    return (
      <div
        key={element.id}
        style={{
          margin: "20px",
          width: "60%",
          border: "2px solid teal",
          borderRadius: "10px",
        }}
      >
        <Link href={`/posts/${element.id}`}>
          <h1>{element.title}</h1>
          <hr />
          <p>{element.body}</p>
        </Link>
      </div>
    );
  });
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {posts}
    </div>
  );
}
