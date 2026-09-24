// const taskForm = document.getElementById("taskForm");

// taskForm.addEventListener("submit", function(event) {

//     event.preventDefault();

//     const task = document.getElementById("task").value;
//     const subject = document.getElementById("subject").value;
//     const date = document.getElementById("date").value;
//     const priority = document.getElementById("priority").value;

//     console.log("Task:", task);
//     console.log("Subject:", subject);
//     console.log("Date:", date);
//     console.log("Priority:", priority);

// });

//2nd time
// const taskForm = document.getElementById("taskForm");

// taskForm.addEventListener("submit", function(event) {

//     event.preventDefault();

//     const task = document.getElementById("task").value;
//     const subject = document.getElementById("subject").value;
//     const date = document.getElementById("date").value;
//     const priority = document.getElementById("priority").value;

//     const studyTask = {
//         task: task,
//         subject: subject,
//         date: date,
//         priority: priority,
//         completed: false
//     };

//     console.log(studyTask);
//     displayTask(studyTask);

// });

// function displayTask(studyTask) {

//     const taskList = document.getElementById("taskList");
    

//     console.log("Task list found:", taskList);

//     const taskCard = document.createElement("div");
//     taskCard.className = "task-card";

//     taskCard.innerHTML = `
//         <h3>${studyTask.task}</h3>
//         <p>Subject: ${studyTask.subject}</p>
//         <p>Date: ${studyTask.date}</p>
//         <p>Priority: ${studyTask.priority}</p>
//     `;

//     // 3️⃣ Complete button
//     const completeButton = document.createElement("button");
//     completeButton.textContent = "Complete";
//     completeButton.className = "complete-btn";

//     completeButton.addEventListener("click", function() {
//         taskCard.classList.toggle("completed");
//         updateProgress();
//     });

//     taskCard.appendChild(completeButton);

//     // 5️⃣ Delete button
//     const deleteButton = document.createElement("button");
//     deleteButton.textContent = "Delete";
//     deleteButton.className = "delete-btn";

//     deleteButton.addEventListener("click", function() {
//     taskCard.remove();
//     updateProgress();
//     showEmptyMessage();

// });

//     taskCard.appendChild(deleteButton);
//     taskList.appendChild(taskCard);

//     // 3️⃣ Update progress after adding task
//     updateProgress();
// }

// function updateProgress() {

//     const taskCards = document.querySelectorAll(".task-card");
//     const completedTasks = document.querySelectorAll(".task-card.completed");

//     const totalTasks = taskCards.length;
//     const completedCount = completedTasks.length;

//     document.getElementById("progress").textContent =
//         `${completedCount} completed / ${totalTasks} tasks`;
// }


// function showEmptyMessage() {

//     const taskList = document.getElementById("taskList");

//     if (taskList.children.length === 0) {
//         taskList.innerHTML = `
//             <p class="empty-message">
//                 No tasks yet. Add your first study task!
//             </p>
//         `;
//     }
// }

// showEmptyMessage();



//3rd time
const taskForm = document.getElementById("taskForm");

taskForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const task = document.getElementById("task").value;
    const subject = document.getElementById("subject").value;
    const date = document.getElementById("date").value;
    const priority = document.getElementById("priority").value;

    const studyTask = {
        task: task,
        subject: subject,
        date: date,
        priority: priority,
        completed: false
    };

    console.log(studyTask);

    displayTask(studyTask);

    taskForm.reset();
});


function displayTask(studyTask) {

    const taskList = document.getElementById("taskList");

    console.log("Task list found:", taskList);

    const taskCard = document.createElement("div");

    taskCard.className = "task-card";

    taskCard.innerHTML = `
        <h3>${studyTask.task}</h3>
        <p>Subject: ${studyTask.subject}</p>
        <p>Date: ${studyTask.date}</p>
        <p>Priority: ${studyTask.priority}</p>
    `;


    // Complete button
    const completeButton = document.createElement("button");

    completeButton.textContent = "Complete";

    completeButton.className = "complete-btn";

    completeButton.addEventListener("click", function() {

        taskCard.classList.toggle("completed");

        updateProgress();

    });

    taskCard.appendChild(completeButton);


    // Delete button
    const deleteButton = document.createElement("button");

    deleteButton.textContent = "Delete";

    deleteButton.className = "delete-btn";

    deleteButton.addEventListener("click", function() {

        taskCard.remove();

        updateProgress();

        showEmptyMessage();

    });

    taskCard.appendChild(deleteButton);


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


showEmptyMessage();