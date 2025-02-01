<script>
  
    import Modal from '../../components/modal.svelte';

    const projects = [
    {
    title: "CryptoFlow",
    image: "/cryptoflow.png",
      overview: 'Payment and currency manangement for individuals',
      detail_description:"",
      team: ["Bob Owens"],
      slides:'',
      duration: "Project duration",
      skills: ["Full Stack Development", "React", "Tailwind CSS", "Blockchain"],
      paper_link: "https://flow-currency-connect.lovable.app",
    },    
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
    detail_description:"Data was collected from subjects as they watched a video.  The data was the path of their eye gaze as they watched the video.  The assumption behind this research is that individuals with autism focus or avoid certain parts of the video, for exmaple they respond to faces in the video differently than individuals who show no signs of autism. This eye gaze path data was used with a variet of techniques to creates features to use in a machine learning model.",
      overview: 'Can the eye gaze path of subject help detect autism?',
      role: "Team project",
      team: "",
      skills: ["OpenCV", "CV Project", "Machine Learning"],
      paper_link: "/annotated-ROwens-assignment-1.pdf",
    },
    {
    title: "340BDrugInfo.com",
    image: "/www.340bdruginfo.com_drugsearch.png",
    detail_description:'This website leverages the APIs available from the FDA NDC Drug Dictonary and the Medicaid Drug Rebate Program (MDRP).  It also uses the CMS ASP NDC Crosswalk to provide additional information.  The objective of this web app is to give a 340B practioner package size information at the 9-digit NDC level and the CMS HCPCS and billing units per package information.  The MDRP data allows one to know if that drug has been included in the MDRP program. <a href="https://www.340bdruginfo.com" class="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">340BDrugInfo.com</a>.  I created this tool in 2021 and published it on the web in 2022.',
      overview: '<a href="https://www.340bdruginfo.com" class="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">340BDrugInfo.com</a> is a website that where I combined three drug information resources that were useful for 340B operations and management.',
      role: "",
      team: "",
      skills: ["Web Development", "Full Stack Development", "Golang", "React"],
      paper_link: "",
    },
    {
    title: "CrabChat",
    image: "/CrabChat.png",
    detail_description:'Crab chat is a full-scale messaging application aimed at those who are concerned with privacy. It emphasizes client-side storage and encryption as methods to enhance user privacy. Performance and scale was another key feature. Many privacy-oriented applications are not very performant. Crab Chat seeks to remedy this issue by using a high-performance IO library, Tokio, which will help easily achieve a high throughput and low latency. Using an asynchronous IO library, can easily increase scalability.',
      overview: 'Crab Chat is a full scale chat app built with performance and security in mind. <a href="https://github.com/borbert/CS540Group6ChatAppFinal" class="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Github Repo</a> ',
      role: "",
      team: ["Chris Degawa", "Bob Owens", "Corey Lovette", "Ewan Mcgarvey",
      "Mahim Mathur", "Noah Archer", "Skylar Reed"],
      skills: ["Agile Development", "Full Stack Development", "Rust", "Tokio and Tauri", "Svelte"],
      paper_link: "/CS540 Group 6 - Crabchat.pdf",
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
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {#each projects as project}
            <div class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300">
                <figure class="px-4 pt-4">
                    <img 
                        src={project.image} 
                        alt={project.title} 
                        class="rounded-xl h-48 w-full object-cover"
                    />
                </figure>
                <div class="card-body">
                    <h2 class="card-title text-lg font-bold">{project.title}</h2>
                    <p class="text-sm">{@html project.overview}</p>
                    <div class="flex flex-wrap gap-2 mt-2">
                        {#each project.skills.slice(0, 3) as skill}
                            <div class="badge badge-outline">{skill}</div>
                        {/each}
                    </div>
                    <div class="card-actions justify-end mt-4">
                        <button 
                            class="btn btn-primary btn-block"
                            on:click={() => openModal(project)}
                        >
                            View Details
                        </button>
                    </div>
                </div>
            </div>
        {/each}
    </div>
</div>

<Modal show={selectedProject !== null} onClose={closeModal}>
    {#if selectedProject}
        <div class="prose max-w-none">
            <img 
                src={selectedProject.image} 
                alt={selectedProject.title} 
                class="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h2 class="text-2xl font-bold mb-4">{selectedProject.title}</h2>
            <div class="mb-4">{@html selectedProject.detail_description}</div>

            {#if selectedProject.team && selectedProject.team.length > 0}
                <div class="mb-4">
                    <h3 class="font-bold text-lg mb-2">Team</h3>
                    <ul class="list-disc list-inside">
                        {#each selectedProject.team as member}
                            <li>{member}</li>
                        {/each}
                    </ul>
                </div>
            {/if}

            {#if selectedProject.skills}
                <div class="mb-4">
                    <h3 class="font-bold text-lg mb-2">Technologies Applied</h3>
                    <div class="flex flex-wrap gap-2">
                        {#each selectedProject.skills as skill}
                            <span class="badge badge-outline">{skill}</span>
                        {/each}
                    </div>
                </div>
            {/if}

            <div class="flex gap-4 mt-6">
                {#if selectedProject.paper_link}
                    <a 
                        href={selectedProject.paper_link} 
                        download 
                        class="btn btn-primary btn-sm"
                    >
                        Download Paper
                    </a>
                {/if}

                {#if selectedProject.slides}
                    <a 
                        href={selectedProject.slides} 
                        download 
                        class="btn btn-primary btn-sm"
                    >
                        Download Slides
                    </a>
                {/if}
            </div>
        </div>
    {/if}
</Modal>

<style>
    /* Remove any custom CSS variables */
    :global(.modal-content) {
        max-height: 80vh;
        overflow-y: auto;
    }
</style>
  