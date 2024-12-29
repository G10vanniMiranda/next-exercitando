import { ListaProduto } from "@/models/listaProduto";

export default function Map2() {

    const dataProduto = [
        "Iphone",
        "Notebook",
        "Teclado",
        "Mouse",
        "Monitor",
        "Cadeira",
        "Microfone"
    ]

    return (

        <div className="flex flex-col justify-center items-center">
            <h1>Arrays starting - Map2</h1>

            <h3>Exercicio 5. Arrays</h3>

            <div>

                {dataProduto.map(item => {
                    return <ListaProduto key={item} produto={item} />
                })}

            </div>
        </div>
    );
}
