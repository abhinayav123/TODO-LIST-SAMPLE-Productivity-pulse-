function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const taskList = document.getElementById('taskList');
        const completedList = document.getElementById('completedList');

        const li = document.createElement('li');
        const taskContent = document.createElement('span');
        taskContent.textContent = taskText;

        const removeBtn = document.createElement('button');
        removeBtn.classList.add('remove-btn');
        removeBtn.textContent = 'Remove';

        const completedBtn = document.createElement('button');
        completedBtn.classList.add('completed-btn');
        completedBtn.textContent = 'Completed';

        removeBtn.onclick = function () {
            li.remove();
            updateProgress();
        };

        completedBtn.onclick = function () {
            moveToCompleted(li);
            updateProgress();
        };

        li.appendChild(taskContent);
        li.appendChild(completedBtn);
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        taskInput.value = "";
        updateProgress();
    }
}

function moveToCompleted(taskElement) {
    const completedList = document.getElementById('completedList');
    const taskContent = taskElement.querySelector('span');

    // Mark as completed
    taskContent.classList.add('completed');

    // Move task to the Completed section
    completedList.appendChild(taskElement);

    // Update progress bar and quote
    updateProgress();
    updateQuote();
}

function updateProgress() {
    const totalTasks = document.querySelectorAll('#taskList li, #completedList li').length;
    const completedTasks = document.querySelectorAll('#completedList li').length;
    const progress = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

    document.getElementById('progressBar').style.width = progress + '%';
}

function updateQuote() {
    const quotes = [
        "Start where you are. Use what you have. Do what you can.",
        "Discipline is the bridge between goals and accomplishment.",
        "Each step forward is one closer to your goal.",
        "Productivity is never an accident.",
        "Mission complete. Now onto the next!"
    ];
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById('quoteText').textContent = randomQuote;
}

// Add via Enter key
document.getElementById('taskInput').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
