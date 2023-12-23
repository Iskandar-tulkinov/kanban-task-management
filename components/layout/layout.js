const boardNames = boardData.boards.map(board => board.name);
const boardList = document.querySelector('.board-list');
boardNames.forEach((name, index) => {
    const listItem = document.createElement('li');
    listItem.classList.add('board__item', 'min-w-[240px]', 'flex', 'items-start', 'cursor-pointer', 'transition', 'duration-400', 'ease-in-out', 'focus:outline-none', 'hover:opacity-80', 'text-[#828FA3]', 'text-[15px]');

    const linkButton = document.createElement('button');
    linkButton.classList.add('btn', 'board__link', 'w-full', 'flex', 'items-center', 'gap-4', 'text-[#828fa3]', 'rounded-r-full', 'text-left', 'font-plus-jakarta-sans', 'font-bold', 'cursor-pointer', 'transition', 'duration-200', 'ease-in-out', 'text-[15px]', 'focus:outline-none', 'hover:bg-btn-hover-color', 'hover:text-primary-color', 'md:mr-6', 'p-[10px]', 'md:py-4', 'px-6');
    linkButton.setAttribute('href', '#');
    linkButton.setAttribute('itemid', index + 1); // Adding 1 to match the itemid in your example

    const icon = document.createElement('i');
    icon.classList.add('icon-layout', 'block', 'mr-4');

    const span = document.createElement('span');
    span.classList.add('block', 'pr-15');
    span.textContent = name;

    linkButton.appendChild(icon);
    linkButton.appendChild(span);

    listItem.appendChild(linkButton);

    boardList.appendChild(listItem);
});
const numberOfCreatedBoards = document.querySelector('.numberOfCreatedBoards');
numberOfCreatedBoards.textContent = `ALL BOARDS (${boardList.length})`;
boardList.addEventListener('click', (event) => {
  const target = event.target.closest('.board__link');

  if (target) {
      // Remove 'active' from all board__links
      document.querySelectorAll('.board__link').forEach(link => link.classList.remove('active'));
      // Add 'active' to the clicked board__link
      target.classList.add('active');
  }
});
const currentBoard = document.querySelector('.currentBoard');
boardList.addEventListener('click', (event) => {
    const target = event.target.closest('.board__link');

    if (target) {
        const boardIndex = parseInt(target.getAttribute('itemid')) - 1; // Subtracting 1 to match the array index
        const activeBoard = boardData.boards[boardIndex];
        currentBoard.textContent = activeBoard.name;
    }
});
const statusName = document.querySelector('.status__name');
const numberOfTasks = document.querySelector('.numberOfTasks');
// boardList.addEventListener('click', (event) => {
//     const target = event.target.closest('.board__link');

//     if (target) {
//         const boardIndex = parseInt(target.getAttribute('itemid')) - 1;
//         const activeBoard = boardData.boards[boardIndex];
//         const activeColumn = activeBoard.columns[activeBoard.selectedColumn];
//         statusName.textContent = activeColumn.name;
//         numberOfTasks.textContent = `${activeColumn.tasks.length} tasks`;
//     }
// });
const cardTitle = document.querySelector('.card__title');
const numbeOfSubtasks = document.querySelector('.numbeOfSubtasks');
// boardList.addEventListener('click', (event) => {
//     const target = event.target.closest('.board__link');

//     if (target) {
//         const boardIndex = parseInt(target.getAttribute('itemid')) - 1;
//         const activeBoard = boardData.boards[boardIndex];
//         const activeColumn = activeBoard.columns[activeBoard.selectedColumn];
//         const activeTask = activeColumn.tasks[activeBoard.selectedTask];

//         cardTitle.textContent = activeTask.title;
//         numbeOfSubtasks.textContent = `${activeTask.subtasks.filter(subtask => subtask.isCompleted).length} of ${activeTask.subtasks.length} subtasks`;
//     }
// });

//


boardList.addEventListener('click', (event) => {
    const target = event.target.closest('.board__link');

    if (target) {
        const boardIndex = parseInt(target.getAttribute('itemid')) - 1;
        const activeBoard = boardData.boards[boardIndex];
        const activeColumn = activeBoard.columns[activeBoard.selectedColumn];
        const activeTask = activeColumn.tasks[activeBoard.selectedTask];

        cardTitle.textContent = activeTask.title;

        const completedSubtasks = activeTask.subtasks.filter(subtask => subtask.isCompleted).length;
        numbeOfSubtasks.textContent = `${completedSubtasks} of ${activeTask.subtasks.length} subtasks`;

        // Now, you can access individual subtasks and their status if needed
        activeTask.subtasks.forEach((subtask, index) => {
            // Access subtask.title and subtask.isCompleted as needed
            console.log(`Subtask ${index + 1}: ${subtask.title}, Completed: ${subtask.isCompleted}`);
        });
    }
});

// const cardTitle = document.querySelector('.card__title');
// const numbeOfSubtasks = document.querySelector('.numbeOfSubtasks');

boardList.addEventListener('click', (event) => {
    const target = event.target.closest('.board__link');

    if (target) {
        const boardIndex = parseInt(target.getAttribute('itemid')) - 1;
        const activeBoard = boardData.boards[boardIndex];
        const activeColumn = activeBoard.columns[activeBoard.selectedColumn];
        const activeTask = activeColumn.tasks[activeBoard.selectedTask];

        cardTitle.textContent = activeTask.title;

        const completedSubtasks = activeTask.subtasks.filter(subtask => subtask.isCompleted).length;
        numbeOfSubtasks.textContent = `${completedSubtasks} of ${activeTask.subtasks.length} subtasks`;

        // Clear the existing card content
        const card = document.querySelector('.card');
        card.innerHTML = '';

        // Create a new paragraph element for each subtask and append it to the card
        activeTask.subtasks.forEach((subtask, index) => {
            const subtaskParagraph = document.createElement('p');
            subtaskParagraph.textContent = `Subtask ${index + 1}: ${subtask.title}, Completed: ${subtask.isCompleted}`;
            card.appendChild(subtaskParagraph);
        });
    }
});
