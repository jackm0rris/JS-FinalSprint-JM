fetch('./sprint.json')
  .then(response => response.json())
  .then(data => {
    // Loop through an array in the JSON data
    data.forEach(students => {
      console.log(getFullName(students));
      console.log(getAge(students));
      console.log(getYear(students));
      console.log(getMajor(students));
      console.log(getGradYear(students));
    });
    var outputDiv = document.getElementById('output');

    // Check if the container exists
    if (outputDiv) {
      // Loop through an array in the JSON data
      data.forEach(student => {
        // Create a paragraph element for each student's information
        var paragraph = document.createElement('p');
        
        // Set the text content of the paragraph using the functions
        paragraph.textContent = `Hello, my name is ${getFullName(student)}, I am ${getAge(student)} years old and I'm majoring in ${getMajor(student)} in my ${getYear(student)} year. My expected graduation date is ${getGradYear(student)}.`;

        // Append the paragraph to the output container
        outputDiv.appendChild(paragraph);
      });
    } else {
      console.error('Output div not found.');
    }
  })
  
    .catch(error => {
        // Handle any errors that occur while fetching the file
        console.error(error);
    });

    function getFullName(students) {
        return `${students.fname} ${students.lname}`;
    }

    function getAge(students) {    
        return `${students.age}`;
    }

    function getYear(students) {
        return `${students.year}`;
    }

    function getMajor(students) {
      return `${students.major}`;
    }

    function getGradYear(students) {
      return `${students.gradyear}`;
    }

  