const chars = 'AĄBCĆDEĘFGHIJKLŁMNŃOÓPRSŚTUWYZŹŻ0123456789?.,;:!@$%&()<>?|><+=';

const btn = document.querySelector('button');
const section = document.querySelector('section');

const codesNumber = 5;
const charsNumber = 10;

const codesGenerator = () => {
    section.innerHTML = "";
    for (let i = 0; i < codesNumber; i++) {
        // const code = "text"; 
        let code = "";
        for (let i = 0; i < charsNumber; i++) {
            const index = Math.floor(Math.random() * chars.length);
code += chars[index];
        }
    
        const div = document.createElement('div');
        div.textContent = code;
        section.appendChild(div);
    }
}



btn.addEventListener('click', codesGenerator)

