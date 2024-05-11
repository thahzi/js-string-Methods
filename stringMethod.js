//  String Methods

a = 'luMInar'

// startsWith()
console.log(a.startsWith('lum'));

// endsWith()
console.log(a.endsWith('nar'));

//toUpperCase()
console.log(a.toUpperCase()); 

// toLowerCase()
console.log(a.toLowerCase());

// trim()
str = '          asdfghjk'
str1 = str.trim()
console.log(str1);

// substring()   (startindex,endindex) - endindex is not included in the new array

str = 'luminar'

str1 = str.substring(0,4)
console.log(str1);
str2 = str.substring(2)
console.log(str2);

// slice method

str3 = 'luminar'
str4 = str3.slice(1,4)
console.log(str4);

// minar
str5 = str3.slice(-5)
console.log(str5);

// split method
str = 'luminar technolab'
str1 = str.split(' ')
console.log(str1);

// replace()

str = 'i joined microsoft'
str1 = str.replace('joined','quit')
console.log(str1);

str = 'hello world'
str1 = str.replace(' ','')
console.log(str1);