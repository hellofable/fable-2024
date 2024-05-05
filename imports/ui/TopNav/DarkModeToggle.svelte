<script>
    export let _state;
</script>

<a
    on:click={() => {
        $_state.view.darkMode = !$_state.view.darkMode;
    }}
    href={null}
    class="me-2"
>
    <i class="bi bi-moon-fill"></i>
</a>
