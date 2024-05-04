<script>
    import { Meteor } from "meteor/meteor";

    let dropdownEl;
    export let project;

    // stop clickthough on to card below & close the dropdown when clicked
    function clickDropdown(e) {
        e.stopPropagation();
    }
    function closeDropdown() {
        const dropdownInstance = new bootstrap.Dropdown(dropdownEl);

        dropdownInstance.hide();
    }

    function removeProject() {
        Meteor.call("projects.remove", project._id);
        console.log("remove me");
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
    on:click={(e) => {
        clickDropdown(e);
    }}
    class="btn-group dropup"
>
    <button
        bind:this={dropdownEl}
        class="btn btn-link p-0"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
    >
        <i class="bi bi-three-dots-vertical"></i>
    </button>

    <ul on:click={closeDropdown} class="dropdown-menu">
        <li><a on class="dropdown-item" href={null}>Action</a></li>
        <li><a class="dropdown-item" href={null}>Another action</a></li>
        <li><a on:click={removeProject} class="dropdown-item" href={null}>Delete Project</a></li>
    </ul>
</div>

<style>
    /* button {
        position: absolute;
        top: 0;
        right: 0;
    } */
</style>
