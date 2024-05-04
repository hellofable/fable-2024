<script>
    export let _state;

    $: if ($_state.view.darkMode) setDark();
    $: if (!$_state.view.darkMode) setLight();

    function setDark() {
        document.documentElement.removeAttribute("data-bs-theme", "light");
        document.documentElement.setAttribute("data-bs-theme", "dark");
    }

    function setLight() {
        document.documentElement.removeAttribute("data-bs-theme", "dark");
        document.documentElement.setAttribute("data-bs-theme", "light");
    }
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
