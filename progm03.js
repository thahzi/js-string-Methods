// to check whether the given string is palindrome

str = 'malayalam'
str1 =''

for(i=str.length-1;i>=0;i--){
    str1 += str[i]
}

str==str1?console.log('it is palindrome'):console.log('Not palindrome');
