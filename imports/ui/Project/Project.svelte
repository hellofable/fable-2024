<script>
    export let _state;
    import TopNav from "../TopNav/TopNav.svelte";
    import SideBar from "./SideBar/SideBar.svelte";
    import Script from "./Script/Script.svelte";
</script>

<div id="project-layout" class="d-flex h-100">
    <div id="sidebar"><SideBar {_state}></SideBar></div>
    <div class="d-flex flex-column w-100 h-100">
        <div><TopNav {_state} /></div>
        <div class="flex-grow-1"><Script {_state}></Script></div>
    </div>
</div>

<style>
    #project-layout {
        overflow: hidden;
        /* border: 5px solid red; */
    }
    #sidebar {
        /* background: red; */
        flex: 0 0 300px;
    }
</style>
