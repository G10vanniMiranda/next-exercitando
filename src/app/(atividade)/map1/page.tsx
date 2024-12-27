import { ListaNome } from "@/models/listaNome";

export default function Map1() {

    const listaNome = [
        "Rebeca",
        "João",
        "Paula",
        "Pedro",
        "Maria",
        "Paulo",
        "Sebastião"
    ]

    return (

        <div className="flex flex-col gap-4 bg-black h-screen w-screen items-center">
            <h1>Arrays starting</h1>

            <h3 className="bg-green-600 rounded-md py-2 px-[77]">Exercicio 4. Arrays</h3>

            <div className="w-72 bg-zinc-800 rounded-md gap-3 h-96 flex flex-col items-center p-5">

                { listaNome.map( nome => {
                    return <ListaNome key={nome} nome={nome} />
                  })
                }

            </div>
        </div>
    );
}
