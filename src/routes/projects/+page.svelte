<script>
    let selectedProject = null;
  
    // const projects = [
    //   {
    //     title: "Project 1",
    //     image: "/path/to/image1.jpg",
    //     description: "Short description of Project 1",
    //     details: {
    //       overview: "Detailed overview of Project 1",
    //       role: "Your role in the project",
    //       duration: "Project duration",
    //       skills: ["Skill 1", "Skill 2", "Skill 3"]
    //     }
    //   },
    //   // Add more projects here
    // ];

    const projects = [
  {
    title: "Melanoma detection with OpenCV",
    image: "/melanoma_pic.png",
      overview: "Melanoma detection with OpenCV library and traditional diagnostic markers of skin lesions",
      role: "Team project",
      duration: "Project duration",
      skills: ["OpenCV", "CV Project", "Machine Learning"],
      paper_link: "/melanoma_final_report.pdf",
    },
    {
    title: "Melanoma detection with OpenCV",
    image: "/iv_detection.png",
      overview: 'Real time object detection in sterile compounding suites <a href="/Real_time_Object_Detection_in_Sterile_Compounding_Areas.pdf" download class="text-primary hover:underline text-md">pdf</a> using YOLOv8',
      role: "Team project",
      duration: "Project duration",
      skills: ["OpenCV", "CV Project", "Machine Learning"],
      paper_link: "/melanoma_final_report.pdf",
    },
    {
    title: "Melanoma detection with OpenCV",
    image: "/melanoma_pic.png",
      overview: "Melanoma detection with OpenCV library and traditional diagnostic markers of skin lesions",
      role: "Team project",
      duration: "Project duration",
      skills: ["OpenCV", "CV Project", "Machine Learning"],
      paper_link: "/melanoma_final_report.pdf",
    },
];
  
let expandedProject = null;

function toggleProject(project) {
  expandedProject = expandedProject === project ? null : project;
}
  </script>

  
<div class="max-w-6xl mx-auto px-4 py-16">
    <h1 class="text-4xl font-bold mb-12 text-center">My Work</h1>
    

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {#each projects as project}
        <!-- <div class="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300 cursor-pointer overflow-hidden h-full flex flex-col">
            <div class="flex flex-col items-center p-4 flex-grow">
              <h2 class="card-title text-center mb-2">{project.title}</h2>
              <img 
                src={project.image} 
                alt={project.title} 
                class="w-16 h-16 object-cover rounded-lg shadow-lg mb-4" 
              />
              <p class="text-center overflow-hidden">{project.description}</p>
            </div>
            <div class="card-actions justify-center p-4 mt-auto">
              <button class="btn btn-primary" on:click={() => toggleProject(project)}>
                {expandedProject === project ? 'Hide Details' : 'View Details'}
              </button>
            </div>
          </div> -->
          <div class="card bg-base-100 w-64 card-bordered border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 class="card-title mb-3 mt-3 text-center">{project.title}</h2>
            <figure class="px-0 pt-0">
              <img src={project.image} alt={project.title} class="w-full h-20 object-cover" />
            </figure>
            <div class="card-body p-4">
              <p class="mb-4">{@html project.overview}</p>
              <div class="card-actions justify-end">
                <button class="btn btn-primary" on:click={() => toggleProject(project)}>
                  {expandedProject === project ? 'Hide Details' : 'View Details'}
                </button>
              </div>
            </div>
          </div>
          
          
          
        {/each}
        </div>
  </div>


<style>
    .card-title{
        font-size: 1.2rem;
        font-weight: 600;
        color: #000;
    }
</style>
  