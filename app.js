$(document).ready(() => {
	const userNames = {
		github: "prmarquesz",
		youtube: "",
		linkedin: "prmarquesz",
		facebook: "prmarquesz",
		instagram: "prmarquesz",
		twitter: "prmarquesz",
	}

	function changeSocialMediaLinks() {
		for (let li of socialLinks.children) {
			const social = li.getAttribute('class')
			if (social == "linkedin")
				li.children[0].href = `https://${social}.com/in/${userNames[social]}`
			else
				li.children[0].href = `https://${social}.com/${userNames[social]}`
		}
	}

	function getGithubProfileInfos() {
		const url = `https://api.github.com/users/${userNames.github}`
		
		fetch(url).then(response => response.json()).then(data => {
			userImage.src = data.avatar_url
			userName.textContent = data.name
			userGithubURL.href = data.html_url
			userLogin.textContent = data.login
			userBio.textContent = data.bio
		})
	}
	getGithubProfileInfos()
	changeSocialMediaLinks()
});
