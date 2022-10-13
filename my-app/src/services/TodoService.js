
export const getAllTodos = async () => {

    const response = await fetch('/api2/todos');
    return await response.json();
}

