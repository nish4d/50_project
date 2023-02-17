const textArea = document.getElementById('text-area');


// document.getElementById('text').addEventListener('click', function(){
//     // const text = textArea.value;
//     alert(text);
// })

document.getElementById('bold').addEventListener('click', function(){
    if(textArea.style.fontWeight == 'bold'){
        textArea.style.fontWeight = 'normal';
    }else{
        textArea.style.fontWeight = 'bold';
    }
    
})
document.getElementById('italic').addEventListener('click', function(){
    if(textArea.style.fontStyle == 'italic'){
        textArea.style.fontStyle = 'normal';
    }else{
        textArea.style.fontStyle = 'italic';
    }
    
})
document.getElementById('underline').addEventListener('click', function(){
    if(textArea.style.textDecoration == 'underline'){
        textArea.style.textDecoration = 'none';
    }else{
        textArea.style.textDecoration = 'underline';
    }
    
})
document.getElementById('left').addEventListener('click', function(){
    if(textArea.style.textAlign == 'left'){
        textArea.style.textAlign = '';
    }else{
        textArea.style.textAlign = 'left';
    }
    
})
document.getElementById('right').addEventListener('click', function(){
    if(textArea.style.textAlign == 'right'){
        textArea.style.textAlign = '';
    }else{
        textArea.style.textAlign = 'right';
    }
    
})
document.getElementById('center').addEventListener('click', function(){
    if(textArea.style.textAlign == 'center'){
        textArea.style.textAlign = '';
    }else{
        textArea.style.textAlign = 'center';
    }
    
})
document.getElementById('justify').addEventListener('click', function(){
    if(textArea.style.textAlign == 'justify'){
        textArea.style.textAlign = '';
    }else{
        textArea.style.textAlign = 'justify';
    }
    
})
document.getElementById('colors').addEventListener('input', function(e){
    // alert('color')
    const color = document.getElementById('colors').value;
//    let val= e.value;
   textArea.style.color = color;
   
})
document.getElementById('sizes').addEventListener('click', function(e){
    // const text = textArea.value;
    const sizes = e.target.value;
    textArea.style.fontSize = sizes + 'px';
})
document.getElementById('colors').addEventListener('change', function(e){
    // alert('color')
    // const color = document.getElementById('colors').value;
   let val= e.target.value;
   textArea.style.color = color;
   
})
document.getElementById('uppercase').addEventListener('click', function(){
    if(textArea.style.textTransform == 'uppercase'){
        textArea.style.textTransform = '';
    }else{
        textArea.style.textTransform = 'uppercase';
    }
})