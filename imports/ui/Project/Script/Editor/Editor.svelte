<script>
	import { defaultExtensions } from "./code/plugins/defaultExtenstions";
	import { schema } from "./code/schema.js";
	import { Editor } from "@tiptap/core";

	import { onMount } from "svelte";
	onMount(() => {
		console.log(script);
		initEditor(script);
	});

	let element;
	let editor;

	export let _state;
	export let script;

	function initEditor(html) {
		editor = new Editor({
			element: element,
			extensions: [...schema, ...defaultExtensions],
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
