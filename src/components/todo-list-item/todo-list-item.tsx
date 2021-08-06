import {ITodo} from '../../types/data'

interface ITodoItem extends ITodo {
}

const TodoItem: React.FC<ITodoItem> = (props) => {
    const {title, complete} = props
    return (
    <div>
        <span>{title}</span>
        <input type="checkbox" />
    </div>
    
    )
}

export {TodoItem}