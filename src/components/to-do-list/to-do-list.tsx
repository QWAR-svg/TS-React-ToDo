import { TodoItem } from "../todo-list-item/todo-list-item";
import { ITodo } from "../../types/data";

interface ITodoListProps {
  items: ITodo[];
}
const TodoList: React.FC<ITodoListProps> = (props) => {
  const { items } = props;
  return (
   
    <div>
      {items.map((item) => {
        return <TodoItem key={item.id} {...item} /> ;
      })}
      
      
    </div>
  
  );
};

export { TodoList };
