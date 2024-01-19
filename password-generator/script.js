const generatePassword = () => {
   const length = 20;

    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]\:;?><,./-=';

    let str = "";
    for(let i=0; i<length; i++){
        str += charset.charAt(Math.floor(Math.random() * charset.length))
    }
    
    return str;

}
// console.log(generatePassword());
const btn = document.querySelector('.btn');
const h3 = document.querySelector('h3');
// console.log(btn)
btn.addEventListener('click', () => {
    h3.textContent = generatePassword();
    h3.style.color = '#000'
});

const img = document.querySelector('#search-bar-img');

img.addEventListener('click', () => {
   navigator.clipboard.writeText(h3.textContent).then(() => {console.log('successfully copied')}).catch((err) => console.log(err));
    h3.innerText = 'Generate Password ...';
    h3.style.color = '#888'
});