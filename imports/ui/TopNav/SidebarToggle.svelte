<script>
    export let _state;

    console.log($_state.sidebar.show);
</script>

<button
    on:click={() => {
        $_state.sidebar.show = !$_state.sidebar.show;
    }}
    class="btn btn-link"
    ><i class="bi bi-list"></i>
</button>

<style>
    .btn-link {
        font-size: 22px;
    }
</style>
