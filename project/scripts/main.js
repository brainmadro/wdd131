const conceptContainer$ = document.querySelectorAll('.concept-container')

conceptContainer$.forEach(element => {
	const conceptContainerTitles$ = element.querySelector('h2')
	conceptContainerTitles$.addEventListener('click', (e) => {
		e.preventDefault()
		const content$ = element.children[1]
		content$.classList.toggle('expanded')
	})
});

if (document.location.pathname == '/project/newsletter.html') {
	addNewsletterSubscribers()
}

if (document.location.pathname == '/project/index.html' || document.location.pathname == '/project/') {
	const subscribers = getNewsletterSubscribers()
	const subscribers$ = document.querySelector('#subscribers')
	subscribers$.textContent = `Total subscribers: ${subscribers}`;
}

coolMessage()
console.log(document.location);

function addNewsletterSubscribers() {
	const subscribers = localStorage.getItem('subscribers')
	
	if (subscribers) {
		localStorage.setItem('subscribers', Number(subscribers) + 1)
	} else {
		localStorage.setItem('subscribers', 1)
	}
}

function getNewsletterSubscribers() {
	return localStorage.getItem('subscribers') ?? 0
}

function coolMessage() {
	console.log(`A Santa dog, lived as a devil god at NASA`);

	const words = `A Santa dog, lived as a devil god at NASA`.split(' ').map(x => {
		return x.replace(',', '')
	});
	
	// Reverse the words array and log the reversed message
	const lowercaseMessage = words.join(' ').toLowerCase();
	console.log(`Lowercase message: ${lowercaseMessage}`);

	const joinedMessage = words.join('').toLowerCase();
	console.log(`Joined message: ${joinedMessage}`);
	console.log("Read it again");
}
