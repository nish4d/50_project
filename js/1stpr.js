const pannels=document.querySelectorAll('.pannel')
pannels.forEach(
    (pannel) =>{
        pannel.addEventListener('click', () =>{
            removeActiveclasses()
            pannel.classList.add('active');
        })
    }
)

function removeActiveclasses(){
    pannels.forEach(
        pannel =>{
            pannel.classList.remove('active');

        }
    )}