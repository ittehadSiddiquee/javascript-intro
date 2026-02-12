const college = {
    name:'vnc',
    class:['11','12','13'],
    events:['science fair ','bijoy dibos','21 feb'],
    unique:{
        color:'blue'
        result:{
            gpa : 5,
            merit: 'top'
        }
    }
}
college.unique.result.merit = 'top top top most'
console.log(college.unique.result.merit)
console.events[1]='16 December'
console.log(college.events[1])
delete college.class;
console.log(college)
