
import { Decoration, DecorationSet } from "prosemirror-view";
import { Plugin } from "prosemirror-state";

export const selectedPlugin = new Plugin({
    props: {
        decorations(state) {
            const selection = state.selection;
            const resolved = state.doc.resolve(selection.from);
            const decoration = Decoration.node(resolved.before(), resolved.after(), { class: "selected" });
            // equivalent to
            // const decoration = Decoration.node(resolved.start() - 1, resolved.end() + 1, {class: 'selected'});
            return DecorationSet.create(state.doc, [decoration]);
        },
    },
});