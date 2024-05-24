// Objects Destructure
const course = {
    courseName : "alpha",
    coursePrice : 7000,
    courseInstructor : "abcdef"
}

// normal way
// const instructor = course.courseInstructor;
// console.log(instructor);

// object destructure - way1
const {courseName} = course;
console.log(courseName);

// object destructure - way2
const {coursePrice : price} = course;
console.log(price);