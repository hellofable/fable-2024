<script>
    import { onMount } from "svelte";
    import Editor from "./Editor-x/Editor.svelte";

    import { makeScriptFromCardsArr } from "/imports/code/cards/makeScriptFromCardsArr";
    import { splitFountainToCards } from "/imports/code/cards/splitFountainToCard";
    export let _state;

    let script;
    onMount(() => {
        loadScript();
    });

    function loadScript() {
        fetch("http://localhost:3000/some.html")
            .then((response) => response.text())
            .then((data) => {
                script = data;
                const cards = splitFountainToCards(script);
                const html = makeScriptFromCardsArr(cards);
                script = html;
            })
            .catch((error) => {
                console.error("Error fetching the text file:", error);
            });
    }
</script>

{#if script}
    <Editor {_state} {script}></Editor>
{/if}
