
function Operation({ numberList }) {
    return (
      <>
        <div className="flex justify-start p-5 ps-0">
            <p>{ numberList.map((number, index) => { 
                return index !== numberList.length-1 ? number+"+" : number;
            })
            }</p>
        </div>
      </>
    )
  }
  
  export default Operation
  