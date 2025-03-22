import ButtonCalculator from "./ButtonCalculator"

function TableButtons() {
    const numbersPad = [1,2,3,4,5,6,7,8,9,0]
    return (
      <>
        <div class="grid grid-cols-3 gap-4">
            { numbersPad.map((number) => (<ButtonCalculator key={number}>{number}</ButtonCalculator>))}
            
        </div>
      </>
    )
  }
  
  export default TableButtons
  