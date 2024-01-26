$("#sub").click(function(){
    var fullname = $("#uname").val();
    var email = $("#mail").val();
    var message = $("#msg").val();
    console.log(email+fullname+message)
   //console.log ('test',username,email,password)
    if(fullname==='' && email==='' && message===''){
        alert ('please fill in all fields')
    }
        alert ('Welcome to RBK Booking, your message is sended we will check it as soon as possible')
    

     })
