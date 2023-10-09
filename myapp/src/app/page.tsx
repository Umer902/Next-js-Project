import Button from "@/components/Button"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-5">
        <h1 className="font-bold text-4xl text-yellow-700">
        THIS IS MY FIRST NEXT JS PROJECT
      </h1>
      <p>
      I'm delighted to share that I successfully completed my first Next.js project. I received invaluable guidance 
      from my exceptional teacher, Mr. Jahanzaib Tayyab, a highly skilled full-stack developer at PIAIC.
       His mentorship played a pivotal role in my project's success.    
       </p>
      <Button/>
      <div>
      I'm thrilled to announce the successful completion of my inaugural Next.js project. This accomplishment 
      fills me with immense pride and excitement. The experience has been invaluable, paving the way for future 
      endeavors in web development. I look forward to many more engaging projects in the world of Next.js.

      </div>      
      <Button/>
      <div>
      I deeply apologize for not providing a proper time for our meeting. My oversight was unintentional, and 
      I value our friendship immensely. Your understanding and patience mean the world to me. 
      Let's reschedule and make our time together memorable. Thank you for being an amazing friend.
      </div>
      <Button/>
    </main>
  )
}