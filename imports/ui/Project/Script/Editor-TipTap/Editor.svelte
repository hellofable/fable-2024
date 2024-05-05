<script>
    import { _ } from "lodash";

    import { onMount, onDestroy, createEventDispatcher } from "svelte";
    import { Editor } from "@tiptap/core";
    import Document from "@tiptap/extension-document";
    import Text from "@tiptap/extension-text";
    import History from "@tiptap/extension-history";

    export let card;
    export let _state;
    let hasFocus;

    let element;
    let editor;

    const dispatch = createEventDispatcher();
    import {
        Scene,
        Bold,
        Italic,
        Underline,
        Action,
        Char,
        Dia,
        Center,
        Trans,
        Section,
        Synopsis,
        Pars,
        Note,
        Modifier,
    } from "./schema";

    onMount(() => {
        editor = new Editor({
            editorProps: {},
            element,
            extensions: [
                Document,
                Text,
                Scene,
                Bold,
                Italic,
                Underline,
                Action,
                Char,
                Dia,
                Center,
                Trans,
                Section,
                Synopsis,
                Pars,
                Note,
                History,
                Modifier,
            ],
            content: convertTextToHtml(card.text + "\n"),
            onTransaction: () => {
                editor = editor;
            },
            onUpdate({ editor }) {},
            onCreate({ editor }) {},
            parseOptions: {
                preserveWhitespace: "full",
            },
        });
    });
    onDestroy(() => {
        if (editor) {
            editor.destroy();
        }
    });
</script>

<div class="ed" bind:this={element} />

<style>
    .ed {
        height: 100%;
        overflow-y: hidden;
    }
</style>
