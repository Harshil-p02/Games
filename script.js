const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let userChoice = button.getAttribute('id');
        console.log(userChoice);
    })
})