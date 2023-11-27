window.addEventListener('scroll', function() {
    if(window.pageYOffset >= 200){
        document.getElementById('navUp').style.display = 'flex';
    }else{
        document.getElementById('navUp').style.display = 'none';
    };
});


function addBasket(){
    const clickCombos = document.querySelectorAll('#clickCombo');
    const textCfm = document.getElementById('text-confirmation');
    let counters = document.querySelectorAll('#counter');
    document.addEventListener('click', function(event){
        if(event.target.classList.contains("clickCombo")){
            document.getElementById('confirmation').style.display = 'flex';
            for(let clickCombo of clickCombos){
                if(event.target == clickCombo){
                    textCfm.textContent = clickCombo.value;
                };
            }
            event.target.parentElement.querySelector("#counter").style.display = 'flex';
            event.target.parentElement.querySelector("#clickCombo").style.display = 'none';
        }
    });

    Array.prototype.forEach.call(document.querySelectorAll('.decrease'), function (v) {
        v.addEventListener('click', dec);
    })

    Array.prototype.forEach.call(document.querySelectorAll('.increase'), function (v) {
        v.addEventListener('click', inc);
    })

    function dec(event) {
        let div = this.parentElement;
        let input = div.children.item(1)
        input.setAttribute('value', (parseInt(input.getAttribute('value')) - 1).toString());
        if(input.value <= 0){
            for(let counter of counters){
                counter.style.display = 'none';
            };
            for(let clickCombo of clickCombos){
                clickCombo.style.display = 'block';
            };
        }
    }

    function inc() {
        let div = this.parentElement;
        let input = div.children.item(1)
        input.setAttribute('value', (parseInt(input.getAttribute('value')) + 1).toString());
    }
}addBasket();
//ДОДЕЛАТЬ ПОЯВЛЕНИЯ КНОПКИ 
/*for(let clickCombo of clickCombos){
            clickCombo.addEventListener('click', (event)=>{
                document.getElementById('confirmation').style.display = 'flex';
                if(event.target == clickCombo){
                    textCfm.textContent = clickCombo.value;
                };
                event.target.parentElement.querySelector("#counter").style.display = 'flex';
                event.target.parentElement.querySelector("#clickCombo").style.display = 'none';
            });
    };*/


/*function appNum(){
        document.addEventListener('click', function(event){
            if(event.target.classList.contains("increase")){
                ++event.target.parentElement.querySelector("input").value
            }else if(event.target.classList.contains("decrease")){
                --event.target.parentElement.querySelector("input").value
            };
        });
    }appNum();*/

function closeCfm(){
    document.getElementById('confirmation').style.display = 'none';
};


