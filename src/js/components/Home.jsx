import { useState } from 'react';
import Task from './Task';

const Home = () => {
	const [list, setList] = useState([{id: 1, task: 'Wash my hands'},{id: 2, task: 'Wash my card'}]);
	const [ inputValue, setInputValue ] = useState('');
	function deleteItem (id) {
		console.log(id);
		let newList = list; 
		newList = newList.filter((task)=> task.id !== id); 
		setList(newList);
		
	}
	const ToDoList = list.map((item)=> <Task title={item.task} onClick ={deleteItem} key={item.id} id={item.id}/>)

	return (
		<div className="container-list">
			<h1>TO DO LIST</h1>
			<div className="list">
				<form onSubmit={(e) => {
						e.preventDefault();
						let newList = list;
						let position = list.length;
						newList[position] = {id: position+1, task: inputValue}
						console.log(newList);
						setList(newList);
						setInputValue('')
					}}>
					<input type="text" placeholder='What needs to be done?' 
					onChange={(e)=> {
						console.log(e.target.value);
						setInputValue(e.target.value)
						}}
					value={inputValue}
					/>
				</form>
				{ToDoList}
				<span className='text-footer-list'>{`${list.length} item left`}</span>
			</div>
		</div>
	);
};

export default Home;