import React from 'react'

const TodoTable = ({todos}) => {

    if (todos.length === 0) return null;

    return(
        <div className="table-wrapper">
            <div className="table-box">
                <h2>My Todos</h2>
                <div className="table-scroll">
                    <table>
                        <thead>
                        <tr>
                            <th>Id</th>
                            <th>todo</th>
                            <th>Category</th>
                            <th>isComplete</th>
                        </tr>
                        </thead>
                        <tbody>
                            {todos.map((todos,index) => {
                                return (
                                    <tr key = {index} className={index%2 === 0?'odd':'even'}>
                                        <td>{index + 1}</td>
                                        <td>{todos.todo}</td>
                                        <td>{todos.category}</td>
                                        <td>{todos.isComplete}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default TodoTable;