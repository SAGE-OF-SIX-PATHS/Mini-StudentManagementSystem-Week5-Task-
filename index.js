// Array where all students are stored.
const studentArray = [];

// BASE CLASS called Student.
class Student {
          #name;
          #yearOfAdmission;
          #departmentNo;
          #uniqueID;
          #grades = [];

          constructor(name, yearOfAdmission, departmentNo, uniqueID) {
                    this.#name = name;
                    this.#yearOfAdmission = yearOfAdmission;
                    this.#departmentNo = departmentNo;
                    this.#uniqueID = uniqueID;
          }

          // Getters, as I learnt from Livinus that Getters can access private properties.
          get name() {
                    return this.#name;
          }

          get yearOfAdmission() {
                    return this.#yearOfAdmission;
          }

          get departmentNo() {
                    return this.#departmentNo;
          }

          get uniqueID() {
                    return this.#uniqueID;
          }

          get grades() {
                    return this.#grades;
          }

          // Method to add grades
          addGrade(course, score) {
                    if (score >= 0 && score <= 100) {
                              this.#grades.push({ course, score });
                    } else {
                              console.log("Invalid score. Student's total score must be between 0 and 100.");
                    }
          }

          // Method to calculate the average grade
          calculateAverageGrade() {
                    if (this.#grades.length === 0) {
                              return 0;
                    }
                    const totalScore = this.#grades.reduce((acc, gradeEntry) => acc + gradeEntry.score, 0);
                    return Math.round(totalScore / this.#grades.length);
          }
}

// AddStudent Class
class AddStudent extends Student {
          constructor(name, yearOfAdmission, departmentNo, uniqueID) {
                    super(name, yearOfAdmission, departmentNo, uniqueID);
          }

          createProfile() {
                    const registrationNumber = `${this.yearOfAdmission}-${this.departmentNo}-${this.uniqueID}`;
                    console.log(`Student profile created successfully, Congratulations ${this.name}, you are now a student of UNIZIK 🎉:
        Dear ${this.name}, Your Registration Number is, ${registrationNumber}\n Login to your student profile with your Registration Number and UniqueID to access your student portfolio.`);
                    studentArray.push(this); // Add student to the array
                    studentArray.push(this.name);
          }
}

// ViewStudentDetails Class
class ViewStudentDetails extends Student {
          constructor(name, yearOfAdmission, departmentNo, uniqueID) {
                    super(name, yearOfAdmission, departmentNo, uniqueID);
          }
          //I passed a uniqueID to the viewDetails method to view the details of a student, that means that without that unique ID, the student's details can not be viewed, in one of the instances of the viewDetails method, I will pass an unexisting uniqueID, And it will display 'Not Found' .
          static viewDetails(uniqueID) {
                    const student = studentArray.find(stu => stu.uniqueID === uniqueID);
                    if (student) {
                              console.log(`Student Details:
        Name: ${student.name}
        Registration Number: ${student.yearOfAdmission}-${student.departmentNo}-${student.uniqueID}
        Year of Admission: ${student.yearOfAdmission}
        Department: ${student.departmentNo}
        Unique ID: ${student.uniqueID}
        Grades: ${JSON.stringify(student.grades)}`);
                    } else {
                              console.log("Student not found.");
                    }
          }
}

// CalculateAverageGrade Class
class CalculateAverageGrade extends Student {
          constructor(name, yearOfAdmission, departmentNo, uniqueID) {
                    super(name, yearOfAdmission, departmentNo, uniqueID);
          }

          static calculateAverage(uniqueID) {
                    const student = studentArray.find(stu => stu.uniqueID === uniqueID);
                    if (student) {
                              const average = student.calculateAverageGrade();
                              console.log(`Average Grade for ${student.name}: ${average}`);
                    } else {
                              console.log("Student not found.");
                    }
          }
}

// instantiations of the above classes and methods
const student1 = new AddStudent("Livinus", 2010, 514, 118);
student1.createProfile();
student1.addGrade("Math101", 80);
student1.addGrade("GST110", 71);
ViewStudentDetails.viewDetails(118);
CalculateAverageGrade.calculateAverage(118);


const student2 = new AddStudent("Tappi", 2017, 110, 2);
student2.createProfile();
student2.addGrade("CSC 211", 69);
student2.addGrade("MAT251", 74);
ViewStudentDetails.viewDetails(2);
CalculateAverageGrade.calculateAverage(2);

const student3 = new AddStudent("Amara", 2019, 614, 223);
student3.createProfile();
student3.addGrade("CSC311", 67);
student3.addGrade("CSC351", 79);
ViewStudentDetails.viewDetails(223);
CalculateAverageGrade.calculateAverage(223);

const student4 = new AddStudent("Nzubechukwu", 2020, 10, 143);
student4.createProfile();
student4.addGrade("CSC421", 71);
student4.addGrade("CSC451", 83);
ViewStudentDetails.viewDetails(143);
CalculateAverageGrade.calculateAverage(143);

console.log("All Students:", studentArray); // Display all students in the array