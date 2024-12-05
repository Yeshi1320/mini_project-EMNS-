function fetchStudents() {
    // Get selected course ID
    const courseDropdown = document.getElementById('courseDropdown');
    const courseId = courseDropdown.value;

    // Clear the existing student list
    const studentList = document.getElementById('studentList');
    studentList.innerHTML = '';

    if (courseId) {
        // Fetch students for the selected course
        fetch(`http://localhost:3000/students/${courseId}`)
            .then(response => response.json())
            .then(data => {
                // Append each student to the list
                data.forEach(student => {
                    const listItem = document.createElement('li');
                    listItem.textContent = `${student.student_id} - ${student.student_name}`;
                    studentList.appendChild(listItem);
                });
            })
            .catch(error => {
                console.error('Error fetching students:', error);
            });
    }
}
