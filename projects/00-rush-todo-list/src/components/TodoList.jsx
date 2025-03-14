import ListItem from "./ListItem"

function ToDoList({ items, onDeleteItem }) {

  return (
    <> 
    {
        items.map((item, index) =>{
          return  (
                <ListItem 
                    key={index}
                    text={item}
                    index={index}
                    onDeleteItem={onDeleteItem}
                />
            )
        })
    }
    </>
  )
}

export default ToDoList
