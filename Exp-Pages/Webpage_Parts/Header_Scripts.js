function openMenuDropdown(evt, dropdownName) {
        var i, dropdowncontent, dropdownlinks;
        dropdowncontent = document.getElementsByClassName("dropdown-content");
        for (i = 0; i < dropdowncontent.length; i++) {
            dropdowncontent[i].style.display = "none";
        }
        dropdownlinks = document.getElementsByClassName("dropdown-links");
        for (i = 0; i < dropdownlinks.length; i++) {
            dropdownlinks[i].className = dropdownlinks[i].className.replace(" active", "");
        }
        document.getElementById(dropdownName).style.display = "block";
        evt.currentTarget.className += " active";
    }

function closeMenuDropdown(evt) {
    var i;
    var flag = false; //Tells whether the mouse is hovering over an element or not

    var x = event.clientX;
    var y = event.clientY;
    
    dropdowncontent = document.getElementsByClassName("dropdown-content");
    dropdownlinks = document.getElementsByClassName("dropdown-links");

    for (i = 0; i < dropdowncontent.length; i++) {
        if(document.elementFromPoint(x, y) == dropdowncontent[i]) {
            flag = true;
            break;
        }	
    }

    if(!flag) {
        for (i = 0; i < dropdownlinks.length; i++) {
            if(document.elementFromPoint(x, y) == dropdownlinks[i]) {
                flag = true;
                break;
            }	
        }
    }

    if(!flag) {
        for (i = 0; i < dropdowncontent.length; i++) {
            dropdowncontent[i].style.display = "none";
            dropdownlinks[i].className = dropdownlinks[i].className.replace(" active", "");
        }
    }
}