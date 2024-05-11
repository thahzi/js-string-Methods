pattern = `ABCBBCAACB`

// Find the first recursive letter

for(i=0;i<pattern.length;i++){
    if(pattern[i]==pattern[i+1]){
        console.log(pattern[i]);
        break
    }

}

// Obj method
obj1={}

character=Array.from(pattern)

for(char of character){
    if(char in obj1){
        console.log(char);
        break
    }
    else{
        obj1[char]=1
    }
}
