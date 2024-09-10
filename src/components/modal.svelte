<!-- Modal.svelte -->
<script>
    export let show = false;
    export let onClose;
  </script>
  
  {#if show}
    <div class="fixed inset-0 bg-gray-800 bg-opacity-75 z-50 flex items-center justify-center" on:click={onClose}>
      <div class="bg-white p-8 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto m-4" on:click|stopPropagation>
        <slot></slot>
      </div>
    </div>
  {/if}
  
  