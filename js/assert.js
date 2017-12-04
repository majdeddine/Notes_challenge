var assert ={
  isTrue: function(assertionToCheck){
    if(!assertionToCheck){
      throw new Error("failed: "+ assertionToCheck + " is not truthy")
    }
  }
}
