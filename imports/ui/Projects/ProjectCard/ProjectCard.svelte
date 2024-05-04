<script>
    export let project;
    import ProjectCardDropdown from "./ProjectCardDropdown.svelte";

    function openProject() {
        console.log("open");
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div on:click={openProject} class="card p-1">
    <div class="card-body p-0 mt-2">
        <h5 class="card-subtitle px-2">{project.title}</h5>
        <p class="card-text p-2">
            {project.synopsis}
        </p>
    </div>
    <div class="p-2 d-flex align-items-center">
        <div><ProjectCardDropdown {project} /></div>

        <div class="flex-grow-1">&nbsp;</div>
        {#if project.numScripts}
            <div><span class="badge text-bg-info">{project.numScripts} Scripts</span></div>
        {/if}
    </div>
</div>

<style>
    .badge {
        opacity: 0.3;
    }
    .card-text {
        height: 145px;
        overflow-y: auto;
        line-height: 1.2;
    }

    .card:hover {
        cursor: pointer;
    }
</style>
