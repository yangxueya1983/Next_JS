import Link from 'next/link'
import '../../globals.css'
 
export default function CreateBlockPage() {
  return (
    <form>
        <h3 className='font-bold m-3'>Create a block</h3> 
        <div className="flex flex-col gap-4">
            <div className='flex'>
                <label htmlFor="title">Title</label>
                <input 
                className='border roundd p-2 w-full'
                type="text" name="title" id="title" />
            </div>
        </div>
        <div>
            <div className='flex'>
                <label htmlFor="code">Title</label>
                <textarea name="code" id="code" />
            </div>
        </div>
        <button type="submit">Create</button>
    </form>
  );
}