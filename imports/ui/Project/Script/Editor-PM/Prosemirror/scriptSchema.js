import { Schema } from "prosemirror-model";
export const scriptSchema = new Schema({
    nodes: {
        text: {},
        card: {
            content: "text*",
            toDOM() {
                return ["card", 0];
            },
            parseDOM: [{ tag: "card" }],
        },
        cards: {
            content: "card+",
            toDOM() {
                return ["cards", 0];
            },
            parseDOM: [{ tag: "cards" }],
        },
        doc: {
            content: "cards",
        },
    },
});
