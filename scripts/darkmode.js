function darkmode(){
    var colorbody = document.getElementById("colorbody")
    var color = document.getElementById("color")
    var night = document.getElementById("nightmodeimg")
    var sun = document.getElementById("sunmodeimg")

    colorbody.style.backgroundColor = "#272727"
    color.style.backgroundColor = "#121212"
    night.style.display = "none"
    sun.style.display = "block"
    
}

function lightmode(){
    var colorbody = document.getElementById("colorbody")
    var color = document.getElementById("color")
    var night = document.getElementById("nightmodeimg")
    var sun = document.getElementById("sunmodeimg")

    colorbody.style.backgroundColor = "#ddd"
    color.style.backgroundColor = "#fff"
    night.style.display = "block"
    sun.style.display = "none"
    
}
