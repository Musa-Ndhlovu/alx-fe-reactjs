import TodoList from "./TodoList";
 import "@testing-library/react"

test ("renders TodoList component with initial tasks", () => {
    render (<TodoList />);

    expect (screen.getByText(/TodoList/i)).toBeInTheDocument();

    expect(screen.getByText(/Task 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Task 2/i)).toBeInTheDocument();
    expect(screen.getByText(/Task 3/i)).toBeInTheDocument();
  });   
  
  test("allows users to add a new task", () => {
      render(<TodoList />);
     
      const input = screen.getByPlaceholderText(/add a new task/i);
      const addButton = screen.getByText(/Add Task/i);
    
      fireEvent.change(input, { target: { value: "New Task" } });
       
      fireEvent.click(addButton);
     
      expect(screen.getByText(/New Task/i)).toBeInTheDocument();
    });
  
  export default TodoList.test