`use strict`;

const circleRunWords = () => {
	const text = document.querySelector(".profile_text p");

	text.innerHTML = text.textContent.split("").map((char, i) => `<span style="transform: rotate(${i * 9.2}deg)">${char}</span>`).join("");
}

circleRunWords();