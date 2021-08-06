import React from "react";

import { useState, useEffect, useRef } from "react";
import { ITodo } from "../../types/data";
import { TodoList } from "../to-do-list/to-do-list";

const App: React.FC = () => {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState<ITodo[]>([]);

  const changeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const hundleKeyDown: React.KeyboardEventHandler<HTMLInputElement>  = (e) => {
    if(e.key === 'Enter'){
      addTodo();
    }
  }

  const inputRef = useRef<HTMLInputElement>(null);
  const addTodo = () => {
    if (value) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          title: value,
          complete: false,
        },
      ]);
      setValue("");
    }
  };
  return (
    <div>
      <div>
        <input
          value={value}
          onChange={changeHandler}
          type="text"
          ref={inputRef}
          onKeyDown={hundleKeyDown}
        />
        <button  onClick={addTodo}>Add</button>
      </div>
      <TodoList items={todos} />
    </div>
  );
};

export default App;
