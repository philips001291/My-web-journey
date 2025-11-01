import generateName from 'sillyname'
import { randomSuperhero } from 'superheroes'

//var generateName=require("sillyname")
var sillyname=generateName()
console.log(sillyname)
const name=randomSuperhero()
console.log("I am"+" "+name)
