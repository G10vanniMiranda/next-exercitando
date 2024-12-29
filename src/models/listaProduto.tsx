export function ListaProduto( props : any ){
    return(
        <div className="text-white rounded-md flex justify-between 
            items-center w-64 bg-black p-2
            
        ">
            <span>+ { props.produto } </span>
            <div className="flex gap-2">
                <button className="bg-green-600 w-7 h-7 rounded-md">+</button>
                <button className="bg-red-600 w-7 h-7 rounded-md">-</button>
            </div>
        </div>
)
}