<script>
    export let _state;
    import { meta } from "tinro";
    const route = meta();
    let showMenu;

    import DarkModeToggle from "./DarkModeToggle.svelte";

    // show menu only on pages that start with /project
    $: showMenu = $route.url.startsWith("/project/") ? true : false;
</script>

<div id="top-nav" class="w-100 py-2 px-3 shadow-sm">
    <div class="d-flex text-secondary align-items-center">
        <div class="">
            {#if showMenu}
                <i class="bi bi-list"></i>
            {/if}
        </div>
        <div class="flex-grow-1 text-center">
            <a href="/projects" class="pico-color-grey-800 fable-title">Fable</a>
        </div>
        <div class="right-icons">
            <DarkModeToggle {_state}></DarkModeToggle>
            <i class="bi bi-person-circle"></i>
        </div>
    </div>
</div>

<style>
    .fable-title {
        font-size: 29px;
        text-decoration: none;
        font-family: "Satisfy", cursive;
        color: white;
    }

    .right-icons {
        font-size: 22px;
        color: white;
    }

    .bi-list {
        font-size: 19px;
        color: rgb(177, 153, 153);
    }
</style>
