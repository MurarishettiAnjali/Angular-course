// function filterThis(candidateFilter,candidates)
// {
//     result=[]
//     for( x of candidates)
//         if(candidateFilter(x))
//             result.push(x)
//     return result 
// }
// candidates = [
//     {sno:1,name:"Jose",score:56},
//     {sno:2,name:"Kiran",score:78},
//     {sno:3,name:"Mohit",score:99},
//     {sno:4,name:"Vinay",score:13},
//     {sno:5,name:"Arjun",score:88},]
// result=filterThis(function(candidate){
//         if(candidate.score>70)
//           return true
//         return false  
// },candidates)
// console.log(result)

Students = [
        {sno:1,name:"Anjali",percentage:56},
        {sno:2,name:"Charu",percentage:78},
        {sno:3,name:"Vamsi",percentage:99},
        {sno:4,name:"Nivitha",percentage:13},
        {sno:5,name:"Jay",percentage:88},]
let result=Students.filter(x=>{
    return x.score>70
})
console.log(result)


