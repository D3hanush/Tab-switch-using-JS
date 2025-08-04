let img=document.getElementById("back_img");
let tit=document.getElementById("book_tit");
let fas=document.getElementById("book_fas");
let para=document.getElementById("book_para");
let scle=document.querySelectorAll("sw_img1");   

function change(event){ 
    if(event.target.src == 'http://127.0.0.1:5500/Asset/Image/bg_one.jpg'){
        img.src= event.target.src;
        tit.innerHTML="SMILE LOOKBOOK 2104";
        fas.innerHTML="MODERN & CLASSIC OUTLET <br> MENSWARE";
        para.innerHTML="Clean & Elegant design with a modern style. This template includes <br> all you need for a fashion & accessories store";
    }
    else if(event.target.src == 'http://127.0.0.1:5500/Asset/Image/bg_two.jpg'){;
        img.src= event.target.src;
        tit.innerHTML="SMILE LOOKBOOK 2011";
        fas.innerHTML="MEN'S JOURNAL STOCKED <br> SUIT & STREET";
        para.innerHTML="Where classic tailoring meets modern street style for the versatile, <br> fashion-forward man.";
    }
    else if(event.target.src == 'http://127.0.0.1:5500/Asset/Image/bg_three.jpg'){
        img.src= event.target.src;
        tit.innerHTML="SMILE LOOKBOOK 2101";
        fas.innerHTML="THE STYLE FORGE OUTLET <br> DAPPERED";
        para.innerHTML=" Crafting bold, refined looks for the modern man with timeless edge <br> and urban flair.";
    }
    else if(event.target.src == 'http://127.0.0.1:5500/Asset/Image/bg_four.jpg'){
        img.src= event.target.src;
        tit.innerHTML="SMILE LOOKBOOK 2000";
        fas.innerHTML="THE CLASSIC THREAD <br> MAN OF MANY";
        para.innerHTML=" Showcasing the best in men's style, gear, culture, and modern <br> living—all in one place.";
    }
    else if(event.target.src == 'http://127.0.0.1:5500/Asset/Image/bg_five.jpg'){
        img.src= event.target.src;
        tit.innerHTML="SMILE LOOKBOOK 1998";
        fas.innerHTML="BUCK MASON JOURNAL <br> PROFESSIONAL";
        para.innerHTML=" A curated look into timeless American style, craftsmanship, and the culture <br> that shapes modern menswear.";
    }
    else if(event.target.src == 'http://127.0.0.1:5500/Asset/Image/bg_six.jpg'){
        img.src= event.target.src;
        tit.innerHTML="SMILE LOOKBOOK 2006";
        fas.innerHTML="STYLE SYNDICATE OUTLET <br> FIT AND FORM";
        para.innerHTML=" A collective of modern menswear, merging sharp tailoring with <br> street-smart edge.";
    }

    
        let act = document.getElementsByClassName("active");
        act[0].className = act[0].className.replace(" active", "");
        event.target.className += " active";

}