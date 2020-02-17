import React, { useState } from 'react';

function FormAddTodo(props) {
	const [text, setText] = useState('');

	let formHandler = e => {
		e.preventDefault();
		props.add(text);
		setText('');
	};

	let inputHandler = e => setText(e.target.value);
	return (
		<form class="form-inline" onSubmit={formHandler}>
			<div class="form-group">
				<input
					type="text"
					class="form-control mx-sm-3"
					placeholder="i want to do ..."
					value={text}
					onChange={inputHandler}
				/>
				<button type="submit" class="btn btn-primary">
					add
				</button>
			</div>
		</form>
	);
}
export default FormAddTodo;
