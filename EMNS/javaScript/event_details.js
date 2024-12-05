const studentTableBody = document.getElementById('student-table').getElementsByTagName('tbody')[0];

        document.getElementById('add-btn').addEventListener('click', () => {
            const date = prompt("Enter event's Date:");
            const eventList = prompt("Enter event's Event List:");
            const venue = prompt("Enter event's Venue:");

            if (date && eventList && venue) {
                const newRow = studentTableBody.insertRow();
                newRow.innerHTML = `
                    <td>${date}</td>
                    <td>${eventList}</td>
                    <td>${venue}</td>
                    <td>
                        <button class="btn" onclick="editEvent(this)">Edit</button>
                        <button class="delete-btn" onclick="deleteEvent(this)">Delete</button>
                    </td>
                `;
            } else {
                alert("All fields are required!");
            }
        });

        function editEvent(button) {
            const row = button.parentNode.parentNode;
            const date = prompt("Edit event's Date:", row.cells[0].innerText);
            const eventList = prompt("Edit event's Event List:", row.cells[1].innerText);
            const venue = prompt("Edit event's Venue:", row.cells[2].innerText);

            if (date && eventList && venue) {
                row.cells[0].innerText = date;
                row.cells[1].innerText = eventList;
                row.cells[2].innerText = venue;
            } else {
                alert("All fields are required!");
            }
        }

        function deleteEvent(button) {
            if (confirm("Are you sure you want to delete this event?")) {
                const row = button.parentNode.parentNode;
                studentTableBody.deleteRow(row.rowIndex - 1);
            }
        }

        document.getElementById('search-button').addEventListener('click', () => {
            const searchTerm = document.getElementById('search-bar').value.toLowerCase();
            const rows = studentTableBody.getElementsByTagName('tr');

            for (let i = 0; i < rows.length; i++) {
                const dateCell = rows[i].cells[0].innerText.toLowerCase();
                const eventCell = rows[i].cells[1].innerText.toLowerCase();

                if (dateCell.includes(searchTerm) || eventCell.includes(searchTerm)) {
                    rows[i].style.display = '';
                } else {
                    rows[i].style.display = 'none';
                }
            }
        });

        // Footer button logic
        document.getElementById('backButton').addEventListener('click', () => {
            history.back();
        });

        document.getElementById('forwardButton').addEventListener('click', () => {
            history.forward();
        });