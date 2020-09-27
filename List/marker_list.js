let name = "";
for (let li = 0; li < 100; li++){
    let ol = document.querySelector("ol");
    ol.innerHTML += `<li class="${name}">${li}</li>`;
    // ol.innerHTML = ol.innerHTML + "<li>${li}</li>";
    if (li % 2 == 0){
        name = "";
    }else{
        name = "first";
    }
}