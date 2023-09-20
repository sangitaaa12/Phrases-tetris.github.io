const myArray = [
    "We",
    "Design",
    "Develop",
    "Application",
    "that",
    "runs",
    "the",
    "world",
    "and"
  ];
  
  export const lettersAdjustedPerWeight = () => {
    let lettersArray = [];
    Array.prototype.map.call(myArray, (_letter, index) => {
      for (var i = 0; i < myArray.length - index; i++) lettersArray.push(_letter);
    });
  
    return shuffle(lettersArray);
  };
  
  const shuffle = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };
   
