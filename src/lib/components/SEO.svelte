<script lang="ts">
  export let title = "Bob Owens - Healthcare Technology Leader";
  export let description = "Strategic thinker and problem solver with expertise in healthcare, technology, and data science. Experienced in pharmacy administration and healthcare systems leadership.";
  export let keywords = "healthcare technology, pharmacy administration, data science, machine learning, healthcare systems, Bob Owens";
  export let image = "/professional_headshot.jpg";
  export let url = "https://bobowens.me";
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta name="keywords" content={keywords} />
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content={url} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={image} />

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content={url} />
  <meta property="twitter:title" content={title} />
  <meta property="twitter:description" content={description} />
  <meta property="twitter:image" content={image} />

  <!-- Canonical URL -->
  <link rel="canonical" href={url} />
</svelte:head> 