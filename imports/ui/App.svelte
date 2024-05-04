<script>
  import { Route, router } from "tinro";
  import TopNav from "./TopNav/TopNav.svelte";
  import Projects from "./Projects/Projects.svelte";
  import { _state } from "../code/state";
  import Modal from "/imports/ui/Modal/Modal.svelte";

  router.mode.hash(); // enables hash navigation method
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
