'use client'

import { useState } from "react"

export default function Map4() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [cidade, setCidade] = useState('')

    return (
        <div className="flex flex-col">
            <h1 className="text-center mb-10">Funções 02</h1>

            <div className="flex flex-col gap-5 w-96 mx-auto">
                <input 
                    type="text" 
                    placeholder="Digite seu nome"  
                    className="p-2 rounded-md text-black"
                    onChange={ e => setNome(e.target.value) }
                />
                <p>Seu nome: {nome} </p>
                
                <input 
                    type="text" 
                    placeholder="Digite seu email" 
                    className="p-2 rounded-md text-black"
                    onChange={ e => setEmail(e.target.value) }
                />
                <p>Seu email: {email}</p>

                <select className="p-2 rounded-md text-black" 
                    value={cidade} onChange={ e => setCidade(e.target.value) }>
                    <option value="">Selecione uma cidade</option>
                    <option value="Belo Horizonte">Belo Horizonte</option>
                    <option value="Sao Paulo"     >Sao Paulo</option>
                    <option value="Rio de Janeiro">Rio de Janeiro</option>
                </select>
                <p>Seu cidade: {cidade}</p>

                <button className="p-2 bg-green-600 rounded-md">Cadastrar</button>
            </div>
        </div>
    )
}