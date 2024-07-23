import Image from "next/image";
import Link from 'next/link'
 
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/blocks">Test Link</Link>
      <h1 className="text-c">Hello</h1>
      <p>{1+1}</p>
    </main>
  );
}
