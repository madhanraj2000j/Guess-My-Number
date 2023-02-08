const randomNumber = Math.floor(Math.random() * 100)+1;

let score = 20;



document.querySelector('.btn-submit').
addEventListener('click',function(){
    const userInput = Number(document.querySelector('.user-input').value);

    if (userInput<1 || userInput>100){
        
        document.querySelector('.error-message').style.display = 'block';
        document.querySelector('.error-message').innerText = 'Enter a valid input';

    }else{
        if (score>1){
         if (userInput === randomNumber){
            document.querySelector('.error-message').style.display = 'block';
            document.querySelector('.error-message').style.color = 'green';
            document.querySelector('.error-message').innerText = `You Won, score is ${score}`;

         }else if(userInput > randomNumber){
            document.querySelector('.error-message').style.display = 'block';
            document.querySelector('.error-message').style.color = 'red';
            document.querySelector('.error-message').innerText = `number is higher`;
            score = score -1;
            document.querySelector('.score').innerText = `${score}`;
    }else if (userInput < randomNumber){
        document.querySelector('.error-message').style.display = 'block';
            document.querySelector('.error-message').style.color = 'red';
            document.querySelector('.error-message').innerText = `number is lower`;
            score = score -1;
            document.querySelector('.score').innerText = `${score}`;
    }
        }
        
        else{
            document.querySelector('.error-message').style.display = 'block';
            document.querySelector('.error-message').innerText = 'Game Over';
        }

    }
    console.log(userInput);
});