<script>
    import { Meteor } from "meteor/meteor";

    export let _state;

    function newScript() {
        $_state.modal.name = "newProject";
    }
</script>

<button on:click={newScript} class="btn btn-project-card">
    <div class="text-center">
        <div class="d-flex align-items-center">
            <div />
            <div class="flex-grow-1"><i class="bi bi-plus-circle" /></div>
            <div />
        </div>
    </div>
</button>

<style>
    button,
    button:hover {
        min-height: 180px;
        font-size: 22px;
        border: 0;
    }
</style>
