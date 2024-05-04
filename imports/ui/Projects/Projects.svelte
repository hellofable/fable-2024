<script>
    export let _state;
    import { ProjectsCollection } from "/imports/api/projects";
    import NewProjectButton from "./NewProjectButton.svelte";
    import ProjectCard from "./ProjectCard/ProjectCard.svelte";

    $m: Meteor.subscribe("projects.all");
    $m: projects = ProjectsCollection.find({}).fetch();
</script>

<div class="grid p-3">
    {#if projects.length}
        {#each projects as project, i}
            <ProjectCard {project}></ProjectCard>
        {/each}
    {/if}
    <NewProjectButton {_state} />
</div>

<style>
    .grid {
        display: grid;
        /* grid-template-columns: repeat(auto-fill, minmax(300px, 350px)); */
        grid-template-columns: repeat(
            auto-fit,
            minmax(300px, 1fr)
        ); /* Adjust minmax value 
        /* grid-auto-rows: 100px; */
        grid-gap: 10px; /* Adjust the gap between items as needed */
    }
</style>
