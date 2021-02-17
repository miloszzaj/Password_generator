const chars = 'AĄBCĆDEĘFGHIJKLŁMNŃOÓPRSŚTUWYZŹŻ0123456789?;:!@$%&()[]<>?|><+=';

const btn = document.querySelector('button');
const section = document.querySelector('section');

const codesNumber = 5;
const charsNumber = 10;

const codesGenerator = () => {
	section.innerHTML = '';
    let piwo = 0;
	for (let i = 0; i < codesNumber; i++) {
		let code = '';
			for (let j = 0; j < charsNumber; j++) {
			const index = Math.floor(Math.random() * chars.length);
			code += chars[index];
		}

	console.log(code);

		const divBig = document.createElement('div');
		section.appendChild(divBig);
		const div = document.createElement('div');
		div.classList.add("small");
		divBig.appendChild(div);
	
        const elo = document.getElementsByClassName("small")[piwo];
		const el = document.createElement('button');
		elo.style.display = "inline";
		el.style.display = "inline";
		divBig.before(el, elo);
		piwo++;

			let indexText = 0;
			const typing = setInterval(() => {
			div.textContent += code[indexText];
			indexText += 1;
			if (indexText === 10) clearInterval(typing);
		}, 100);
		
};
}
// const div = document.querySelector('div');
// // div.innerText =
// // const el = document.createElement('div');
// // div.appendChild(el);
// const clip = document.createElement('button');
// clip.innerText = 'kopiuj';
// // div.insertBefore(clip, el); 
// div.appendChild(clip);
// // console.log(clip);
// // div.appendChild(clip);
// console.log(section);};
btn.addEventListener('click', codesGenerator);



