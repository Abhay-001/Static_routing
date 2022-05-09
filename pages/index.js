import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Next JS Pre-rendering</h1>
      <Link href="/users">
        <a>User</a>
      </Link>
      <Link href="/posts">
        <a> Posts</a>
      </Link>
    </>
  );
}
