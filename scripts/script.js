let begin = false;
let paraOne = false;
let paraTwo = false;
let paraThree = false;
let paraFour = false;

document.addEventListener('click', transition);

function transition(){
  if(!begin){
    let prompt = document.getElementById('userPrompt');
    prompt.style.color = '#FF6A5C';
    prompt.addEventListener('transitionend', intro);
  }else if(begin && !paraOne){
    paraOne = true;
    let text = document.getElementById('paraOne');
    let next = document.getElementById('paraTwo');
    text.style.transform = 'translateY(-72vh) scale(0.55)';
    text.style.marginLeft = '15px';
    next.style.transform = 'translateY(-65vh)';
  }else if(begin && paraOne && !paraTwo){
    paraTwo = true;
    let text = document.getElementById('paraTwo');
    let next = document.getElementById('paraThree');
    text.style.transform = 'translateY(-82vh) scale(0.55)';
    text.style.marginLeft = '15px';
    next.style.transform = 'translateY(-85vh)';
  }else if(begin && paraOne && paraTwo && !paraThree){
    paraThree = true;
    let text = document.getElementById('paraThree');
    let next = document.getElementById('paraFour');
    text.style.transform = 'translateY(-96vh) scale(0.55)';
    text.style.marginLeft = '15px';
    next.style.transform = 'translateY(-98vh)';
  }else if(begin && paraOne && paraTwo && paraThree && !paraFour){
    paraFour = true;
    let text = document.getElementById('paraFour');
    let next = document.getElementById('paraFive');
    text.style.transform = 'translateY(-108vh) scale(0.55)';
    text.style.marginLeft = '15px';
    next.style.transform = 'translateY(-112vh)';
  }
};

function intro(e){
  if(e.propertyName !== 'color') return;
  let x = document.getElementById('introduction')
  let y = document.getElementById('paraOne');
  let z = document.getElementById('userPrompt');
  x.style.transform = 'scale(0.15)';
  x.style.marginLeft = '10px';
  y.style.transform = 'translateY(-50vh)';
  z.style.display = 'none';
  begin = true;
}
