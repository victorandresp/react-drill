

function Result({ numberList }) {
  return (
    <>
        <div className="flex justify-end mb-2">
            <p className="font-bold text-xl">{ 
            numberList.length > 0 ? 
            numberList.reduce((a, b) => a+b) : 0
            
            }</p>
        </div>
    </>
  )
}

export default Result
