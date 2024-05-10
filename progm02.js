// print all the vowels in the given sentence

sentence = 'good morning all'
str = sentence.split('')

result = str.filter(n1=>n1=='a'||n1=='e'||n1=='i'||n1=='o'||n1=='u')
console.log(result);

// for(i of str){
//     if(i=='a' ||i=='e'||i=='i'||i=='o'||i=='u'){
//         console.log(i);
//     }
// }


/*for(i of str){
    if(vowels.includes(i)){
        console.log(i)
    }

    vowels = [a,e,i,o,u,A,E,I,O,U]

character.filter(char=>vowels.includes(char).forEach(element => (console.log(element))))

} */

// Another method
// Array.from(sentence).filter(char=>vowels.includes(char).forEach(element => (console.log(element)