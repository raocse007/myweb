var i=0; 

function left()
{ 
    var image=["chatbot.jpg" ,"sugg.jpg","data.jpg"];
    
     if(i==3)
     { }
     else
     {
     document.getElementById("imgchg").src="images/"+image[i++];
     }

}
function right()
{ var image=["chatbot.jpg" ,"sugg.jpg","data.jpg"];
     
     if(i<=0)
     {}
     else
     {
     document.getElementById("imgchg").src="images/"+image[i--];
    
     }
}