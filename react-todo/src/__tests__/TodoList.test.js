import TodoList from "./TodoList";

test ("renders TodoList component with initial tasks", () => {
    render (<TodoList />);

    expect (screen.getByText(/TodoList/i)).toBeInTheDocument();

    expect(screen.getByText(/Task 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Task 2/i)).toBeInTheDocument();
    expect(screen.getByText(/Task 3/i)).toBeInTheDocument();
  });   
  
  export default TodoList.test