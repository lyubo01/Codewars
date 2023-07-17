function getCount(str) {
  let vowels = 0;
  for(let i=0;i<= str.length;i++){
    if(str[i] === "a"){
      vowels +=1;
    }else if(str[i] === "e"){
      vowels +=1;
    }else if(str[i] === "i"){
      vowels +=1;
    }else if(str[i] === "o"){
      vowels +=1;
    }else if(str[i] === "u"){
      vowels +=1;
    }
  }
  return vowels;
}
