
let studyTasks = JSON.parse(localStorage.getItem("studyTasks")) || [];

function saveTasks() {
    localStorage.setItem("studyTasks", JSON.stringify(studyTasks));
}

const taskForm = document.getElementById("taskForm");

taskForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const task = document.getElementById("task").value;
    const subject = document.getElementById("subject").value;
    const date = document.getElementById("date").value;
    const priority = document.getElementById("priority").value;

    const studyTask = {
    id: Date.now(),
    task,
    subject,
    date,
    priority,
    completed: false
};

studyTasks.push(studyTask);
saveTasks();


    displayTask(studyTask);

    taskForm.reset();
});


function displayTask(studyTask) {

    const taskList = document.getElementById("taskList");

    const taskCard = document.createElement("div");

    taskCard.className = "task-card";

    taskCard.innerHTML = `
    <div class="task-info">
        <h3>${studyTask.task}</h3>
        <p>Subject: ${studyTask.subject}</p>
        <p>Date: ${studyTask.date}</p>
        <p class="priority">Priority: ${studyTask.priority}</p>
    </div>
`;


    // Complete button
    const completeButton = document.createElement("button");
    completeButton.textContent = "Complete";
    completeButton.className = "complete-btn";

    completeButton.addEventListener("click", function() {
    taskCard.classList.toggle("completed");

    const taskIndex = studyTasks.findIndex(task => task.id === studyTask.id);

    studyTasks[taskIndex].completed = !studyTasks[taskIndex].completed;

    saveTasks();
    updateProgress();
});



    // Delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-btn";

    deleteButton.addEventListener("click", function() {
    studyTasks = studyTasks.filter(task => task.id !== studyTask.id);

    saveTasks();
    taskCard.remove();
    updateProgress();
    showEmptyMessage();
});

    // Group buttons together
    const taskActions = document.createElement("div");
    taskActions.className = "task-actions";
    
    taskActions.appendChild(completeButton);
    taskActions.appendChild(deleteButton);
    
    taskCard.appendChild(taskActions);


    if (studyTask.completed) {
    taskCard.classList.add("completed");
    }

    taskList.appendChild(taskCard);
    updateProgress();
    showEmptyMessage();

}


function updateProgress() {

    const taskCards = document.querySelectorAll(".task-card");

    const completedTasks = document.querySelectorAll(".task-card.completed");

    const totalTasks = taskCards.length;

    const completedCount = completedTasks.length;

    document.getElementById("progress").textContent =
        `${completedCount} completed / ${totalTasks} tasks`;

}


function showEmptyMessage() {

    const taskList = document.getElementById("taskList");

    const existingMessage = document.querySelector(".empty-message");

    const taskCards = document.querySelectorAll(".task-card");


    // If there are NO tasks
    if (taskCards.length === 0) {

        if (!existingMessage) {

            const message = document.createElement("p");

            message.className = "empty-message";

            message.textContent =
                "No tasks yet. Add your first study task!";

            taskList.appendChild(message);

        }

    }

    // If there ARE tasks
    else {

        if (existingMessage) {

            existingMessage.remove();

        }

    }

}


studyTasks.forEach(displayTask);
updateProgress();
showEmptyMessage();

const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(button => {
    button.addEventListener("click", function() {
        const filter = button.dataset.filter;

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const taskCards = document.querySelectorAll(".task-card");

        taskCards.forEach(card => {
            const isCompleted = card.classList.contains("completed");

            if (filter === "all") {
                card.style.display = "flex";
            } else if (filter === "pending") {
                card.style.display = isCompleted ? "none" : "flex";
            } else if (filter === "completed") {
                card.style.display = isCompleted ? "flex" : "none";
            }
        });
    });
});