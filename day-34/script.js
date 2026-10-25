const input = document.getElementById("skillInput")
const btn = document.getElementById("addBtn")
const list = document.getElementById("skillsList")
      
const skills =[]
function add(){
 const newItem = document.createElement('li')
 const remove = document.createElement('button')  
    newItem.textContent = input.value
    list.append(newItem)
    remove.textContent = "Remove"
    list.append(remove)
    remove.onclick = function (){
        newItem.remove()
        remove.remove()

    }
}