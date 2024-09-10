<script>
  
    import Modal from '../../components/modal.svelte';

    const projects = [
  {
    title: "Melanoma detection with OpenCV",
    image: "/melanoma_pic.png",
      overview: 'Melanoma detection with OpenCV library and traditional diagnostic markers of skin lesions <a href="/melanoma_final_report.pdf" download class="text-primary hover:underline text-md">pdf</a>.',
      detail_description:"",
      team: ["Will LaForge","Kyle Shannon","Bob Owens"],
      slides:'',
      duration: "Project duration",
      skills: ["OpenCV", "CV Project", "Machine Learning"],
      paper_link: "/melanoma_final_report.pdf",
    },
    {
    title: "Real time object detection in sterile compounding",
    image: "/iv_detection.png",
      overview: 'Real time object detection in sterile compounding suites using YOLOv8 <a href="/Real_time_Object_Detection_in_Sterile_Compounding_Areas.pdf" download class="text-primary hover:underline text-md">pdf</a>.',
      detail_description:"This project presents an innovative approach to enhancing safety and efficiency in sterile compounding areas through the implementation of real-time object detection using computer vision and machine learning techniques. The research focuses on developing a system capable of identifying and tracking various objects and personnel within the sterile environments. By leveraging state-of-the-art deep learning models and custom-trained datasets specific to pharmacy compounding settings, the system achieves high accuracy in object detection and classification. The potiential real-time application of the system allows for immediate alerts and interventions, significantly reducing the risk of errors and contamination in critical sterile compounding processes. The paper discusses the methodology, experimental results, and potential applications of this technology in improving patient safety and regulatory compliance in pharmaceutical compounding facilities.",
      role: "Team project",
      team: ["Andrew Waggoner","Kyle Russell","Bob Owens"],
      slides:'/Final Project Online Group 2.pdf',
      skills: ["YOLOv8", "Custom training set", "Label studio"],
      paper_link: "/Real_time_Object_Detection_in_Sterile_Compounding_Areas.pdf",
    },
    {
    title: "Autism Detection with Eye Gaze Paths",
    image: "/autism_gaze.png",
    detail_description:"",
      overview: 'Melanoma detection with OpenCV library and traditional diagnostic markers of skin lesions <a href="/annotated-ROwens-assignment-1.pdf" download class="text-primary hover:underline text-md">pdf</a>',
      role: "Team project",
      team: "",
      skills: ["OpenCV", "CV Project", "Machine Learning"],
      paper_link: "/annotated-ROwens-assignment-1.pdf",
    },
];


let selectedProject = null;
  
function openModal(project) {
    selectedProject = project;
  }

  function closeModal() {
    selectedProject = null;
  }
</script>  

  
<div class="max-w-6xl mx-auto px-4 py-16">
    <h1 class="text-4xl font-bold mb-12 text-center">My Work</h1>
    

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {#each projects as project}

          <div class="card bg-base-100 w-64 card-bordered border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 class="card-title mb-3 mt-3 mr-2 ml-2 text-center">{project.title}</h2>
            <figure class="px-0 pt-0">
              <img src={project.image} alt={project.title} class="w-full h-20 object-cover" />
            </figure>
            <div class="card-body p-4 flex flex-col flex-grow">
              <p class="flex-grow">{@html project.overview}</p>
              <div class="card-actions justify-end mt-auto">
                <button class="btn btn-primary" on:click={() => openModal(project)}>
                  View Details
                </button>
                <Modal show={selectedProject !== null} onClose={closeModal}>
                    {#if selectedProject}
                      <img src={selectedProject.image} alt={selectedProject.title} class="w-full h-64 object-cover mb-4" />
                      <h2 class="text-2xl font-bold mb-2">{selectedProject.title}</h2>
                      <p class="mb-4">{selectedProject.detail_description}</p>

                      {#if selectedProject.team}
                      <h3 class="team font-bold">Team</h3>
                      {#each selectedProject.team as member}
                        <p>{member}</p>
                      {/each}
                      {/if}

                      {#if selectedProject.team}
                      <h3 class="technologies font-bold mt-4">Technologies Applied</h3>
                      {#each selectedProject.skills as skill}
                        <p>{skill}</p>
                      {/each}
                      {/if}

                      {#if selectedProject.paper_link}
                      <div class="mt-4">
                          <a href={selectedProject.paper_link} download class="text-primary hover:underline text-md">Download Paper</a>
                      </div>
                      {/if}

                      {#if selectedProject.slides}
                      <div class="mt-4">
                        <a href={selectedProject.slides} download class="text-primary hover:underline text-md">Download Slides</a>
                    </div>
                      {/if}
    


                    {/if}
                </Modal>
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
  