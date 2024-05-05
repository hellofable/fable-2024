import { _state } from "../../../../code/stores/state"
import { _characters } from "../../../../code/stores/characters"
import { get } from "svelte/store"
import { cardsDb } from "../../../../code/stores/cards"
import { replaceParentNodeOfType, findParentNodeOfType } from "prosemirror-utils";


function closeDropdown() {
    _state.setKey("characterDropdown.open", false)
}


function openDropdown(args) {

    setTimeout(() => {
        _state.setKey("characterDropdown.open", true)
        updateDropdownPosition(args)
    }, 200);


    const content = document.getElementById("content");
    content.onscroll = function () {
        updateDropdownPosition(args)
    };
}

export const characterDropdownOnEditorUpdate = (args) => {
    if (args.line.type == "char" && args.line.text.length == 2) openDropdown(args)
    if (args.line.type != "char" || args.line.text.length < 2) closeDropdown(args)
    if (args.line.type == "char") createNewList(args.line.text)
    if (get(_state).characterDropdown.characters.length == 0) {

        closeDropdown(args)
    }


}


export const characterDropdownOnKeydown = (args) => {




    const key = args.evt.key



    if (key == "ArrowUp" || key == "ArrowDown") {

        const characterDropdown = get(_state).characterDropdown

        const characters = characterDropdown.characters
        const selected = characterDropdown.selected


        const len = characters.length
        let newSelected
        if (key == "ArrowDown") newSelected = selected + 1
        if (key == "ArrowUp") newSelected = selected - 1
        if (newSelected < 1) newSelected = 0
        if (newSelected == len) newSelected = len - 1


        _state.setKey("characterDropdown.selected", newSelected)


    }
    if (key == "Escape") closeDropdown()
    if (key == "Enter") insertCharacter(args.editor, args.currentLine)



}





function updateDropdownPosition(args) {
    const cursor = args.editor.state.selection.$cursor
    const rect = (args.editor.view.coordsAtPos(cursor.pos))
    const dropdownWindow = document.getElementById("character-dropdown")
    const cardDom = document.getElementById("card-" + args.card.id)
    dropdownWindow.style.top = rect.top + 25 + "px"
    dropdownWindow.style.left = rect.left + "px"
}


function insertCharacter(editor, currentLine) {


    const characterDropdown = get(_state).characterDropdown
    if (!characterDropdown.open) return

    let selectedName = characterDropdown.characters[characterDropdown.selected]

    if (!selectedName) {
        console.log("here");
        editor.commands.insertContent('\n')
        return false
    }


    console.log("here2")


    if (!editor) return;
    const view = editor.view;
    const schema = editor.schema;
    const state = editor.state;

    const $pos = state.doc.resolve(view.state.selection.$from.pos);
    const node = schema.nodes.char.create(null, [schema.text("@" + selectedName)]);

    editor.view.dispatch(replaceParentNodeOfType(schema.nodes.char, node)(state.tr));


    const p = findParentNodeOfType(editor.schema.nodes.char)(editor.state.selection);
    if (!p) return;
    const start = p.start;
    const end = p.start + p.node.nodeSize - 2;
    editor.commands.setTextSelection(end);

    setTimeout(() => {
        closeDropdown()
    }, 300);





}




// creates the dropdown list to choose a character
function createNewList(currentLine) {


    _state.setKey("characterDropdown.selected", 0)

    if (!currentLine) return

    currentLine = currentLine.toUpperCase().slice(1)
    const cards = cardsDb.getAsArray()
    let allCharacters = []

    // create a list of allCharacters in the script
    cards.forEach(function (card) {
        card.characters.forEach(function (character) {
            if (!allCharacters.includes(character)) allCharacters.push(character);
        })
    })


    // create the dropdown by checking if the current line matches any in  allCharacters 
    let dropdownList = []
    allCharacters.forEach(character => {
        if (!dropdownList.includes(character)) {
            if (character.startsWith(currentLine) && character.length && character != currentLine) dropdownList.push(character)
        }
    });


    dropdownList = dropdownList.slice(0, 5)
    _state.setKey("characterDropdown.characters", dropdownList)
}