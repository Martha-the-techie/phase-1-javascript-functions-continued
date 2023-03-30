function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
  }

  function mondayWork(work = 'go to the office') {
    return `This Monday, I will ${work}.`;
  }
  
  function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
      return `You are ${flair}${adjective}${flair}!`;
    }
  }

  const encouragingPromptFunction = wrapAdjective("!!!");
  console.log(encouragingPromptFunction("a dedicated programmer")); 
  // Output: You are !!!a dedicated programmer!!!
  console.log(encouragingPromptFunction()); 
  // Output: You are !!!special!!!