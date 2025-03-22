
function ButtonCalculator({ children, numberPressed }) {

    return (
      <>
        <button onClick={() => numberPressed(children)} type="button">{ children }</button>
      </>
    )
  }
  
  export default ButtonCalculator
  