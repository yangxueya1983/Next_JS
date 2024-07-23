import Image from "next/image";
import Link from 'next/link'
 
export default function BlocksPage() {
  return (
    <div>
      <h1>Hello Blocks</h1>
      <Link href="/blocks/create">Create</Link>
    </div>
      
  );
}