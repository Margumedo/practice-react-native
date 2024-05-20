
export function BasicTypes(){

    const name = 'Maicol';
    const addTwoNumbers = (num1: number, num2: number): number => num1 + num2   
    

    return(    
        <>
            <h2>Basic Types</h2>
            <span>{name}</span>
            <span>{addTwoNumbers(5,5)}</span>
        </>
    )
}