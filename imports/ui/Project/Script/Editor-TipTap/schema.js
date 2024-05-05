import { Node, Mark, mergeAttributes } from "@tiptap/core";


// Marks

export const Note = Mark.create({
    name: "note",
    excludes: "_",
    spanning: false,
    inclusive: false,
    parseHTML() {
        return [{ tag: "note" }];
    },
    renderHTML: function (_a) {
        return ["note", 0];
    },
});

export const Modifier = Mark.create({
    name: "modifier",
    spanning: false,
    inclusive: false,
    parseHTML() {
        return [{ tag: "modifier" }];
    },
    renderHTML: function (_a) {
        return ["modifier", 0];
    },
});

export const Italic = Mark.create({
    name: "italic",
    spanning: false,
    addOptions() {
        return {
            HTMLAttributes: {},
        };
    },
    parseHTML() {
        return [
            {
                tag: "em",
            },
            {
                tag: "i",
                getAttrs: (node) =>
                    node.style.fontStyle !== "normal" && null,
            },
        ];
    },
    renderHTML({ HTMLAttributes }) {
        return [
            "em",
            mergeAttributes(this.options.HTMLAttributes, HTMLAttributes),
            0,
        ];
    },
    addCommands() {
        return {
            setItalic:
                () =>
                    ({ commands }) => {
                        return commands.setMark("italic");
                    },
            toggleItalic:
                () =>
                    ({ commands }) => {
                        return commands.toggleMark("italic");
                    },
            unsetItalic:
                () =>
                    ({ commands }) => {
                        return commands.unsetMark("italic");
                    },
        };
    },
    addKeyboardShortcuts() {
        return {
            "Mod-i": () => this.editor.commands.toggleItalic(),
        };
    },
});
export const Bold = Mark.create({
    name: "bold",
    spanning: false,
    addOptions: {
        HTMLAttributes: {},
    },
    parseHTML() {
        return [
            {
                tag: "strong",
            },
            {
                tag: "b",
                getAttrs: (node) =>
                    node.style.fontWeight !== "normal" && null,
            },
            {
                style: "font-weight",
                getAttrs: (value) =>
                    /^(bold(er)?|[5-9]\d{2,})$/.test(value) && null,
            },
        ];
    },
    renderHTML({ HTMLAttributes }) {
        return [
            "strong",
            // mergeAttributes(this.options.HTMLAttributes, HTMLAttributes),
            0,
        ];
    },
    addCommands() {
        return {
            setBold:
                () =>
                    ({ commands }) => {
                        return commands.setMark("bold");
                    },
            toggleBold:
                () =>
                    ({ commands }) => {
                        return commands.toggleMark("bold");
                    },
            unsetBold:
                () =>
                    ({ commands }) => {
                        return commands.unsetMark("bold");
                    },
        };
    },
    addKeyboardShortcuts() {
        return {
            "Mod-b": () => this.editor.commands.toggleBold(),
        };
    },
});
export const Underline = Mark.create({
    name: "underline",
    spanning: false,
    addOptions() {
        return {
            HTMLAttributes: {},
        };
    },
    parseHTML() {
        return [
            {
                tag: "u",
            },
            {
                style: "text-decoration",
                consuming: false,
                getAttrs: (style) =>
                    style.includes("underline") ? {} : false,
            },
        ];
    },
    renderHTML({ HTMLAttributes }) {
        return [
            "u",
            mergeAttributes(this.options.HTMLAttributes, HTMLAttributes),
            0,
        ];
    },
    addCommands() {
        return {
            setUnderline:
                () =>
                    ({ commands }) => {
                        return commands.setMark("underline");
                    },
            toggleUnderline:
                () =>
                    ({ commands }) => {
                        return commands.toggleMark("underline");
                    },
            unsetUnderline:
                () =>
                    ({ commands }) => {
                        return commands.unsetMark("underline");
                    },
        };
    },
    addKeyboardShortcuts() {
        return {
            "Mod-u": () => this.editor.commands.toggleUnderline(),
        };
    },
});


// Nodes
export const Scene = Node.create({
    name: "scene",
    marks: "note modifier",
    priority: 1000,
    addOptions: {
        HTMLAttributes: {},
    },
    group: "block",
    content: "inline*",
    parseHTML() {
        return [{ tag: "scene" }];
    },
    renderHTML({ HTMLAttributes }) {
        return ["scene", 0];
        // return ["scene", { id: "test-id" }];
    },
    addCommands() {
        return {
            setScene:
                () =>
                    ({ commands }) => {
                        return commands.setNode("scene");
                    },
        };
    },
    addKeyboardShortcuts() {
        return {
            "Mod-Alt-1": () => this.editor.commands.setScene(),
        };
    },
});
export const Action = Node.create({
    name: "action",
    priority: 1200,
    addOptions: {
        HTMLAttributes: {},
    },
    group: "block",
    content: "inline*",
    parseHTML() {
        return [{ tag: "action" }];
    },
    renderHTML({ HTMLAttributes }) {
        return ["action", 0];
    },
    addCommands() {
        return {
            setAction:
                () =>
                    ({ commands }) => {
                        return commands.setNode("action");
                    },
        };
    },
});
export const Char = Node.create({
    name: "char",
    priority: 500,
    marks: "note modifier",
    readOnly: true,
    addOptions: {
        HTMLAttributes: {},
    },
    group: "block",
    content: "inline*",
    parseHTML() {
        return [{ tag: "char" }];
    },
    renderHTML({ HTMLAttributes }) {
        return ["char", 0];
    },
    addCommands() {
        return {
            setChar:
                () =>
                    ({ commands }) => {
                        return commands.setNode("char");
                    },
        };
    },
});
export const Dia = Node.create({
    name: "dia",
    priority: 500,
    addOptions: {
        HTMLAttributes: {},
    },
    group: "block",
    content: "inline*",
    parseHTML() {
        return [{ tag: "dia" }];
    },
    renderHTML({ HTMLAttributes }) {
        return ["dia", 0];
    },
    addCommands() {
        return {
            setDia:
                () =>
                    ({ commands }) => {
                        return commands.setNode("dia");
                    },
        };
    },
});
export const Trans = Node.create({
    name: "trans",
    marks: "modifier",
    priority: 500,
    addOptions: {
        HTMLAttributes: {},
    },
    group: "block",
    content: "inline*",
    parseHTML() {
        return [{ tag: "trans" }];
    },
    renderHTML({ HTMLAttributes }) {
        return ["trans", 0];
    },
    addCommands() {
        return {
            setTrans:
                () =>
                    ({ commands }) => {
                        return commands.setNode("trans");
                    },
        };
    },
});
export const Section = Node.create({
    name: "section",
    priority: 600,
    addOptions: {
        HTMLAttributes: {},
    },
    group: "block",
    content: "inline*",
    parseHTML() {
        return [{ tag: "section" }];
    },
    renderHTML({ HTMLAttributes }) {
        return ["section", 0];
    },
    addCommands() {
        return {
            setSection:
                () =>
                    ({ commands }) => {
                        return commands.setNode("section");
                    },
        };
    },
});
export const Synopsis = Node.create({
    name: "synopsis",
    priority: 600,
    addOptions: {
        HTMLAttributes: {},
    },
    group: "block",
    content: "inline*",
    parseHTML() {
        return [{ tag: "synopsis" }];
    },
    renderHTML({ HTMLAttributes }) {
        return ["synopsis", 0];
    },
    addCommands() {
        return {
            setSynopsis:
                () =>
                    ({ commands }) => {
                        return commands.setNode("synopsis");
                    },
        };
    },
});
export const Pars = Node.create({
    name: "pars",
    priority: 600,
    addOptions: {
        HTMLAttributes: {},
    },
    group: "block",
    content: "inline*",
    parseHTML() {
        return [{ tag: "pars" }];
    },
    renderHTML({ HTMLAttributes }) {
        return ["pars", 0];
    },
    addCommands() {
        return {
            setPars:
                () =>
                    ({ commands }) => {
                        return commands.setNode("pars");
                    },
        };
    },
});
export const Center = Node.create({
    name: "center",
    priority: 600,
    addOptions: {
        HTMLAttributes: {},
    },
    group: "block",
    content: "inline*",
    parseHTML() {
        return [{ tag: "center" }];
    },
    renderHTML({ HTMLAttributes }) {
        return ["center", 0];
    },
    addCommands() {
        return {
            setCenter:
                () =>
                    ({ commands }) => {
                        return commands.setNode("center");
                    },
        };
    },
});
