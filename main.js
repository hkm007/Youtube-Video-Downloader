function download() {
            var t=document.getElementById("myvideo").value;
            var q=t;
            temp = q.split("").splice(0,12).join("") +"ss"+q.split("").splice(12,q.length).join("");
            return temp;
        }