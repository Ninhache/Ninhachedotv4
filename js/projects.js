"use strict";

function projects_events() {
	let sort_by = "Date";
	let done;
	let elements;

	async function in_animation_check() {
		for (let i = 0; i < elements?.length; i++) {
			if (!done[i] && is_in_viewport(elements[i])) {
				if (elements[i].classList.contains("other_project")) {
					await sleep(100); // use css ??
				}

				elements[i].style.opacity = "1";
				elements[i].style.transform = "translateY(0)";
				done[i] = true;
				await sleep(300);
			}
		}
	}

	window.addEventListener("scroll", (e) => {
		in_animation_check();
	});

	window.addEventListener("resize", (e) => {
		in_animation_check();
	});

	function video_events() {
		let videos = document.querySelectorAll(
			"#projects_section .project_view video"
		);

		for (let video of videos) {
			video.addEventListener("canplay", () => {
				video.play();
				video.parentNode.querySelector("img").style.opacity = "0";
			});
		}
	}

	function add_project(project, inverted, featured) {
		let tags = "";

		if (featured) {
			for (let tag of project.tags) {
				tags += `<a href="${tag.url}" target="_blank">${tag.name}</a>`;
			}

			if (window.innerWidth > 780) {
				const idk = document.querySelector("#projects_section .projects_content");

				idk.innerHTML += `
					<div class="in_animation project ${inverted ? "inverted" : ""}">
						<div class="project_text">
							<div class="type">
								<span>${project.date}</span>
								<span>•</span>
								<span>${project.type}</span>
							</div>
							<a class="project_title" href="${project.links[0]}" target="_blank">${project.title}</a>
							<div class="text"><p>${project.description}</p></div>
							<div class="tags">${tags}</div>
							<div class="links">
							${
								(project.links[1] == "none" ? "" : `
								<a class="github" href="${project.links[1]}" target="_blank">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.05 20.31"><g><path d="M7.26 16.34c-4.11 1.23-4.11-2.06-5.76-2.47M13 18.81V15.62a2.78 2.78 0 0 0-.77-2.15c2.59-.28 5.3-1.26 5.3-5.76a4.46 4.46 0 0 0-1.23-3.08 4.18 4.18 0 0 0-.08-3.11s-1-.29-3.22 1.22a11 11 0 0 0-5.76 0C5 1.23 4 1.52 4 1.52A4.18 4.18 0 0 0 4 4.63 4.48 4.48 0 0 0 2.73 7.74c0 4.46 2.72 5.44 5.31 5.76a2.8 2.8 0 0 0-.78 2.12v3.19"/></g></svg>
									<span class="bubble">See the code</span>
								</a>
								`) +
							(project.links[2] == "none" ? "" : `
								<a class="test" href="${project.links[2]}" target="_blank">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.09 18.64"><g><path d="M14.55 7.52 4.62 1.78A2.08 2.08 0 0 0 1.5 3.58V15.05a2.08 2.08 0 0 0 3.12 1.8l9.93-5.73A2.08 2.08 0 0 0 14.55 7.52Z"/></g></svg>
									<span class="bubble">Test the program</span>
								</a>
								`)
							}
							</div>
						</div>
						<div class="project_view">
							<a href="${project.links[0]}" target="_blank">
								<img src="${project.image}"/>
								${
									// Add a video if there's one
									(project.video == "none" ? ""
									: `
									<video loop muted preload="metadata">
										<source src="${project.video}" type="video/mp4"/>
									</video>
									`)
								}
							</a>
						</div>
					</div>`;
			} else {
				const projectDiv = document.querySelector("#projects_section .projects_content");

				projectDiv.innerHTML += `
				<div class="in_animation project" style="background-image: url(${project.image});">
					<div class="project_text">
						<div class="type">
							<span>${project.type}</span>
							<span>•</span>
							<span>${sDate}</span>
						</div>
						<a class="project_title" href="${project.links[0]}" target="_blank">${project.title}</a>
						<div class="text">
							<p>${project.description}</p>
						</div>
						<div class="tags">${tags}</div><div class="links">
							${
								// Checking if there's a link for a Git
								(project.links[1] == "none" ? "" : `
									<a class="github" href="${project.links[1]}" target="_blank">
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.05 20.31"><g><path d="M7.26 16.34c-4.11 1.23-4.11-2.06-5.76-2.47M13 18.81V15.62a2.78 2.78 0 0 0-.77-2.15c2.59-.28 5.3-1.26 5.3-5.76a4.46 4.46 0 0 0-1.23-3.08 4.18 4.18 0 0 0-.08-3.11s-1-.29-3.22 1.22a11 11 0 0 0-5.76 0C5 1.23 4 1.52 4 1.52A4.18 4.18 0 0 0 4 4.63 4.48 4.48 0 0 0 2.73 7.74c0 4.46 2.72 5.44 5.31 5.76a2.8 2.8 0 0 0-.78 2.12v3.19"/></g></svg>
										<span class="bubble">See the code</span>
									</a>
									`)
								+
								// Checking if there's a link for test the program
								(project.links[2] == "none" ? "" : `
									<a class="test" href="${project.links[2]}" target="_blank">
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.09 18.64"><g><path d="M14.55 7.52 4.62 1.78A2.08 2.08 0 0 0 1.5 3.58V15.05a2.08 2.08 0 0 0 3.12 1.8l9.93-5.73A2.08 2.08 0 0 0 14.55 7.52Z"/></g></svg>
										<span class="bubble">Test the program</span>
									</a>
								`)
							}
							</div>
						</div>
					</div>`;
			}
		} else {
			for (let tag of project.tags) {
				tags += `<span>${tag.name}</span>`
			};

			const otherProjectDivs = document.querySelector("#projects_section .other_projects_content");

			otherProjectDivs.innerHTML +=`
				<div class="in_animation other_project">
					<div class="other_project_content">
						<div class="header">
							<div class="logos">
								<img src="${project.logo}"/>
								<div class="links"> ${
									(project.links[1] == "none" ? "" : `
										<a class="github" href="${project.links[1]}" target="_blank">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.05 20.31"><g><path d="M7.26 16.34c-4.11 1.23-4.11-2.06-5.76-2.47M13 18.81V15.62a2.78 2.78 0 0 0-.77-2.15c2.59-.28 5.3-1.26 5.3-5.76a4.46 4.46 0 0 0-1.23-3.08 4.18 4.18 0 0 0-.08-3.11s-1-.29-3.22 1.22a11 11 0 0 0-5.76 0C5 1.23 4 1.52 4 1.52A4.18 4.18 0 0 0 4 4.63 4.48 4.48 0 0 0 2.73 7.74c0 4.46 2.72 5.44 5.31 5.76a2.8 2.8 0 0 0-.78 2.12v3.19"/></g></svg>
										</a>
										`)
										+
										(project.links[2] == "none" ? "" : `
										<a class="test" href="${project.links[2]}" target="_blank">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.09 18.64"><g><path d="M14.55 7.52 4.62 1.78A2.08 2.08 0 0 0 1.5 3.58V15.05a2.08 2.08 0 0 0 3.12 1.8l9.93-5.73A2.08 2.08 0 0 0 14.55 7.52Z"/></g></svg>
										</a>
										`)
								}</div>
							</div>
							<a href="${project.links[0]}" target="_blank" class="project_title">${project.title}</a>
							<p class="text">${project.description}</p>
						</div>
						<div class="tags">${tags}</div>
					</div>
				</div>`;
		}
	}

	function generate(data) {
		document.querySelector("#projects_section .projects_content").innerHTML = "";
		document.querySelector("#projects_section .other_projects_content").innerHTML = "";
		let inverted = true;
		let i = 0;

		const monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];

		if (sort_by == "Date") {
			// Month are 0 indexed
			// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Date

			data?.projects?.sort((a, b) => {
				const aArr = a.date.split(" ");
				const bArr = b.date.split(" ");

				const aDate = new Date(aArr[1], monthNames.indexOf(aArr[0]));
				const bDate = new Date(bArr[1], monthNames.indexOf(bArr[0]));

				return bDate - aDate;
			});
		}

		function shuffle(array) {
			let currentIndex = array.length,
				randomIndex;

			while (currentIndex != 0) {
				randomIndex = Math.floor(Math.random() * currentIndex);
				currentIndex--;

				[array[currentIndex], array[randomIndex]] = [
					array[randomIndex],
					array[currentIndex],
				];
			}

			return array;
		}

		if (sort_by === "Random") {
			shuffle(data.projects);
		}

		for (let project of data.projects) {
			let featured;

			if (sort_by === "Date" || sort_by === "Random") {
				featured = i < 7;
			} else {
				featured = project.categories.includes(sort_by);
			}

			if (featured) {
				inverted = !inverted;
			}

			add_project(project, inverted, featured);
			i++;
		}

		video_events();

		done = [];
		elements = document.querySelectorAll("#projects_section .in_animation");

		for (let _ of elements) done.push(false);

		in_animation_check();
	}

	function generate_projects() {
		read_json("resources/jsons/projects.json", generate);
	}

	let prev_width = window.innerWidth;
	generate_projects();

	window.addEventListener("resize", () => {
		if (
			(prev_width >= 780 && window.innerWidth <= 780) ||
			(prev_width <= 780 && window.innerWidth >= 780)
		) {
			generate_projects();
			prev_width = window.innerWidth;
		}
	});

	document
		.querySelectorAll("#projects_section .sort_choices .choice")
		.forEach((el) => {
			el.addEventListener("click", () => {
				sort_by = el.innerHTML;
				generate_projects();

				document
					.querySelectorAll("#projects_section .sort_choices .choice")
					.forEach((el) => {
						el.classList.remove("selected");
					});

				el.classList.add("selected");
			});
		});
}
