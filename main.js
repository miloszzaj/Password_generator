const chars = 'AĄBCĆDEĘFGHIJKLŁMNŃOÓPRSŚTUWYZŹŻ0123456789?.,;:!@$%&()<>?|><+=';

const btn = document.querySelector('button');
const section = document.querySelector('section');

const codesNumber = 5;
const charsNumber = 10;

const codesGenerator = () => {
    section.innerHTML = "";
    let code = '';
for (let i = 0; i < codesNumber; i++) {
        // const code = "text";
        for (let i = 0; i < charsNumber; i++) {
            const index = Math.floor(Math.random() * chars.length);
            code += chars[index];
        }
        const div = document.createElement('div');
    const typing = setInterval(() => textTyping(div, code), 500);
    console.log(typing);
    if (code.length === 10) clearInterval(typing);
    section.appendChild(div);
    
    }
}
const textTyping = (div, code) => {
    let indexText = 0;
            div.textContent += code[indexText];
    indexText++;
        // if (indexText == code.length) clearInterval(typing);

}
btn.addEventListener('click', codesGenerator)

