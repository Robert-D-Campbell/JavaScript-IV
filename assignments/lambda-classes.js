// CODE here for your Lambda Classes
class Person {
  constructor(personAttr) {
    this.name = personAttr.name;
    this.age = personAttr.age;
    this.location = personAttr.location;
  }
  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}`;
  }
}
class Instructor extends Person {
  constructor(instAttr) {
    super(instAttr);
    this.specialty = instAttr.specialty;
    this.favLanguage = instAttr.favLanguage;
    this.catchPhrase = instAttr.catchPhrase;
  }
  demo(subject) {
    return `Today we are learning about ${subject}`;
  }
  grade(student, subject) {
    return `${student.name} receives a perfect score on ${subject}`;
  }
}
class Student extends Person {
  constructor(studentAttr) {
    super(studentAttr);
    this.previousBackground = studentAttr.previousBackground;
    this.className = studentAttr;
    this.favSubjects = studentAttr.favSubjects;
    this.grade = studentAttr.grade;
  }
  listsSubjects() {
    return `${this.favSubjects}`;
  }
  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}`;
  }
  sprintChallenge(subject) {
    return `${this.name} has begun sprint challenge on ${subject}`;
  }
  graduate() {
    if (this.grade >= 70) {
      return `Congratulations your grade is ${this.grade}, You're expected to graduate on time!`;
    } else {
      return `Your score is ${this.grade}, keep studying, I know you can do it!`;
    }
  }
}
class ProjectManager extends Instructor {
  constructor(pmAttr) {
    super(pmAttr);
    this.gradClassName = pmAttr.gradClassName;
    this.favInstructor = pmAttr.favInstructor;
  }
  standUp(channel) {
    return `${this.name} announces to ${channel}, @channel standby times!`;
  }
  debugsCode(student, subject) {
    return `${this.name} debugs ${student.name}'s code on ${subject}`;
  }
}

//Instructor Objects

const instructor1 = new Instructor({
  name: "Fred",
  age: 37,
  location: "Bedrock",
  favLanguage: "JavaScript",
  specialty: "Front-end",
  catchPhrase: "Dont forget the homies"
});
const instructor2 = new Instructor({
  name: "Bill",
  age: 23,
  location: "Las Vegas",
  favLanguage: "Python",
  specialty: "Back-end",
  catchPhrase: "Pass the salt."
});
const instructor3 = new Instructor({
  name: "Jill",
  age: 28,
  location: "California",
  favLanguage: "JAVA",
  specialty: "Back-end",
  catchPhrase: "Hella!"
});

//Students
const student1 = new Student({
  name: "Jack",
  age: 18,
  location: "New York",
  previousBackground: "Information Technology",
  className: "CIS-201",
  favSubjects: ["html", "css", "JavaScript"],
  grade: 70
});
const student2 = new Student({
  name: "Lexi",
  age: 22,
  location: "North Dakota",
  previousBackground: "Receptionist",
  className: "CS-301",
  favSubjects: ["C#", ".NET", "Visual Basic"],
  grade: 93
});
const student3 = new Student({
  name: "Sarah",
  age: 32,
  location: "Washington",
  previousBackground: "Hospitality",
  className: "CS-101",
  favSubjects: ["html", "css", "PHP"],
  grade: 89
});
const student4 = new Student({
  name: "Leon",
  age: 48,
  location: "Kentucky",
  previousBackground: "Coal Miner",
  className: "CS-102",
  favSubjects: ["JAVA", "python", "Javascript"],
  grade: 69
});

//Project Managers
const projectM1 = new ProjectManager({
  name: "Berry",
  age: 20,
  location: "Maryland",
  gradClassName: "WEB-12",
  favInstructor: "Jill"
});
const projectM2 = new ProjectManager({
  name: "Jerry",
  age: 26,
  location: "Idaho",
  gradClassName: "WEB-20",
  favInstructor: "Fred"
});
const projectM3 = new ProjectManager({
  name: "Larry",
  age: 39,
  location: "Oregon",
  gradClassName: "DS-1",
  favInstructor: "Bill"
});

console.log(instructor1.demo("Higher Order Functions"));
console.log(instructor2.grade(student4, "Prototypal Inheritence"));
console.log(instructor3.speak());

console.log(student1.listsSubjects());
console.log(student2.PRAssignment("Redux"));
console.log(student3.sprintChallenge("Node.js"));
console.log(student4.speak());
//STRETCH GOALS
console.log(student1.graduate());
console.log(student2.graduate());
console.log(student3.graduate());
console.log(student4.graduate());
//STRETCH GOALS
console.log(projectM1.standUp("General"));
console.log(projectM2.debugsCode(student2, "React Hooks"));
console.log(projectM3.speak());
