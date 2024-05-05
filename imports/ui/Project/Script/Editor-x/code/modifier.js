// mark extension
import { Node, Mark, mergeAttributes } from "@tiptap/core";
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