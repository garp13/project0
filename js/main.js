/*index.html */
$(document).ready(function(){
    /*Home*/
    $(window).scroll(function(){
            /*bar Index */
        /*scroll event */
        $('#Benefits').each(function(){
            var pos = $(this).offset().top;
            var winTop = $(window).scrollTop();
            if(pos < winTop){
                $('#barBen').css({"width":"100%"});
                $('#barSell').css({"width":"0px"});
                $('#barFaq').css({"width":"0px"});
            }
        })

        $('#Selling').each(function(){
            var pos = $(this).offset().top;
            var winTop = $(window).scrollTop();
            if(pos < winTop){
                $('#barBen').css({"width":"0px"});
                $('#barSell').css({"width":"100%"});
                $('#barFaq').css({"width":"0px"});
            }
        })

        $('#FAQ').each(function(){
            var pos = $(this).offset().top;
            var winTop = $(window).scrollTop();
            if(pos < winTop+600){
                $('#barBen').css({"width":"0px"});
                $('#barSell').css({"width":"0px"});
                $('#barFaq').css({"width":"100%"});
            }
        })
        
    })
})
function dropfixed(){
    var f = document.getElementById("navbar0");
    var f0 = window.getComputedStyle(f);
    var f1 = f0.getPropertyValue('position');
    var temp = document.getElementById("navbar0");
    if (f1=="fixed")
    {
        temp.style.position = "static";
    }
    else
    {
        temp.style.position = "fixed";
    }
}
/**Login.html */
function check_login(){
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var email = document.logForm.email.value;
    if( email=="" || !email.match(emailRegex)){
        document.getElementById("pEmailInvalid").style.display = "block";
        document.getElementById("passIn").style.display ="none";
    }else
    {
        document.getElementById("pEmailInvalid").style.display = "none";
        var pass = document.logForm.pass.value;
        if (pass==""){
            document.getElementById("passIn").style.display ="block";
        }else
        {
            document.getElementById("passIn").style.display ="none";
        }
    }
}
/**register.html check input radio to set color border */
function check_in(x){
    document.getElementsByClassName("shopping")[0].style.border = "2px solid #eaeaea";
    document.getElementsByClassName("trade")[0].style.border = "2px solid #eaeaea";
    document.getElementsByClassName(x)[0].style.border = "2px solid #333";
}
/*Check Register Personal Details register_Contact.html*/
function checkPer(){
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var fullname = document.Personal_form.fullname.value;
    var email = document.Personal_form.email.value;
    var pass = document.Personal_form.pass.value;
    var Cfpass = document.Personal_form.Cfpass.value;
    var PCN = document.Personal_form.PCN.value;
    var RC = document.Personal_form.RC.value;
    if(fullname == ""|| email=="" || !email.match(emailRegex) || pass.length<6|| Cfpass != pass|| PCN == ""){
        /*******************************/
        if (fullname == "")
        {
            document.getElementById("pName").style.display = "block";
            document.getElementById("fullname").style.border = "1px solid red";
        }
        else
        {
            document.getElementById("pName").style.display = "none";
            document.getElementById("fullname").style.border = "1px solid #e6e6e6";
        }
        /*******************************/
        if(email == "")
        {
            document.getElementById("email").style.border = "1px solid red";
            document.getElementById("pEmailInvalid").style.display = "none";
            document.getElementById("pEmailRequired").style.display = "block";
        }
        else
        {
            document.getElementById("email").style.border = "1px solid #e6e6e6";
            document.getElementById("pEmailRequired").style.display = "none";
            if(email.match(emailRegex))
            {
                document.getElementById("pEmailInvalid").style.display = "none"; 
            }
            else
            {
                document.getElementById("pEmailInvalid").style.display = "block"; 
                document.getElementById("email").style.border = "1px solid red";
            }
        }
        /*******************************/
        
        /*******************************/
        if(pass.length < 6)
        {
            document.getElementById("pass").style.border = "1px solid red";
            document.getElementById("pPass").style.display = "block";
        }
        else
        {
            document.getElementById("pass").style.border = "1px solid #e6e6e6";
            document.getElementById("pPass").style.display = "none";
        }
        /*******************************/
        if(pass != Cfpass )
        {
            document.getElementById("Cfpass").style.border = "1px solid red";
            document.getElementById("pCf").style.display = "block";
        }
        else
        {
            document.getElementById("Cfpass").style.border = "1px solid #e6e6e6";
            document.getElementById("pCf").style.display = "none";
        }
        /*******************************/
        if(pass == "")
        {
            document.getElementById("Cfpass").style.border = "1px solid red";
            document.getElementById("pCf").style.display = "block";
        }
        /*******************************/
        if(PCN == "")
        {
            document.getElementById("PCN").style.border = "1px solid red";
            document.getElementById("pPCN").style.display = "block";
        }
        else
        {
            document.getElementById("PCN").style.border = "1px solid #e6e6e6";
            document.getElementById("pPCN").style.display = "none";
        }
        return false;
    }
    else
    {
        document.getElementById("pName").style.display = "none";
        document.getElementById("pEmailRequired").style.display = "none";
        document.getElementById("pEmailInvalid").style.display = "none";
        document.getElementById("pPass").style.display = "none";
        document.getElementById("pCf").style.display = "none";
        document.getElementById("pPCN").style.display = "none";
        /********* */
        document.getElementById("fullname").style.border = "1px solid #e6e6e6";
        document.getElementById("email").style.border = "1px solid #e6e6e6";
        document.getElementById("pass").style.border = "1px solid #e6e6e6";
        document.getElementById("Cfpass").style.border = "1px solid #e6e6e6";
        document.getElementById("PCN").style.border = "1px solid #e6e6e6";
    if (RC=="")
    {
        document.Personal_form.RC.value="1";
        return true;
    }else{
        return true;

    }
    
    }
}

function check_email(){
    var email = document.Personal_form.email.value;
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email=="" || !email.match(emailRegex))
    {
    if(email == "")
        {
            document.getElementById("email").style.border = "1px solid red";
            document.getElementById("pEmailInvalid").style.display = "none";
            document.getElementById("pEmailRequired").style.display = "block";
        }
        else
        {
            document.getElementById("email").style.border = "1px solid #e6e6e6";
            document.getElementById("pEmailRequired").style.display = "none";
            if(email.match(emailRegex))
            {
                document.getElementById("pEmailInvalid").style.display = "none"; 
            }
            else
            {
                document.getElementById("pEmailInvalid").style.display = "block"; 
                document.getElementById("email").style.border = "1px solid red";
            }
        }
    }else
    {   
        document.getElementById("pEmailRequired").style.display = "none";
        document.getElementById("pEmailInvalid").style.display = "none";

        document.getElementById("email").style.border = "1px solid #e6e6e6";
    }

}

/*check store, register_store.html */
function checkst(){
    var stName = document.Personal_form.storename.value;
    var stCN = document.Personal_form.storecontact.value;
    var stA1 = document.Personal_form.storeaddress1.value;
    var stA2 = document.Personal_form.storeaddress2.value;
    var lM = document.Personal_form.LandMark.value;
    var pC = document.Personal_form.postalcode.value;
    var ct = document.Personal_form.city.value;
    if(stName == ""|| stCN=="" || pC == "" || ct == "" || stA1 == ""){
        /*******************************/
        if (stName == "")
        {
            document.getElementById("pName").style.display = "block";
            document.getElementById("storename").style.border = "1px solid red";
        }
        else
        {
            document.getElementById("pName").style.display = "none";
            document.getElementById("storename").style.border = "1px solid #e6e6e6";
        }
        /*******************************/
        if(stCN == "")
        {  
            document.getElementById("storecontact").style.border = "1px solid red";
        }
        else
        {   
            document.getElementById("storecontact").style.border = "1px solid #e6e6e6";
        }
        /*******************************/
        if(stA1 == "")
        {
            document.getElementById("pA1").style.display = "block";
            document.getElementById("storeaddress1").style.border = "1px solid red";
        }
        else
        {   
            document.getElementById("pA1").style.display = "none";
        }
        /*******************************
        if(lM == "")
        {
            document.getElementById("LandMark").style.border = "1px solid red";
        }
        else
        {   
            document.getElementById("LandMark").style.border = "1px solid #e6e6e6";
        }
        *******************************/
        if(pC == "")
        {
            document.getElementById("ppC").style.display = "block";
            document.getElementById("postalcode").style.border = "1px solid red";
        }
        else
        {   
            document.getElementById("ppC").style.display = "none";
            document.getElementById("postalcode").style.border = "1px solid #e6e6e6";
        }
        /*******************************/
        if(ct == "")
        {
            document.getElementById("pct").style.display = "block";
            document.getElementById("city").style.border = "1px solid red";
        }
        else
        {   
            document.getElementById("pct").style.display = "none";
            document.getElementById("city").style.border = "1px solid #e6e6e6";
        }
        /*******************************/
        return false;
    }
    else
    {
        document.getElementById("pName").style.display = "none";
        document.getElementById("pEmailRequired").style.display = "none";
        document.getElementById("pEmailInvalid").style.display = "none";
        document.getElementById("pPass").style.display = "none";
        document.getElementById("pCf").style.display = "none";
        document.getElementById("pPCN").style.display = "none";
    }
}
function check_Address(){
    var stA1 = document.Personal_form.storeaddress1.value;
    document.getElementById("pA1").style.display = "none";
    if(stA1.length < 2 || stA1.length > 90){
        document.getElementById("pA11").style.display = "block";
    }
    else
    {
        document.getElementById("pA11").style.display = "none";
    }
    if(stA1.length ==0){
        document.getElementById("pA11").style.display = "none";
        document.getElementById("pA1").style.display = "block";
        document.getElementById("storeaddress1").style.border = "1px solid red";
    }
}

/*Check Store contact number same as personal contact number*/
function check_store(){
    var check = document.getElementById("store_contact_number").checked;
    if (check == true)
    {
        document.getElementById("storecontact").style.display = "none";
    }
    else
    {
        document.getElementById("storecontact").style.display = "block";
    }
}

/*
function check_spD(){
    var f = document.getElementById("menu-log");
    var f0 = window.getComputedStyle(f);
    var f1 = f0.getPropertyValue('height');
    
    var temp = document.getElementById("superDrop");
    if (f1 == "82px")
    {
        temp.style.top = "0px";
        
    }else
    {
        temp.style.top = "600px";
    }
    console.log(f1)
}
function check_onmouseover(){
    var f = document.getElementById("menu-log");
    var f0 = window.getComputedStyle(f);
    var f1 = f0.getPropertyValue('height');
    var temp = document.getElementById("superDrop");
    if (f1 == "auto"||f1=="54px")
    {
        temp.style.top = "0px";
        
    }else
    {
        temp.style.top = "600px";
    }
}*/
