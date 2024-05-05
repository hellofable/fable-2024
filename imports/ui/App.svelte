<script>
  import { Route, router } from "tinro";
  import TopNav from "./TopNav/TopNav.svelte";
  import Projects from "./Projects/Projects.svelte";
  import Project from "./Project/Project.svelte";
  import Modal from "/imports/ui/Modal/Modal.svelte";

  import { setBodyClasses } from "../code/setBodyClasses";
  import { _state } from "../code/state";
  import { onMount } from "svelte";

  router.mode.hash(); // enables hash navigation method

  onMount(() => {
    setBodyClasses();
  });
</script>

<Modal {_state}></Modal>

<div id="layout">
  <div id="layout-content">
    <Route path="/projects/*">
      <TopNav {_state} />
      <Projects {_state} />
    </Route>
    <Route path="/project/*">
      <Project {_state} />
    </Route>
  </div>
</div>

<style>
  #layout,
  #layout-content {
    height: 100vh;
    overflow: hidden;
  }
</style>
