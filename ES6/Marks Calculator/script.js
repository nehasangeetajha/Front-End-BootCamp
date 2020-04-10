
let getdata = () => {
    let nam = document.getElementById('name').value 
    let ag = document.getElementById('age').value
    let phy = parseInt(document.getElementById('phy').value)
    let chem = parseInt(document.getElementById('chem').value)
    let math = parseInt(document.getElementById('maths').value)

    if(nam && ag && phy && chem && math)
    {
        let obj = {
            name : nam,
            age : ag,
            marks : {
                physics:phy,
                chemistry : chem,
                maths : math
            }
        }
        return obj
    }
    else
    {
        alert("Enter some value")
    }

}


let sumdata = () =>{

    document.getElementById('output').innerHTML = ' '

    let resObj = getdata()
    console.log(resObj)
   
    let total = resObj.marks.physics + resObj.marks.chemistry + resObj.marks.maths
        console.log(total)
        document.getElementById('output').innerHTML += `
        <h4> Total Marks : ${total}</h4>
        ` 
}

let percentage = () => {
    let resObj = getdata()
    console.log(resObj)
   
    let total = (resObj.marks.physics + resObj.marks.chemistry + resObj.marks.maths) / 3
    console.log(total)
    document.getElementById('output').innerHTML += `
    <h4> Total Percentage : ${total} %</h4>
    `
}



document.getElementById('total').addEventListener('click', sumdata)
document.getElementById('percent').addEventListener('click', percentage)






