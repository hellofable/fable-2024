<script>
    export let _state;
    import { meta } from "tinro";
    const route = meta();
    let showMenu;

    import DarkModeToggle from "./DarkModeToggle.svelte";
    import SidebarToggle from "./SidebarToggle.svelte";
    import UserDropdown from "./UserDropdown.svelte";

    // show menu only on pages that start with /project
    $: showMenu = $route.url.startsWith("/project/") ? true : false;
</script>

<div id="top-nav" class="w-100 py-2 px-3 shadow-sm no-select">
    <div class="d-flex align-items-center">
        <div id="menu-toggle" class="icons">
            {#if showMenu}
                <SidebarToggle {_state}></SidebarToggle>
            {/if}
        </div>
        <div class="flex-grow-1 text-center">
            <a href="/projects" class="pico-color-grey-800 fable-title">Fable</a>
        </div>
        <div class="icons">
            <DarkModeToggle {_state}></DarkModeToggle>
            <UserDropdown {_state} />
        </div>
    </div>
</div>

<style>
    #menu-toggle {
        width: 60px;
    }

    .fable-title {
        font-size: 29px;
        text-decoration: none;
        font-family: "Satisfy", cursive;
        color: white;
    }
</style>
