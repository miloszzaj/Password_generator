const chars = 'AĄBCĆDEĘFGHIJKLŁMNŃOÓPRSŚTUWYZŹŻ0123456789?;:!$%&()[]<>?|><+=';

const btn = document.querySelector('button');
const section = document.querySelector('section');

const codesNumber = 5
const charsNumber = 10

const codesGenerator = () => {
	section.innerHTML = ''
    let number = 0;
	for (let i = 0; i < codesNumber; i++) {
		let code = ''
			for (let j = 0; j < charsNumber; j++) {
			const index = Math.floor(Math.random() * chars.length);
			code += chars[index]
		}
		console.log(code)

		const divBig = document.createElement('div')
		divBig.classList.add("big")
		section.appendChild(divBig)

		const containerWithCode = document.createElement('textarea');
		containerWithCode.setAttribute("value", `${code}`)
		containerWithCode.classList.add("small")
		divBig.appendChild(containerWithCode)
	
        const elo = document.getElementsByClassName("small")[number];
		const el = document.createElement('button')
		el.innerText = "Kopiuj"
		el.classList.add("copy")
		containerWithCode.before(el)
		number++

		const copyText = () => {
			const sth = divBig.querySelector(".small");
			sth.select()
			document.execCommand("copy")
			}
			document.addEventListener('click', copyText);
			let indexText = 0
			const typing = setInterval(() => {
			containerWithCode.textContent += code[indexText];
			indexText += 1
			if (indexText === 10) clearInterval(typing);
		}, 100)
	}
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



