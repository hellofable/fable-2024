<script>
    export let _state;
</script>

<button
    class="btn btn-link"
    on:click={() => {
        $_state.view.darkMode = !$_state.view.darkMode;
    }}
    href={null}
>
    <i class="bi bi-moon-fill"></i>
</button>
