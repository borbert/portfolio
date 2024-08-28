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


<section id="education" class="min-h-screen flex items-center justify-center">
	<h2 class="text-4xl mr-4 ml-4 font-bold mb-8">Education</h2>
	<div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
	  {#each educationData as { degree }, index}
	  <div 
	  class="education-card p-4 rounded-lg shadow-lg relative"
	  on:mouseenter={() => showGallery(index)}
	  on:mouseleave={hideGallery}
	>
	  {#if hoveredIndex !== index}
		<h3 class="text-2xl font-semibold">{degree}</h3>
	  {:else}
		<div 
		  class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-white p-8 rounded-lg shadow-lg z-50 overflow-auto"
		  transition:fade={{ duration: 150 }}
		>
		  <h3 class="text-3xl font-bold mb-4">{educationData[hoveredIndex].degree}</h3>
		  <p class="text-xl mb-2">{educationData[hoveredIndex].institution}</p>
		  <p class="text-lg mb-4">{educationData[hoveredIndex].year}</p>
		  <ul class="list-disc list-inside">
			{#each educationData[hoveredIndex].highlights as highlight}
			  <li>{highlight}</li>
			{/each}
		  </ul>
		  	<button on:click|stopPropagation={prevCard} class="absolute left-4 top-1/2 transform -translate-y-1/2 text-4xl text-gray-600 hover:text-gray-800">&#8249;</button>
			<button on:click|stopPropagation={nextCard} class="absolute right-4 top-1/2 transform -translate-y-1/2 text-4xl text-gray-600 hover:text-gray-800">&#8250;</button>
		</div>
	  {/if}
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

  </style>