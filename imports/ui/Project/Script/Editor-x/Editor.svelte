<script>
	import { defaultExtensions } from "./code/defaultExtenstions";
	import { Editor } from "@tiptap/core";

	import { onMount } from "svelte";
	onMount(() => {
		initEditor(script);
	});

	let element;
	let editor;

	export let _state;
	export let script;

	function initEditor(html) {
		editor = new Editor({
			element: element,
			extensions: defaultExtensions,
			content: script,
			parseOptions: {
				preserveWhitespace: true,
			},
			onTransaction: () => {
				editor = editor;
			},
		});
	}
</script>

<div class="pm-wrapper" bind:this={element} />

<style>
	.pm-wrapper {
		height: 100%;
	}
</style>
