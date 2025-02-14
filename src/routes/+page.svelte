<script lang="ts">
	import { onMount } from 'svelte';
	import SEO from '$lib/components/SEO.svelte';

	let isMobile = false;
	let hoveredCard: number | null = null;

	onMount(() => {
		const mediaQuery = window.matchMedia('(max-width: 768px)');
		isMobile = mediaQuery.matches;
		mediaQuery.addListener((e) => (isMobile = e.matches));
	});

	const educationData = [
		{
			degree: 'Doctor of Pharmacy (PharmD)',
			institution: 'Campbell University',
			year: '2006',
			highlights: [
				'Anatomy and Physiology',
				'Biochemistry',
				'Drug Information Literature Evaluation',
				'Microbiology',
				'Immunology',
				'Biopharmacuetics',
				'Clinical Biochemistry',
				'Pharmacy Marketing and Management',
				'Pharmacuetics',
				'Pharmacokinetics',
				'Pharmacology',
				'Biology of Disease',
				'Advanced Financial Management',
				'Non-prescription Products',
				'Research Design and Biostatistics',
				'Therapeutics',
				'Jurisprudence',
				'Therapeutic Drug Monitoring',
				'Community Pharmacy Management',
				'Special Research Projects in Pharmacy'
			],
			icon: '/campbell-logo.png',
			key_projects: []
		},
		{
			degree: 'Master of Business Administration (MBA)',
			concentration: 'Graduate Certificate in Finance',
			institution: 'East Carolina University',
			year: '2010',
			highlights: [
				'Financial and Managerial Accounting',
				'Financial Management',
				'Analysis of the Business and Economic Environment',
				'Real Estate Analysis',
				'Accounting for Decision Making',
				'Financial Management',
				'Management Information Systems',
				'Comparative Management',
				'Government Relations of Business',
				'Investment Management',
				'Marketing Management',
				'Portfolio Theory, Construction, and Management',
				'Marketing Strategy',
				'Operations and Supply Chain Management',
				'Management Science',
				'Advanced Writing for Business and Industry',
				'Topics in Finance',
				'Strategic Management',
				'Organizational Behavior',
				'Statistical Methods'
			],
			icon: '/ecu-logo.png',
			key_projects: []
		},
		{
			degree: 'Master of Computer Science (MSCS)',
			concentration: 'Data Mining and Intelligent Systems',
			institution: 'University of Tennessee',
			year: '2024',
			highlights: [
				'Machine Learning',
				'Deep Learning',
				'Compilers and Runtime Systems',
				'Data Mining and Analytics',
				'Artificial Intelligence',
				'Advanced Software Engineering',
				'Digital Archeology',
				'Applied Cryptography',
				'Web & Cloud Computing',
				'Computer Networks'
			],
			icon: '/UTlogo.png',
			key_projects: []
		},
		{
			degree: 'Lean Six Sigma Black Belt (LSSBB)',
			concentration: 'Healthcare',
			institution: 'Villanova',
			year: '2014',
			highlights: [],
			icon: '/villanova icon.png',
			key_projects: []
		}
	];

	const projectCategories = [
		{
			title: 'Technology Implementations',
			icon: '/ML_computer_icon.jpeg',
			items: [
				'Single hospital, multi-site/multi-facility, and health system Electronic Health Record (EHR) implementations',
				'Multiple vendor pharmacy automation Implementations',
				'Single hospital, multi-site/multi-facility, and health system 340B Third-party Administrator (TPA) implementations with multiple vendors',
				'Home grown technology combined with processes to supplement or be used as stop gaps measures pending technology implementations'
			]
		},
		{
			title: 'Data Governance',
			icon: '/data_governance.png',
			items: [
				'Connecting pharmacy departments with health system data governance and master data management (MDM)',
				'Establishing data governance processes and oversight teams',
				'Instituting standard operating procedures to reinforce governance and master data management within analytics teams',
				'Aligning workteams across business units and corporate information technology (IT) to foster collaboration'
			]
		},
		{
			title: 'Application Development',
			icon: '/application_development.png',
			items: [
				'Web development: examples <a href="https://340bdruginfo.com/" class="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">340BDrugInfo.com</a>, this portfolio site.',
				'CrabChat (Rust based secure chat application)',
				'Application programming interface (API) development, full stack development, and websocket programming',
				'Agile development and project management',
				'Cloud services stack:  Azure and AWS'
			]
		},
		{
			title: 'Data Science',
			icon: '/data_science_icon.png',
			items: [
				'Financial, clinical, and transactional based analysis of health system data using multiple statistical techniques',
				'Finding and exploiting patterns in data to drive operational efficiency and improve patient outcomes',
				'Analysis of data collected via web scraping with Python packages (httpx and beautifulsoup4)',
				'Social network analysis',
				'Sentiment analysis of health system data using natural language processing (NLP) techniques to help define topics and trends',
				'Latent space cluster analysis of the clinical documentation as opposed to large language models (LLM) interpretation of the same data'
			]
		},
		{
			title: 'Machine Learning',
			icon: '/ML_icon.png',
			items: [
				'Forecasting drug costs using classical machine learning and time series techniques',
				'Melanoma detection with OpenCV library and traditional diagnostic markers of skin lesions', //<a href="/melanoma_final_report.pdf" download class="text-primary hover:underline text-md">pdf</a>
				'Detecting ambulation types by collected sound data', //<a href="/projects" class="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">projects</a>
				'Detecting Autism with eye gaze paths', // <a href="/projects" class="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">projects</a>
				'Predicting Titanic Survivors <a href="https://www.kaggle.com/code/robertlowens/notebook8d06f319ad" class="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Kaggle</a>'
			]
		},
		{
			title: 'Deep Learning',
			icon: '/dl_icon.png',
			items: [
				'Real time object detection in sterile compounding suites <a href="/Real_time_Object_Detection_in_Sterile_Compounding_Areas.pdf" download class="text-primary hover:underline text-md">pdf</a>',
				'Using transformers to generate "new" song lyrics in the style of the original artist',
				'Generating images with Generative Adversarial Networks (GANs)',
				'Generate images in the style of Monet <a href="https://www.kaggle.com/robertlowens/bob-cyclegan-pytorch" class="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Kaggle</a>'
			]
		},
		{
			title: 'Natural Language Processing',
			icon: '/nlp_icon.jpeg',
			items: [
				'Using LLMs to analyze clinical documentation and generate insights',
				'Detect disasters from X (Twitter) tweets <a href=" https://www.kaggle.com/code/robertlowens/bowens-7-15" class="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Kaggle</a>',
				'Digit recognition  <a href="https://www.kaggle.com/code/robertlowens/bobassignment8-17" class="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Kaggle</a>',
				'Identification of the Authors Edgar Allan Poe, HP Lovecraft and Mary Shelley with a sample sentence or key words' //<a href="/projects" class="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">projects</a>
			]
		}
	];
	$: abbreviations = projectCategories.map((category) => {
		return category.title
			.split(' ')
			.map((word) => word[0])
			.join('');
	});

	const presentations = [
		{
			title: 'Pharmacy Data Governance Journey',
			event: 'Prominence Data Governance Round Table',
			date: 'Aug 19, 2024',
			description:
				'Describing the journey of a pharmacy department to establish data governance in collaboration with enterprise data governance efforts.',
			link: ''
		},
		{
			title: 'Making IT Work With 340B',
			event: '340B Health',
			date: 'Feb 21, 2023',
			description: 'Chatting with Myles Goldman about the intersection of IT and 340B.',
			link: 'https://podcasts.apple.com/us/podcast/340b-insight/id1511566964?i=1000600877836'
		},
		{
			title: '340B Challenges with Information Technology: Potential Solutions',
			event: '340B Coalition Summer Conference',
			date: 'Aug 2, 2022',
			description:
				'Discussion on 340B implementation, operationalization, and continuous compliance relying on data from various healthcare IT systems.',
			link: null
		},
		{
			title: 'Managing 340B Drug Shortages',
			event: '340B Coalition Summer Conference',
			date: 'Aug 2, 2022',
			description:
				'Addressing strategies for purchasing drugs, achieving access and the 340B price for covered outpatient drugs, and managing drug inventory during shortages.',
			link: 'https://lnkd.in/epw2MKB.'
		},
		{
			title: 'Maximizing Return on Investment in a 340B Environment',
			event: 'Premier Breakthroughs Conference 2020',
			date: 'Aug 5, 2020',
			description:
				'Focusing on 340B auditing processes, ROI justification, and strategies for pharmacy purchasing environment.',
			link: null
		},
		{
			title: 'Justifying Monitoring Activities in a 340B Program',
			event: '340B Coalition Winter Conference 2020',
			date: 'Feb 12, 2020',
			description: null,
			link: null
		},
		{
			title: 'Borrow and Lend/Buy and Sell Techniques',
			event: 'Apexus Advanced 340B Operations Certificate Webinar Series',
			date: 'Oct 12, 2019',
			description:
				'Techniques to achieve operational efficiency while supporting compliance in 340B operations.',
			link: null
		},
		{
			title: 'Management and Documentation of 340B Drug Waste',
			event: '340B Coalition Summer Conference',
			date: 'Jul 11, 2018',
			description: 'Inventory Management: Strategies for Compliance and Efficiency',
			link: null
		},
		{
			title: 'Management and Documentation of 340B Drug Waste',
			event: '340B Health Member Webinars',
			date: 'May 28, 2018',
			description: null,
			link: 'https://www.340bhealth.org/files/Webinar_5_29_18.pdf'
		},
		{
			title: 'The Road to Transforming the Patient Experience',
			event: 'Premier Breakthroughs Conference 2014',
			date: 'Jul 12, 2014',
			description:
				'Focusing on organizational infrastructure for patient-centered care, key performance indicators, and the role of patient-focused multidisciplinary rounds.',
			link: null
		}
	];
	const aboutMeData = {
		personalFacts: [
			'Native of East Tennessee',
			'Father of three active boys',
			'Avid college football fan',
			'Served in the Army National Guard and in active duty following September 11th, 2001',
			'Passionate about ML/AI and data science advancements'
		],
		activities: [
			"Attending my children's sporting events",
			'Reading about the latest ML/AI research',
			'Exploring new developments in data science',
			'Traveling'
		],
		personalStatement:
			"As a native of East Tennessee, a husband, and father of three active boys, I balance my professional pursuits with family life. When I'm not cheering at my children's sporting events, you'll find me deeply engrossed in the latest advancements and research in ML/AI and data science. My passion for technology and innovation is matched only by my enthusiasm for college football and traveling."
	};
</script>

<SEO />

<section id="home" class="flex min-h-screen flex-col items-center justify-center">
	<div class="mb-8 flex max-w-4xl items-center {isMobile ? 'flex-col px-4' : ''}">
		<img
			src="/professional_headshot.jpg"
			alt="pic"
			class="bg-base-200 h-80 w-80 rounded-full {isMobile ? 'mb-6 pt-16' : 'mr-8'} object-cover"
			style="object-position: center 20%;"
		/>
		<div class="max-w-md {isMobile ? 'text-center' : ''}">
			<!-- <h1 class="text-5xl font-bold {isMobile ? 'mb-4' : ''}">Hello there</h1> -->
			<p class="py-6">
				Hi, there. My name is Robert (Bob) Owens. I am a strategic thinker and problem solver with
				education in pharmacy, business, computer science, data science, and intelligent systems.
				With extensive experience in pharmacy administration and leadership at a top non-profit
				health system, I leverage my analytical skills to drive change and develop innovative
				solutions in healthcare. My passion lies in utilizing technology, analytics, and process
				improvement to enhance operational efficiency and improve patient outcomes, making me a
				valuable asset in both clinical and administrative settings. As a veteran of US military, I
				also bring discipline, leadership, and perseverance to the challenges I face.
			</p>
		</div>
	</div>
	<div class="max-w-2xl text-center {isMobile ? 'px-4' : ''}">
		<h2 class="mb-4 text-2xl font-semibold">Mission Statement</h2>
		<p class="italic">
			"To leverage my diverse skill set in healthcare, technology, and leadership to drive
			innovative solutions that enhance patient care and operational efficiency in healthcare
			systems."
		</p>
	</div>
</section>

<section
	id="expertise"
	class="flex flex-col items-center justify-center py-16 bg-background{isMobile ? 'px-4' : ''}"
>
	<div class="mx-auto max-w-4xl">
		<h2 class="mb-8 text-center text-4xl font-bold">Areas of Expertise</h2>
		<ul class="list-disc space-y-4 {isMobile ? 'pl-6' : 'pl-0'}">
			<li>
				Applying <strong>existing and emerging technologies</strong> to health system problems
			</li>
			<li>
				Applying <strong>data science</strong>, <strong>artificial intelligence (AI)</strong>, and
				<strong>machine learning (ML)</strong> to health system problems
			</li>
			<li>
				Finding and evaluating <strong>organizational changes</strong> to improve health system
				<strong>financial standing</strong>
			</li>
			<li>
				<strong>Drug discount programs</strong>, <strong>supply chain optimization</strong>, and
				optimizing health system <strong>drug costs</strong>
			</li>
			<li>
				Evaluating, creating, and implementing health system <strong>data infrastructures</strong>
			</li>
			<li>Creating and growing <strong>specialized enterprise teams</strong> in health systems</li>
			<li>
				Turning <strong>novel ideas</strong> and <strong>home grown solutions</strong> into
				<strong>data tools</strong>
				and/or <strong>technology products</strong>
			</li>
		</ul>
	</div>
</section>

<!-- <section id="bio" class="py-8 {isMobile ? 'px-4' : 'py-16'} flex items-center justify-center">
	<div class="max-w-{isMobile ? 'full' : '4xl'} mx-auto">
	  <h1 class="text-3xl {isMobile ? '' : 'mr-4 ml-4'} font-bold mb-6 text-center">Biography</h1>
	  <p class="{isMobile ? 'text-sm' : ''}">
		  With a robust background in health system pharmacy and technology, I have dedicated my career to improving healthcare systems through leadership, process improvement, data analytics, and machine learning. 
		  Applying my formal education in healthcare, business, and computer science has afforded me a unique perspective on health care problems.  
		  I have been involved in a myriad of projects requiring complex data analysis in areas with high degree of regulatory and financial implications for the health system.  
		  My experience in pharmacy administration has allowed me to lead transformative projects that integrate emerging technologies and innovative approaches into pharmacy operations.
		</p>
	  </div>
  </section> -->

<!-- bg-gradient-to-br from-primary/10 to-secondary/10 -->
<section id="bio" class="py-16">
	<div class="mx-auto max-w-4xl px-4">
		<h1 class="mb-6 text-center text-4xl font-bold">Biography</h1>
		<div class=" p-8">
			<p class="leading-relaxed">
				With a robust background in health system pharmacy and technology, I have dedicated my
				career to improving healthcare systems through leadership, process improvement, data
				analytics, and machine learning. Applying my formal education in healthcare, business, and
				computer science has afforded me a unique perspective on health care problems. I have been
				involved in a myriad of projects requiring complex data analysis in areas with high degree
				of regulatory and financial implications for the health system. My experience in pharmacy
				administration has allowed me to lead transformative projects that integrate emerging
				technologies and innovative approaches into pharmacy operations.
			</p>
		</div>
	</div>
</section>

<section id="education" class="flex flex-col items-center justify-center py-20">
	<h2 class="mb-8 text-center text-4xl font-bold">Education</h2>
	<div class="grid grid-cols-1 {isMobile ? '' : 'md:grid-cols-2'} mx-auto max-w-4xl gap-8">
		{#each educationData as { degree, institution, year, concentration, highlights, icon }, index}
			<div
				class="education-card bg-base-100 flex items-start justify-between rounded-lg p-4 shadow-lg"
				on:mouseenter={() => (hoveredCard = index)}
				on:mouseleave={() => (hoveredCard = null)}
			>
				<div class="flex-grow">
					<div class="mb-4 flex items-center">
						<img src={icon} alt={institution} class="mr-4 h-16 w-16 object-contain" />
						<h3 class="text-xl font-semibold">{degree}</h3>
					</div>
					{#if hoveredCard === index}
						<div class="card-details">
							<p class="text-lg">{institution}</p>
							{#if concentration}
								<p class="text-md mb-1 text-gray-500">{concentration}</p>
							{/if}
							<p class="mb-4 text-sm text-gray-500">{year}</p>
							<ul class="list-inside list-disc">
								<p class="text-lg">Relevant Coursework</p>
								{#each highlights as highlight}
									<li>{highlight}</li>
								{/each}
							</ul>
						</div>
					{/if}
				</div>
			</div>
		{/each}
	</div>
</section>

<section id="projects" class="flex flex-col items-center justify-center py-16">
	<!-- <h2 class="text-3xl font-bold">Projects</h2> -->
	<div class="mb-8 w-full text-center">
		<h2 class="text-4xl font-bold">Projects</h2>
	</div>
	<div class="mx-auto max-w-6xl px-4">
		{#each projectCategories as category, index}
			<div class="mb-12 flex flex-col md:flex-row">
				<div class="mb-4 flex w-full justify-center pr-4 md:mb-0 md:w-1/4 md:justify-start">
					{#if isMobile}
						<div
							class="bg-primary flex h-16 w-16 items-center justify-center rounded-full font-bold text-white"
						>
							{abbreviations[index]}
						</div>
					{:else}
						<img src={category.icon} alt={category.title} class="h-auto w-full object-contain" />
					{/if}
				</div>
				<div class="w-full md:w-3/4">
					<div
						class="project-card bg-base-100 rounded-lg p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:transform hover:shadow-xl"
					>
						<h3 class="mb-4 text-2xl font-semibold">{category.title}</h3>
						<ul class="list-inside list-disc">
							{#each category.items as item}
								<li>{@html item}</li>
							{/each}
						</ul>
					</div>
				</div>
			</div>
		{/each}
	</div>
	<div>
		<a href="/projects" class="btn">Project Details</a>
	</div>
	<!-- Add your projects content here -->
</section>

<section id="presentations" class="flex flex-col items-center justify-center py-16">
	<!-- <h2 class="text-3xl font-bold">Presentations</h2> -->
	<div class="mb-8 w-full text-center">
		<h2 class="text-4xl font-bold">Professional Presentations</h2>
	</div>
	<div class="mx-auto max-w-6xl px-4">
		{#each presentations as presentation}
			<div
				class="presentation-card bg-base-100 mb-6 rounded-lg p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:transform hover:shadow-xl"
			>
				<h3 class="text-2xl font-semibold">{presentation.title}</h3>
				<p>{presentation.event} - {presentation.date}</p>
				{#if presentation.link}
					<a
						href={presentation.link}
						target="_blank"
						rel="noopener noreferrer"
						class="text-primary hover:underline">Presentation Link</a
					>
				{/if}
				{#if presentation.description}
					<p class="mt-4">{presentation.description}</p>
				{/if}
			</div>
		{/each}
	</div>
	<!-- <div>
		<a href="/projects" class="btn">Presentation Details</a>
	</div> -->
	<!-- Add your presentations content here -->
</section>

<section id="about" class="bg-base-100 flex flex-col items-center justify-center py-16">
	<div class="mx-auto max-w-4xl px-4">
		<h2 class="mb-8 text-center text-4xl font-bold">About Me</h2>
		<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
			<div class="about-card bg-base-200 rounded-lg p-6 shadow-lg">
				<h3 class="mb-4 text-2xl font-semibold">Personal Facts</h3>
				<ul class="list-inside list-disc space-y-2">
					{#each aboutMeData.personalFacts as fact}
						<li>{fact}</li>
					{/each}
				</ul>
			</div>
			<div class="about-card bg-base-200 rounded-lg p-6 shadow-lg">
				<h3 class="mb-4 text-2xl font-semibold">Activities</h3>
				<ul class="list-inside list-disc space-y-2">
					{#each aboutMeData.activities as activity}
						<li>{activity}</li>
					{/each}
				</ul>
			</div>
		</div>
		<p class="mt-8 text-center">
			{aboutMeData.personalStatement}
		</p>
	</div>
</section>

<section id="contact" class="bg-base-200 flex min-h-screen flex-col items-center justify-center">
	<h2 class="mb-8 text-4xl font-bold">Connect with...</h2>
	<div class="flex flex-col items-center space-y-4">
		<ul class="list-disc space-y-3 text-lg">
			<li>
				Further
				<a href="/projects" class="text-primary text-lg hover:underline">project details</a>
			</li>
			<!-- <li>Send me an email 
				<a href="mailto:contact@bobowens.me" class="btn btn-ghost btn-circle">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
					  <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/>
					</svg>
				  </a>
			</li> -->
			<li>
				View my Github profile
				<a
					href="https://github.com/borbert"
					target="_blank"
					rel="noopener noreferrer"
					class="btn btn-ghost btn-circle"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						fill="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
						/>
					</svg>
				</a>
			</li>
			<li>
				Connect on LinkedIn
				<a
					href="https://www.linkedin.com/in/robert-owens-28481b29/"
					target="_blank"
					rel="noopener noreferrer"
					class="btn btn-ghost btn-circle"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						fill="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
						/>
					</svg>
				</a>
			</li>
			<li>
				Download my
				<a href="/RLOResume.02.01.2025.pdf" download class="text-primary text-lg hover:underline"
					>resume</a
				>
			</li>
		</ul>
	</div>
</section>

<style>
	section {
		scroll-margin-top: 64px; /* Adjust based on your navbar height */
	}
	.grid > div {
		transition: all 0.3s ease-in-out;
	}
	.grid > div:hover {
		transform: translateY(-5px);
		box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
	}
	.education-card {
		transition: all 0.3s ease-in-out;
		position: relative;
		z-index: 1;
	}
	.education-card:hover {
		transform: translateY(-5px);
		box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
	}
	@media (max-width: 768px) {
		.education-card:hover {
			position: relative;
			top: auto;
			left: auto;
			width: 100%;
			height: auto;
			transform: none;
		}
	}
	.presentation-card {
		color: var(--text-primary);
		background-color: var(--bg-secondary);
		padding: 1rem;
		border-radius: 0.5rem;
		margin-bottom: 1rem;
	}

	.presentation-card h3 {
		color: var(--text-accent);
		font-size: 1.2rem;
		margin-bottom: 0.5rem;
	}

	.presentation-card p {
		font-size: 0.9rem;
		line-height: 1.4;
	}

	@media (prefers-color-scheme: dark) {
		.presentation-card {
			background-color: var(--bg-primary);
			border: 1px solid var(--border-color);
		}
	}
	.presentation-card a {
		color: #3b82f6;
		text-decoration: none;
	}
	.presentation-card a:hover {
		text-decoration: underline;
	}
	li {
		text-indent: -1.5em;
		padding-left: 1.5em;
	}
</style>
