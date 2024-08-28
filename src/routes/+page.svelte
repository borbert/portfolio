<script>

import { onMount } from'svelte';import { scale } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
  
  let expandedDegree = null;

  function toggleExpand(degree) {
    expandedDegree = expandedDegree === degree ? null : degree;
  }

	const educationData = [
    {
      degree: "Doctor of Pharmacy (PharmD)",
      institution: "University Name",
      year: "Year Graduated",
      highlights: [
        "Clinical pharmacy specialization",
        "Research in healthcare systems",
        "Leadership in student organizations"
      ]
    },
    {
      degree: "Master of Business Administration (MBA)",
	  concentration:"Finance",
      institution: "University Name",
      year: "Year Graduated",
      highlights: [
        "Focus on healthcare management",
        "Strategic leadership coursework",
        "Capstone project on healthcare innovation"
      ]
    },
    {
      degree: "Master of Computer Science (MSCS)",
	  concentration:"Data Mining and Intelligent Systems",
      institution: "University of Tennessee",
      year: "2024",
      highlights: [
        "Data structures and algorithms",
        "Machine learning fundamentals",
        "Software engineering principles"
      ]
    }
  ];
</script>
<!-- "./Professional headshot.jpg"  -->
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
  
  
  <section id="bio" class="min-h-screen flex items-center justify-center">
	<h1 class="text-4xl mr-4 ml-4 font-bold">Biography</h1>
	<p>With a robust background in health system pharmacy and technology, I have dedicated my career to improving healthcare systems through leadership, process improvement, data analytics, and machine learning. 
		Applying my formal education in healthcare, business, and computer science has afforded me a uniqiue perspecitve on health care problems.  
		I have been involved in a mirad of projects requiring complex data analysis in areas with high degree of regulatory and financial implications for the health system.  
		My experience pharmacy administration has allowed me to lead transformative projects that integrate emerging technologies and innovative approaches into pharmacy operations.</p>
</section>

  <!-- <section id="education" class="min-h-screen flex items-center justify-center">
	<h2 class="text-4xl mr-4 ml-4 font-bold mb-8">Education</h2>
	<div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
	  {#each educationData as { degree, institution, year, highlights }}
		<div class="bg-base-100 p-6 rounded-lg shadow-lg">
		  <h3 class="text-2xl font-semibold">{degree}</h3>
		  <p class="text-lg">{institution}</p>
		  <p class="text-sm text-gray-500 mb-4">{year}</p>
		  <ul class="list-disc list-inside">
			{#each highlights as highlight}
			  <li>{highlight}</li>
			{/each}
		  </ul>
		</div>
	  {/each}
	</div>
  </section> -->

  <!-- <section id="education" class="min-h-screen flex items-center justify-center">
	<h2 class="text-4xl mr-4 ml-4 font-bold mb-8">Education</h2>
	<div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
	  {#each educationData as { degree, institution, year, highlights }}
		<div class="education-card bg-base-100 p-4 rounded-lg shadow-lg">
		  <h3 class="text-2xl font-semibold">{degree}</h3>
		  <div class="card-details">
			<p class="text-lg">{institution}</p>
			<p class="text-sm text-gray-500 mb-4">{year}</p>
			<ul class="list-disc list-inside">
			  {#each highlights as highlight}
				<li>{highlight}</li>
			  {/each}
			</ul>
		  </div>
		</div>
	  {/each}
	</div>
  </section> -->
  
  <section id="education" class="min-h-screen flex items-center justify-center">
	<h2 class="text-4xl mr-4 ml-4 font-bold mb-8">Education</h2>
	<div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
	  {#each educationData as { degree, institution, year, highlights }}
		<div class="education-card bg-base-100 p-4 rounded-lg shadow-lg">
		  <h3 class="text-2xl font-semibold">{degree}</h3>
		  <div class="card-details">
			<p class="text-lg">{institution}</p>
			<p class="text-sm text-gray-500 mb-4">{year}</p>
			<ul class="list-disc list-inside">
			  {#each highlights as highlight}
				<li>{highlight}</li>
			  {/each}
			</ul>
		  </div>
		</div>
	  {/each}
	</div>
  </section>

  <section id="projects" class="min-h-screen flex items-center justify-center">
	<h2 class="text-3xl font-bold">My Projects</h2>
	<div>
		<a href="/projects" class="btn">Project Details</a>
	</div>
	<!-- Add your projects content here -->
  </section>
  
  <section id="about" class="min-h-screen flex items-center justify-center">
	<h2 class="text-3xl font-bold">About Me</h2>
	<!-- Add your about content here -->
  </section>
  
  <section id="contact" class="min-h-screen flex items-center justify-center">
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
    transition: all 0.3s ease-in-out;
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
  .education-card::after {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.5);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease-in-out;
    z-index: -1;
  }
  .education-card:hover::after {
    opacity: 1;
    visibility: visible;
  }
  .card-details {
    display: none;
  }
  .education-card:hover .card-details {
    display: block;
  }
  </style>