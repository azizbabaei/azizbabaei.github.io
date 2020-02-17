import React, { useState } from 'react';
import EditTodo from './EditTodo';

function Todo(props) {
	const { item } = props;
	const [edit, setEdit] = useState(false);
	let editHandler = text => {
		props.edit(item.key, text);
		setEdit(false);
	};
	return (
		<>
			{!edit ? (
				<div class="col-6 mb-2">
					<div class="d-flex justify-content-between align-items-center border rounded p-3">
						<div>{item.text}</div>
						<div>
							<button
								btn-success
								type="button"
								class={`btn btn-sm mr-1 ${
									!item.done ? 'btn-success' : 'btn-warning'
								}`}
								onClick={() => props.done(item.key)}
							>
								{item.done ? 'undone' : 'done'}
							</button>
							<button
								type="button"
								class="btn btn-info btn-sm mr-1"
								onClick={() => setEdit(true)}
							>
								edit
							</button>
							<button
								type="button"
								class="btn btn-danger btn-sm "
								onClick={() => props.delete(item.key)}
							>
								delete
							</button>
						</div>
					</div>
				</div>
			) : (
				<EditTodo text={item.text} edit={editHandler} />
			)}
		</>
	);
}

export default Todo;
