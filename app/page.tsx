import Image from "next/image";
import Counter from "../Components/Counter";
import GithubParagraph from "@/Components/GithubParagraph";  
import Store from "../Components/Store";
export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
       
  
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
           Next.js - Laughery
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            This page showcases the 3 required components for the assignment
            
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <main style={{padding: "2rem"}}>
                     <h1>Counter Demo</h1>
                     <Counter incrementAmount={1} buttonColor="blue" />
                     <Counter incrementAmount={2} buttonColor="green" />
                 </main>
                 
          
        </div>
        
        <main style={{padding: "2rem"}}>
                    <h1>Project Overview</h1>
                    <GithubParagraph />
                </main>

                <section style={{padding: "2rem"}}>
                  <Store />
                </section>
      </main>
    </div>
  );
}
