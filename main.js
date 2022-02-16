function xify(str) {
    let output = '';
    for (let i = 0; i < str.length; i++) {
      output = output + 'x';
    }
    return output;
  }
  
  console.log(xify('hello'));
  console.log(xify('hi there'));

  ////// yellingChars /////
  function yellingChars(str) {
    let output = '';
    for (let i = 0; i < str.length; i++) {
      output += (str[i] + '!');
    }
    return output;
  }
  
  console.log(yellingChars('hello'));
  console.log(yellingChars('hi there'));




////// indexedChars /////
function indexedChars(str) {
    let output = '';
    for (let i = 0; i < str.length; i++) {
        output += (i + str[i]);
    }
    return output;
    }
    
    console.log(indexedChars('hello'));
    console.log(indexedChars('hi there'));




////// numberedChars /////
function numberedChars(str) {
    let output = '';
    for (let i = 0; i < str.length; i++) {
        output += ((i+1) + str[i]);
    }
    return output;
    }
    
    console.log(numberedChars('hello'));
    console.log(numberedChars('hi there'));




////// exclaim /////
function exclaim(str) {
    output =''
    for (let i = 0; i < str.length; i++) {
        if (str[i]=='.' || str[i]=='?'){
            output += '!';
        }
        else{
            output += str[i];
        }
    }
    return output;
    }
    
    console.log(exclaim('What are you doing? Are you a fool?'));
    console.log(exclaim('This is fine.'));




////// repeatIt /////
function repeatIt(str,times) {
    let output = '';
    for (let i = 0; i < times; i++) {
        output += str
    }
    return output;
    }
    
    console.log(repeatIt('hello',4));
    console.log(repeatIt('hi there',5));




////// truncate /////
function truncate(str) {
    let output = '';
    for (let i = 0; i < 15; i++) {
        output += str[i];
    }
    output+='...'
    return output;
    }
    
    console.log(truncate('The fault, dear Brutus, is not in our stars, but in ourselves.'));
    console.log(truncate("Well, that's just, like, your opinion man."));




////// ciEmailify /////
function ciEmailify(str) {
    let output = '';
    for (let i = 0; i < str.length; i++) {
        if(str[i]==' '){
            output +='.';
        }
        else{
            output += str[i]
        }
    }
    output+='@codeimmersives.com'
    return output;
    }
    
console.log(ciEmailify('colin jaffe'));
console.log(ciEmailify('Anthony DeRosa'));




////// reverse /////
function reverse(str) {
    let output = '';
    for (let i = str.length-1; i >=0; i--) {
        
        output += str[i]
    }
    return output;
    }
    
console.log(reverse('colin jaffe'));
console.log(reverse('Anthony DeRosa'));




////// onlyVowels /////
function onlyVowels(str) {
    let output = '';
    let vowels = ['a','e','i','o','u'];

    for (let i = 0; i < str.length; i++) {
        for (let vowel of vowels) {
            
            if(str[i] == vowel){
                output += str[i];
            }
        }
    }
    return output;
    }
    
console.log(onlyVowels('colin jaffe'));
console.log(onlyVowels('Anthony DeRosa'));
