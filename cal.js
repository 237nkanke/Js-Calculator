class Calculator
{
    constructor(previousbuttons,currentbuttons)
    {
        this.previousbuttons = previousbuttons
        this.currentbuttons = currentbuttons
        this.clear()
    }


    clear()
    {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }
    delete()
    {
        this.currentOperand = this.currentOperand.toString().slice(0,-1)//.slice(0,-1) means
        //take value from index numner 0 up to 1 from the end (-1)
    }

    append(number)
    {
    if(number === '.' && this.currentOperand.includes('.')) return
this.currentOperand = this.currentOperand.toString() + number.toString()
    }

    opperation(operation)
    {
        if(this.currentOperand === '')  return
         if(this.previousOperand !== '')
         {
             this.compute()
         }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
    }

    compute()
    {
let computation
const prev = parseFloat(this.previousOperand) // converting the string to a number
//since we converted the currentoperant to be able to pass all the numbers and
// we also pass those numbers to te previous value parseFloat
// permit us to convet thos number string to integers and pass the actual number that was as a string.
const current = parseFloat(this.currentOperand)
// is NAN means not a nunber
if(isNaN(prev) || isNaN(current)) return
switch(this.operation){
 case '+':
     computation= prev + current
     break
     case '-':
        computation= prev - current
        break
        case '*':
            computation= prev * current
            break
            case '/':
                computation= prev / current
                break
 default:
     return
    }
this.currentOperand = computation
this.operation = undefined
this.previousOperand= ''
    }

    getDisplayNumber(number){
        const strnumber = number.toString()
        const intnumber = parseFloat(strnumber.split('.')[0])
        const decimalnumber = strnumber.split('.')[1]
        let intdisplay
        if(isNaN(intnumber))
        {
            intdisplay = ''
        }else{
            intdisplay = intnumber.toLocaleString('en', { maximumFractionDigits: 0})
        }
        if(decimalnumber != null){
            return `${intdisplay}.${decimalnumber}`
        }else{
            return intdisplay
        }


        // const floatnumber = parseFloat(number)
        // if(isNaN(floatnumber)) return ''
        // return floatnumber.toLocaleString('en')
        //toLocaleString permit tu put
        // comma after the repetition of the number 3 times
    }

    update()
    {
 this.currentbuttons.innerText = this.getDisplayNumber(this.currentOperand)
 if(this.operation != null){
    this.previousbuttons.innerText = `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`//here is how we concartenate intergers
 }
 else{
    this.previousbuttons.innerText = ''
 }
    
    }
}




const numberbuttons = document.querySelectorAll('[data-number]')
const operationbuttons = document.querySelectorAll('[data-operation]')
const equalsbuttons = document.querySelector('[data-equals]')
const deletebuttons = document.querySelector('[data-delete]')
const allclearbuttons = document.querySelector('[data-all-clear]')
const previousbuttons = document.querySelector('[data-previous]')
const currentbuttons = document.querySelector('[data-current]')


const calculator = new Calculator(previousbuttons,currentbuttons)

numberbuttons.forEach(button => {
    button.addEventListener('click' , () => {
        calculator.append(button.innerText)
        calculator.update()
    })
})

operationbuttons.forEach(button => {
    button.addEventListener('click' , () => {
        calculator.opperation(button.innerText)
        calculator.update()
    })
})

equalsbuttons.addEventListener('click' , button => {
    calculator.compute()
    calculator.update()
})
allclearbuttons.addEventListener('click' , button => {
    calculator.clear()
    calculator.update()
})

deletebuttons.addEventListener('click' , button => {
    calculator.delete()
    calculator.update()
})











let bcal = document.getElementById("bcal")
let bim = document.getElementById("bim")
let cc = document.getElementById('Gcal')
let plus = document.getElementById('im')
let co = 0
bcal.addEventListener('click' , dcal)
bim.addEventListener('click' , inc)

function dcal()
{

    cc.style.display = 'grid'
    plus.style.display = 'none'
    // if(co % 2 == 0)
    // {
    //     cc.style.display = 'none'
    //     // plus.style.display = 'flex'
    //     co++;
    //     console.log(co)
    // }else if(co % 2 == 1)
    // {
    //     cc.style.display = 'grid'
    //     co++;
    //     console.log(co)
    // }
 
}

function inc()
{
    cc.style.display = 'none'
    // cc.style.transition = 'transform 0.4s ease-in-out'
    plus.style.display = 'flex'
}

let increase = document.getElementById('increase')
let decrease = document.getElementById('decrease')
let image = document.querySelector('#im img')
increase.addEventListener('click' , size)
decrease.addEventListener('click' , Resize)
let width = image.width
let count = 1
let hh = width
function size()
{
  hh = hh + (count * 10)
  console.log(hh)
  image.style.width = hh+'px'
  count++
}

function Resize()
{
  hh = hh - (count * 10)
  console.log(hh)
  image.style.width = hh+'px'
  count--
}