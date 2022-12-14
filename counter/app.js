let count = 0;

const value = document.querySelector("#value");
const button = document.querySelectorAll(".btn");


button.forEach(function (btn){
    btn.addEventListener('click', function(e){
        const style = e.currentTarget.classList;

        if(style.contains('decrease')){
            count--;
        }else if(style.contains('increase')){
            count++;
        }else {
            count = 0;
        }

        if(count > 0){
            value.style.color = 'green'
        }
        if(count < 0){
            value.style.color = 'red'
        }
        if(count === 0){
            value.style.color = 'black'
        }
        value.textContent = count;
    });
}); 