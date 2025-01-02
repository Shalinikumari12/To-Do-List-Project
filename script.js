// Select elements
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Add Task
addTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  const task = document.createElement('li');
  task.className = 'task';

  const taskContent = document.createElement('span');
  taskContent.textContent = taskText;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'X';
  deleteBtn.addEventListener('click', () => task.remove());

  task.appendChild(taskContent);
  task.appendChild(deleteBtn);
  taskList.appendChild(task);

  // Clear input field
  taskInput.value = '';

  // Mark as completed
  taskContent.addEventListener('click', () => {
    task.classList.toggle('completed');
  });
});
