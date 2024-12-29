import Link from "next/link";

export function Nav() {
    return(
        <nav className="flex gap-10 items-center justify-center h-20">
            <Link className="bg-zinc-800 p-2 rounded-md hover:bg-violet-500" href="/">Home</Link>
            <Link className="bg-zinc-800 p-2 rounded-md hover:bg-green-500"  href="/map1">Projeto 1</Link>
            <Link className="bg-zinc-800 p-2 rounded-md hover:bg-amber-500"  href="/map2">Projeto 2</Link>
            <Link className="bg-zinc-800 p-2 rounded-md hover:bg-sky-500"  href="/map3">Função 01</Link>
            <Link className="bg-zinc-800 p-2 rounded-md hover:bg-red-500"  href="/map4">Função 02</Link>
        </nav>
    )
}