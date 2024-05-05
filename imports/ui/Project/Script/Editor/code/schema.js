import { Node } from '@tiptap/core'

const Document = Node.create({
    name: 'doc',
    topNode: true,
    content: 'cards',
})

const Cards = Node.create({
    name: 'cards',

    content: 'card+', // Change content to 'card+'
    parseHTML() {
        return [
            { tag: 'cards' },
        ]
    },
    renderHTML({ HTMLAttributes }) {
        return ['cards', HTMLAttributes, 0]
    },
})

const Card = Node.create({
    name: 'card',

    content: 'paragraph+', // Change content to 'paragraph+'
    parseHTML() {
        return [
            { tag: 'card' },
        ]
    },
    renderHTML({ HTMLAttributes }) {
        return ['card', HTMLAttributes, 0]
    },
})


const Paragraph = Node.create({
    name: 'paragraph',
    group: 'block',
    content: 'text*', // Define content for paragraph
    parseHTML() {
        return [
            { tag: 'p' },
        ]
    },
    renderHTML({ HTMLAttributes }) {
        return ['p', HTMLAttributes, 0]
    },
})

const Text = Node.create({
    name: 'text',
    group: 'inline',
})


export const schema = [Document, Cards, Card, Paragraph, Text]
