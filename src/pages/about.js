import React from "react";
import Layout from "../components/Layout";
import { container, aboutGrid, aboutText, emojiList } from "../styles/about.module.scss";

export default function about() {
	return (
		<Layout>
			<div className={container}>
				<div className={aboutGrid}>
					<h1>About</h1>
					<div className={aboutText}>
						<p>
							I'm a new developer looking for my first job. After spending most of my adult life
							working dead-end jobs, I decided that I owed it to both myself and my family to find a
							career that would bring me fulfillment and happiness. I took an HTML course in my
							twenties and I remembered how much I enjoyed it. Almost 20 years after taking that
							class I made the decision to dive in head first for a mid-life career change to become
							a developer, so I enrolled in the Information Technology at UMass Lowell for the
							Spring 2020 semester. I earned my degree this spring and it wouldn't have been
							possible without the support from my family; especially my wife, who has been there
							through thick and thin and has encouraged me to succeed every step of the way.
						</p>
						<br />
						<p>
							I was able to take a variety of courses at UMass that included: HTML, CSS, JavaScript,
							jQuery, SQL, ColdFusion, Python, Ruby, PERL, and C.
						</p>
						<br />
						<p>
							Beyond school, I spend any free moment I have trying to learn more about development.
							Whether it's watching a Udemy course while washing dishes, listening to a podcast in
							the car, or reading a book waiting to see the doctor, I'm constantly trying to do
							whatever I can to reach my goal of becoming a developer.
						</p>
						<br />
						<p>
							When I'm not watching YouTube tutorials, reading docs, thinking about code, or trying
							to learn something new you'll find me spending time with my family.
						</p>
					</div>
					<div className={emojiList}>
						<div>
							<p>
								<span role="img" aria-label="img">
									💑
								</span>{" "}
								Husband
							</p>
							<p>
								<span role="img" aria-label="img">
									👨‍👧‍👧
								</span>{" "}
								Father of Two
							</p>
						</div>
						<div>
							<p>
								<span role="img" aria-label="img">
									🐕
								</span>{" "}
								Dog Dad
							</p>
							<p>
								<span role="img" aria-label="img">
									☕
								</span>{" "}
								Black Coffee Drinker
							</p>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}
