const bname=document.getElementById('bname');
const bauthor=document.getElementById('bauthor');
const bpage=document.getElementById('bpage');
const status=document.getElementById('status');
const add=document.getElementById('add');
const table=document.getElementById('table');
const tbody=document.getElementById('tbody');
const chkbx=document.getElementById('chkbx');
const remove=document.querySelectorAll('.remove');
const tlbooks=document.querySelector('#tlbooks');

function books(bookname,bookauthor,bookpage,isread){

    this.bookname=bookname;
    this.bookauthor=bookauthor;
    this.bookpage=bookpage;
    this.isread=isread;
}
    var sno=1;
    add.addEventListener("click", function(){

        var bvalue= new books(bname.value,bauthor.value,bpage.value,chkbx.value);
        const tr=document.createElement('tr');
        tbody.appendChild(tr);
      
     
   
        const td=document.createElement('td');
        const tdtext = document.createTextNode(bvalue.bookname);
        td.appendChild(tdtext);
        tr.appendChild(td);
    
        const td1=document.createElement('td');
       const tdtext1 = document.createTextNode(bvalue.bookauthor);
       td1.appendChild(tdtext1);
       tr.appendChild(td1);
    
        const td2=document.createElement('td');
        const tdtext2 = document.createTextNode(bvalue.bookpage);
        td2.appendChild(tdtext2);
        tr.appendChild(td2);

        
        const td3=document.createElement('td');
        const btn= document.createElement('button');
        var isread='';
        if(chkbx.checked==true){
            isread="Read";
            btn.setAttribute('style', 'background-color:green;border:none;color:white');
        }
        else{
             isread="Not yet Read";
             btn.setAttribute('style', 'background-color:orange;border:none;color:white');
        }
        const tdtext3= document.createTextNode(isread);
        btn.appendChild(tdtext3);
        td3.appendChild(btn);
        tr.appendChild(td3);
        // console.log(bookauthor);

        const td4=document.createElement('td');
        const btn1= document.createElement('button');
        // btn1.onclick=function(deleteRow(this));
        btn1.classList.add('remove');
        btn1.setAttribute("onclick","DeleteRow(this)");
          
        const tdtext4= document.createTextNode('Remove');
        btn1.appendChild(tdtext4);
        td4.appendChild(btn1);
        tr.appendChild(td4);
        sno++;
        tlbooks.innerHTML=sno;
        console.log(sno);
    });

    tlbooks.innerHTML=sno;
    console.log(sno);
    function DeleteRow(remove) {
        document.getElementById("table").deleteRow(remove.parentNode.parentNode.rowIndex);
          
    }
   

// }
