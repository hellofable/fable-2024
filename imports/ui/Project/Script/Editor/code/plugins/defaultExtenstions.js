import { Bold } from "@tiptap/extension-bold";

import { Dropcursor } from "@tiptap/extension-dropcursor";
import { Gapcursor } from "@tiptap/extension-gapcursor";
import { HardBreak } from "@tiptap/extension-hard-break";
import { History } from "@tiptap/extension-history";
import { Italic } from "@tiptap/extension-italic";


import { Extension } from "@tiptap/core";
import { selectedPlugin } from "./selected";
import { decoratePlugin } from "./decorate";
import { marksPlugin } from "./marks";




const Extra = Extension.create({
    addProseMirrorPlugins() {
        return [selectedPlugin, decoratePlugin, marksPlugin];
    },
});

export const defaultExtensions = [
    Bold, Dropcursor, Gapcursor, HardBreak, History, Italic
    // , Extra
]