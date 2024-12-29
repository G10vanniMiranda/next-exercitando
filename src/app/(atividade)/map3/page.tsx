'use client'
export default function Map3() {

    function saldar(){
        alert('Boa noite')
    }

    function calcular(){
        let a = 27
        let b = 49
        let total = a + b
        alert('total ' + total)
    }

    return (
        <div className="flex flex-col gap-4 items-center justify-center">
            <h1>Função 1</h1>
            <button className="p-2 px-10 bg-green-700 rounded-md" onClick={saldar}>Teste</button>
            <button className="p-2 px-10 bg-green-700 rounded-md" onClick={calcular}>Calcular</button>
        </div>
    )
}