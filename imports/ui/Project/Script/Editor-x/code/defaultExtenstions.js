import { Bold } from "@tiptap/extension-bold";
import { Document } from "@tiptap/extension-document";
import { Dropcursor } from "@tiptap/extension-dropcursor";
import { Gapcursor } from "@tiptap/extension-gapcursor";
import { HardBreak } from "@tiptap/extension-hard-break";
import { History } from "@tiptap/extension-history";
import { Italic } from "@tiptap/extension-italic";
import { Paragraph } from "@tiptap/extension-paragraph";
import { Text } from "@tiptap/extension-text";

import { Extension } from "@tiptap/core";
import { selectedPlugin } from "./plugins/selected";
import { decoratePlugin } from "./plugins/decorate";
import { marksPlugin } from "./plugins/marks";

const Extra = Extension.create({
    addProseMirrorPlugins() {
        return [selectedPlugin, decoratePlugin, marksPlugin];
    },
});

export const defaultExtensions = [
    Bold, Document, Dropcursor, Gapcursor, HardBreak, History, Italic, Paragraph, Text, Extra
]