
const call_modal = () => {
    
    $(document).ready(function(){
        console.log("modal called");
        $("#myBtn").click(function(){
          $("#myModal").modal();
        });
      });
      }


const add_task = () => {

    
    let tasks = document.getElementById("tasks");

    let task = document.createElement("div");


        //tick
        let right = document.createElement("button");
        right.className = "tick"
        let rightcontent = document.createTextNode(`✓`)
        right.style.fontSize = "25px"
        right.style.color = "green"
        right.appendChild(rightcontent);
        right.style.cursor = "pointer"


        //titleinpdiv
   let titleinpdiv = document.createElement("div");

    let titlehead = document.createElement("h2");
    if(document.getElementById("titleinp").value === ""){
        alert("oops! you missed a title")
        document.location.reload();   
    }

    let title = document.createTextNode(document.getElementById("titleinp").value);
    titlehead.appendChild(title);
    
    let titleinp = document.createElement("input");
    titleinp.type = "text";
    titleinp.placeholder = "Enter title"
    titleinp.id = "headinp"

    titleinp.style.display = "none";

    titleinpdiv.style.display = "flex";
    titleinpdiv.appendChild(titlehead);
    titleinpdiv.appendChild(titleinp);


    let titleinpPara = document.createElement("div");

    let titlepara = document.createElement("p");

    if(document.getElementById("textbox").value === ""){
        alert("oops! you missed a tasks")
        document.location.reload();   
    }

    let para = document.createTextNode(document.getElementById("textbox").value);
    titlepara.className = "titlepara"
    titlepara.appendChild(para);

    let parainp = document.createElement("input");
    parainp.type = "text";
    parainp.id = "headinp"
    parainp.placeholder = "Enter tasks"

    parainp.style.display = "none";
    
    titleinpPara.appendChild(titlepara);
    titleinpPara.appendChild(parainp);



    let datepara = document.createElement("p");
    const d = new Date();
    let p = document.createTextNode(`${d.getDate() + "/" + (d.getMonth()+1) + "/" + d.getFullYear()}`);
    datepara.className = "datepara"
    datepara.appendChild(p);

    // console.log(titlehead)
    // console.log(titlepara)

    let div = document.createElement("div");
    
    let editbtn = document.createElement("button");
    editbtn.className = "editbtn"
    let edittext = document.createTextNode("Edit");
    editbtn.appendChild(edittext);

    let deletebtn = document.createElement("button");
    deletebtn.id = "deletebtn";
    let deletetext = document.createTextNode(`❌`);
    deletebtn.appendChild(deletetext);


    div.id = "btns";
    div.appendChild(editbtn);
    div.appendChild(deletebtn);

    // div.style.display = "none"


    task.id = "task";
    task.className = "all";
   
    task.appendChild(right);
    task.appendChild(titleinpdiv);
    task.appendChild(titleinpPara);
    task.appendChild(datepara);
    task.appendChild(div);

    
    tasks.appendChild( task);

    
    // //add mouseover event
    // task.addEventListener("mouseover", () => {
    //     div.style.display = "flex"  
    // })

    // //add mouseout event
    // task.addEventListener("mouseout", () => {
    //     div.style.display = "none"  
    // })


    deletebtn.addEventListener("click", (e) => {
     
        let btnsdiv = e.target.parentElement;
        let parent = btnsdiv.parentElement;  
        
        console.log(parent)
    
        parent.parentNode.removeChild(parent);
        document.getElementsByClassName("allTasks")[0].innerText = parseInt(document.getElementsByClassName("allTasks")[0].innerText) - 1
        if(parent.classList.contains("completed")){
            document.getElementsByClassName("completeTasks")[0].innerText = parseInt(document.getElementsByClassName("completeTasks")[0].innerText) - 1
        }
    })

    editbtn.addEventListener("click", (e) => {

        //heading edit
      let inpthead = editbtn.parentElement.parentElement.children[1].children[1];
      inpthead.style.border = "none"
      inpthead.style.outline = "none"
      let head = editbtn.parentElement.parentElement.children[1].children[0];
      head.style.display="none"
      inpthead.style.display = "block"; 

      inpthead.addEventListener("keydown", (e) => {
          if(e.keyCode === 13){
              e.preventDefault();
              head.innerText = `${inpthead.value}`;
              head.style.display = "block";
              inpthead.style.display = "none";
              e.stopImmediatePropagation();
          }
      })

      //para edit
      let inptpara = editbtn.parentElement.parentElement.children[2].children[1];
      inptpara.style.border = "none"
      inptpara.style.outline = "none"
      let para = editbtn.parentElement.parentElement.children[2].children[0];
      para.style.display="none"
      inptpara.style.display = "block"; 

      inptpara.addEventListener("keydown", (e) => {
          if(e.keyCode === 13){
              e.preventDefault();
              para.innerText = `${inptpara.value}`;
              para.style.display = "block";
              inptpara.style.display = "none";
              e.stopImmediatePropagation();
          }
      })



    })

    //add class completed
    right.addEventListener("click", () => {
     task.classList.toggle("completed")
   
    //  task.style.backgroundColor = "green"

    let childs = task.children;

    for(var i=0; i<childs.length; i++){
           childs[i].style.display = "none"
    }

    //add complete text on completed task
    let completediv = document.createElement("div");
    let bck = document.createElement("p");
    let bcktext = document.createTextNode("⬅")
     bck.append(bcktext);
     bck.style.color = "white"
     bck.style.fontSize = "20px"
     bck.style.backgroundColor = "transparent"
     bck.style.marginRight = "5px";
     bck.style.cursor = "pointer";

    let p = document.createElement("p");
    let text = document.createTextNode("Completed")
    p.append(text);
    p.style.color = "white"
    p.style.backgroundColor = "transparent"
    p.style.fontSize = "20px"

        
    completediv.append(bck)
    completediv.append(p)

    completediv.style.display = "flex";
    completediv.style.backgroundColor = "transparent"
    completediv.style.alignContent = "center"
    task.append(completediv);
    task.style.backgroundColor = "green";


    
    let deleteddivbtn = document.createElement("div");
    deleteddivbtn.style.backgroundColor = "transparent"
    deleteddivbtn.append(deletebtn)
    deletebtn.style.backgroundColor = "transparent"
    task.append(deleteddivbtn)
    task.className = "completed"


    bck.addEventListener("click", ()=>{
        for(var i=0; i<childs.length; i++){
            console.log(childs[i])
            if(i<5){
                if(i==4){
                    childs[i].appendChild(deletebtn);
                    deletebtn.style.display = "block"
                }
                childs[i].style.display = "flex"}
            else{
               
               childs[i].style.display = "none"
            }
        }
        deletebtn.style.display = "flex"

        task.style.backgroundColor = "#EFF8FE"
        task.classList.remove("completed")
        document.getElementsByClassName("completeTasks")[0].innerText = parseInt(document.getElementsByClassName("completeTasks")[0].innerText) - 1

    })

    if(! (task.classList.length === 2))
    document.getElementsByClassName("completeTasks")[0].innerText = parseInt(document.getElementsByClassName("completeTasks")[0].innerText) + 1

   })

    document.getElementsByClassName("allTasks")[0].innerText =  parseInt(document.getElementsByClassName("allTasks")[0].innerText) + 1




    document.getElementById("titleinp").value = "";
    document.getElementById("textbox").value = "";
    

}


const allTask = () => {
    let alltasks = document.getElementById('tasks').children;

    for(var i=0; i<alltasks.length; i++){
           alltasks[i].style.display = "block"
    }
}

const completedTask = () => {
    let alltasks = document.getElementById('tasks').children;

    for(var i=0; i<alltasks.length; i++){
       if(alltasks[i].classList.contains("completed")){
           alltasks[i].style.display = "block"
       }else{
           alltasks[i].style.display = "none"
       }
    }
    
}







