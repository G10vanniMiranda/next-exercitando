
interface ButtonProps{
    nomeButton: string
    className?: string
    cor?: string
    icone?: string
}

export default function Button( { nomeButton, className, cor, icone } : ButtonProps  ){
    return(
        <button className={ ` bg-red-700 hover:bg-red-500 duration-300 cursor-pointer p-2 px-10 w-[120px] rounded-md  ${cor} ${className}`  } > 
            <img src={icone} alt={icone} />
            <span>{nomeButton}</span>
        </button>
    )
}