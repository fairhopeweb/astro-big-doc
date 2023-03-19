import {event} from '../libs/client_utils'

function init_container(container){
    if(container.getAttribute("data-state") != "init"){
        return
    }
    const collapsible = container.querySelector(".collapsible")
    const content = container.querySelector(".content")
    collapsible.onclick = ()=>{
        content.classList.toggle("expanded")
        if (content.classList.contains("expanded")){
            //*2 speeds up the animation but resolves the resize problem without actively watching the resize
            content.style.maxHeight = content.scrollHeight*2 + "px";
            collapsible.textContent = "Click to close"
        } else {
            content.style.maxHeight = null;
            collapsible.textContent = "Click to expand"
        }
        console.log(content.style.maxHeight)
    }

    //item open modal
    const itemimages = container.querySelectorAll(".itemimage")
    const items = [...itemimages]
    for(let el in items){
        items[el].onclick = (e)=>{
            const modal = e.target.parentElement.querySelector(".modal-background")
            event(modal,"init")
        }
    }

}

function init(){
    const containers_els = document.querySelectorAll(".container.gallery")
    if(containers_els.length == 0){//prevent irrelvant paeg execution
        return
    }

    const containers = [...containers_els]
    for(let el in containers){
        init_container(containers[el])
    }
}

init()
