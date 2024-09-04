<script>

import { fade, fly } from 'svelte/transition';

let hoveredIndex = -1;

  function showGallery(index) {
    hoveredIndex = index;
  }

  function hideGallery() {
    hoveredIndex = -1;
  }

  function prevCard() {
  hoveredIndex = (hoveredIndex - 1 + educationData.length) % educationData.length;
}

function nextCard() {
  hoveredIndex = (hoveredIndex + 1) % educationData.length;
}


let hoveredCard = null;

	const educationData = [
    {
      degree: "Doctor of Pharmacy (PharmD)",
      institution: "Campbell University",
      year: "2006",
      highlights: [
        "Anatomy and Physiology",
        "Biochemistry",
		"Drug Information Literature Evaluation",
		"Microbiology",
		"Immunology",
		"Biopharmacuetics",
		"Clinical Biochemistry",
		"Pharmacy Marketing and Management",
		"Pharmacuetics",
		"Pharmacokinetics",
		"Pharmacology",
		"Biology of Disease",
		"Advanced Financial Management",
		"Non-prescription Products",
		"Research Design and Biostatistics",
		"Therapeutics",
		"Jurisprudence",
		"Therapeutic Drug Monitoring",
		"Community Pharmacy Management",
        "Special Research Projects in Pharmacy",
      ], 
	  icon:"/campbell-logo.png",
	  key_projects:[],
    },
    {
      degree: "Master of Business Administration (MBA)",
	  concentration:"Graduate Certificate in Finance",
      institution: "East Carolina University",
      year: "2010",
      highlights: [
        "Financial and Managerial Accounting",
        "Financial Management",
        "Analysis of the Business and Economic Environment",
		"Real Estate Analysis",
		"Accounting for Decision Making",
		"Financial Management",
		"Management Information Systems",
		"Comparative Management",
		"Government Relations of Business",
		"Investment Managment",
		"Marketing Management",
		"Protfolio Theory, Construction, and Management",
		"Marketing Strategy",
		"Operations and Supply Chain Management",
		"Management Science",
		"Advanced Writing for Business and Industry",
		"Topics in Finance",
		"Strategic Management",
		"Organizational Behavior",
		"Statistical Methods"
      ], 
	  icon:"/ecu-logo.png",
	  key_projects:[],
    },
    {
      degree: "Master of Computer Science (MSCS)",
	  concentration:"Data Mining and Intelligent Systems",
      institution: "University of Tennessee",
      year: "2024",
      highlights: [
        "Machine Learning",
        "Deep Learning",
        "Compliers and Runtime Systems",
		"Data Mining and Analytics",
		"Artifical Intelligence",
		"Advanced Software Engineering",
		"Digital Archeolgy",
		"Applied Cryptography",
		"Web & Cloud Computing",
		"Compture Networks",
      ], 
	  icon:"/UTlogo.png",
	  key_projects:[

	  ],
    }
  ];
</script>

<section id="home" class="min-h-screen flex flex-col items-center justify-center">
	<div class="flex items-center max-w-4xl mb-8">
	  <img src="/professional_headshot.jpg" alt="pic" class="rounded-full bg-base-200 w-80 h-80 mr-8 object-cover" style="object-position: center 10%;">
	  <div class="max-w-md">
		<h1 class="text-5xl font-bold">Hello there</h1>
		<p class="py-6">
		  I am Robert (Bob) Owens, a strategic thinker and problem solver with education in pharmacy, business, computer science, data science, and intelligent systems. 
		  With extensive experience in pharmacy administration and leadership at a top non-profit health system, I leverage my analytical skills to drive change and develop innovative solutions in healthcare.
		  My passion lies in utilizing technology, analytics, and process improvement to enhance operational efficiency and improve patient outcomes, making me a valuable asset in both clinical and administrative settings.
		</p>
	  </div>
	</div>
	<div class="text-center max-w-2xl">
	  <h2 class="text-2xl font-semibold mb-4">Mission Statement</h2>
	  <p class="italic">
		"To leverage my diverse skill set in healthcare, technology, and leadership to drive innovative solutions that enhance patient care and operational efficiency in healthcare systems."
	  </p>
	</div>
  </section>

  <section id="expertise" class="py-16 flex flex-col items-center justify-center bg-base-200">
	<div class="max-w-4xl mx-auto px-4">
	  <h2 class="text-4xl font-bold mb-8 text-center">Current Areas of Expertise</h2>
	  <ul class="list-disc space-y-4">
		<li>Applying <strong>existing and emerging technologies</strong> to health system problems</li>
		<li>Applying <strong>data science</strong>, <strong>artificial intelligence (AI)</strong>, and <strong>machine learning (ML)</strong> to health system problems</li>
		<li>Finding and evaluating <strong>organizational changes</strong> to improve health system <strong>financial standing</strong></li>
		<li><strong>Drug discount programs</strong>, <strong>supply chain optimization</strong>, and optimizing health system <strong>drug costs</strong></li>
		<li>Evaluating, creating, and implementing health system <strong>data infrastructures</strong></li>
		<li>Creating and growing <strong>specialized enterprise teams</strong> in health systems</li>
		<li>Turning <strong>novel ideas</strong> and <strong>home grown solutions</strong> into <strong>data tools</strong> and/or <strong>technology products</strong></li>
	  </ul>
	</div>
  </section>
  
  
  <section id="bio" class="py-16 flex flex-col items-center justify-center">
	<div class="w-full text-center mb-8">
		<h1 class="text-4xl font-bold">Biography</h1>
	</div>
	<div class="bg-base-100 px-20 rounded-lg shadow-lg">
		<p>With a robust background in health system pharmacy and technology, I have dedicated my career to improving healthcare systems through leadership, process improvement, data analytics, and machine learning. 
			Applying my formal education in healthcare, business, and computer science has afforded me a uniqiue perspecitve on health care problems.  
			I have been involved in a mirad of projects requiring complex data analysis in areas with high degree of regulatory and financial implications for the health system.  
			My experience pharmacy administration has allowed me to lead transformative projects that integrate emerging technologies and innovative approaches into pharmacy operations.</p>
	</div>
</section>

<!-- <h2 class="text-4xl mr-4 ml-4 font-bold mb-8">Education</h2> -->
<!-- <section id="education" class="min-h-screen flex items-center justify-center">
	<h2 class="text-4xl mr-4 ml-4 font-bold mb-8">Education</h2>
	<div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
	  {#each educationData as { degree, institution, year, concentration, highlights }}
		<div class="education-card bg-base-100 p-4 rounded-lg shadow-lg">
		  <h3 class="text-2xl font-semibold">{degree}</h3>
		  <div class="card-details">
			<p class="text-lg">{institution}</p>
			{#if concentration}
				<p class="text-md  text-gray-500 mb-1">{concentration}</p>
			{/if}
			<p class="text-sm text-gray-500 mb-4">{year}</p>
			<ul class="list-disc list-inside">
				<p class="text-lg">Relavent Coursework</p>
			  {#each highlights as highlight}
				<li>{highlight}</li>
			  {/each}
			</ul>
		  </div>
		</div>
	  {/each}
	</div>
  </section> -->

  <!-- <section id="education" class="min-h-screen flex items-center justify-center">
	<h2 class="text-4xl mr-4 ml-4 font-bold mb-8">Education</h2>
	<div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
	  {#each educationData as { degree, institution, year, concentration, highlights }, index}
		<div 
		  class="education-card bg-base-100 p-4 rounded-lg shadow-lg"
		  on:mouseenter={() => hoveredCard = index}
		  on:mouseleave={() => hoveredCard = null}
		>
		  <h3 class="text-2xl font-semibold">{degree}</h3>
		  {#if hoveredCard === index}
			<div class="card-details">
			  <p class="text-lg">{institution}</p>
			  {#if concentration}
				<p class="text-md text-gray-500 mb-1">{concentration}</p>
			  {/if}
			  <p class="text-sm text-gray-500 mb-4">{year}</p>
			  <ul class="list-disc list-inside">
				<p class="text-lg">Relevant Coursework</p>
				{#each highlights as highlight}
				  <li>{highlight}</li>
				{/each}
			  </ul>
			</div>
		  {/if}
		</div>
	  {/each}
	</div>
  </section> -->

  <section id="education" class="py-20 flex flex-col items-center justify-center">
	<div class="w-full text-center mb-8">
		<h2 class="text-4xl mr-4 ml-4 font-bold mb-8">Education</h2>
	</div>
	<div class="flex flex-row gap-8 overflow-x-auto max-w-full px-8 mb-8">
	  {#each educationData as { degree, institution, year, concentration, highlights, icon }, index}
		<div 
		  class="education-card bg-base-100 p-4 rounded-lg shadow-lg flex justify-between items-start"
		  on:mouseenter={() => hoveredCard = index}
		  on:mouseleave={() => hoveredCard = null}
		>
		  <div class="flex-grow">
			<div class="flex items-center mb-4">
			<img src={icon} alt={institution} class="w-16 h-16 object-contain mr-4" />
			<h3 class="text-xl font-semibold">{degree}</h3>
			</div>
			{#if hoveredCard === index}
			  <div class="card-details">
				<p class="text-lg">{institution}</p>
				{#if concentration}
				  <p class="text-md text-gray-500 mb-1">{concentration}</p>
				{/if}
				<p class="text-sm text-gray-500 mb-4">{year}</p>
				<ul class="list-disc list-inside">
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


  <section id="projects" class="py-16 flex flex-col items-center justify-center">
	<h2 class="text-3xl font-bold">Projects</h2>
	<div>
		<a href="/projects" class="btn">Project Details</a>
	</div>
	<!-- Add your projects content here -->
  </section>

  <section id="presentations" class="py-16 flex flex-col items-center justify-center">
	<h2 class="text-3xl font-bold">Presentations</h2>
	<div>
		<a href="/projects" class="btn">Presentation Details</a>
	</div>
	<!-- Add your presentations content here -->
  </section>
  
  <section id="about" class="py-16 flex flex-col items-center justify-center">
	<h2 class="text-3xl font-bold">About Me</h2>
	<!-- Add your about content here -->
  </section>
  
  <section id="contact" class="py-16 flex flex-col items-center justify-center">
	<h2 class="text-3xl font-bold">Connect</h2>
	<!-- Add your contact form or information here -->
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
    transition: all 0.5s ease-in-out;
    position: relative;
    z-index: 1;
  }
  .education-card:hover {
	position: fixed;
  top: 10vh;
  left: 10vw;
  width: 80vw;
  height: 80vh;

  z-index: 1000;
  overflow-y: auto;
  }
  </style>