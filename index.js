// Write your solution here!

const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name){
drivers.push('Ralph')
}

function destructivelyPrependDriver(name){
  drivers.unshift('Bob')
}

function destructivelyRemoveLastDriver(){
  drivers.pop(-1)
}

function destructivelyRemoveFirstDriver(){
  drivers.shift(0)
}

function appendDriver(){
  return [...drivers, "Broom"]
}

function prependDriver(){
  return ["Arnold", ...drivers]
}

function removeLastDriver(){
  drivers.slice(-1)
}

function removeFirstDriver(){
  return drivers.slice(1)
}
