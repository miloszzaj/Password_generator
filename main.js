const chars = 'AĄBCĆDEĘFGHIJKLŁMNŃOÓPRSŚTUWYZŹŻ0123456789?.,;:!@$%&()<>?|><+=';

const btn = document.querySelector('button');
const section = document.querySelector('section');

const codesNumber = 5;
const charsNumber = 10;

const codesGenerator = () => {
	section.innerHTML = '';

	for (let i = 0; i < codesNumber; i++) {
		let code = '';
		for (let j = 0; j < charsNumber; j++) {
			const index = Math.floor(Math.random() * chars.length);
			code += chars[index];
		}

		const div = document.createElement('div');

		let indexText = 0;

		const typing = setInterval(() => {
			div.textContent += code[indexText];
			indexText += 1;
			if (indexText === 10) clearInterval(typing);
		}, 100);

		section.appendChild(div);
	}
};

btn.addEventListener('click', codesGenerator);
