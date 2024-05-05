<script>
    export let script;

    import { EditorState } from "prosemirror-state";
    import { EditorView } from "prosemirror-view";
    import { DOMParser } from "prosemirror-model";

    import { exampleSetup } from "./Prosemirror/exampleSetup/index.js";
    import { onMount } from "svelte";

    import { scriptSchema } from "./Prosemirror/scriptSchema.js";

    onMount(() => {
        const e = new EditorView(document.querySelector("#editor"), {
            state: EditorState.create({
                doc: DOMParser.fromSchema(scriptSchema).parse(document.querySelector("#content")),
                plugins: exampleSetup({ schema: scriptSchema }),
            }),
        });
    });
</script>

<div class="d-none" id="content">{@html script}</div>

<div id="editor"></div>
