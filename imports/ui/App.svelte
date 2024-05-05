<script>
  import { Route, router } from "tinro";
  import TopNav from "./TopNav/TopNav.svelte";
  import Projects from "./Projects/Projects.svelte";
  import Modal from "/imports/ui/Modal/Modal.svelte";

  import { setBodyClasses } from "../code/setBodyClasses";
  import { _state } from "../code/state";
  import { onMount } from "svelte";

  router.mode.hash(); // enables hash navigation method

  onMount(() => {
    setBodyClasses();
  });
</script>

<Route>
  <Modal {_state}></Modal>

  <div id="layout">
    <div id="layout-top-nav">
      <TopNav {_state} />
    </div>
    <div id="layout-content">
      <Projects {_state} />
    </div>
  </div>
</Route>

<style>
  #layout {
    height: 100vh;
    overflow: hidden;
  }

  #layout-content {
    height: 100%;
    overflow-y: auto;
  }
</style>
