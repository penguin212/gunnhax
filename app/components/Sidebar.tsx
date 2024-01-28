import { Rubik } from 'next/font/google';

const rubik = Rubik({subsets: ['latin'], weight: "500"});

export default function Sidebar(){
    return (
        <>
        <Sidebarinput>
            <button className="text-buttons rounded-full text-xl py-4 px-10 bg-white">
                New Game
            </button>
            <button className="text-buttons rounded-full text-xl py-4 px-10 bg-white">
                How To Play
            </button>
        </Sidebarinput>
        </>
    )
}

function Sidebarinput(props: any){
    return (
        <>
            <div className={rubik.className}>
                <section className = "flex flex-col gap-20 justify-center items-center h-screen bg-sidebar w-1/3 absolute right-0">
                    {props.children}
                </section>
            </div>
        </>
    )
}