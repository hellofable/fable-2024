import { Meteor } from 'meteor/meteor';
import { ProjectsCollection } from '/imports/api/projects';




Meteor.publish('projects.all', function publishProjectsAll() {
    const projects = ProjectsCollection.find();
    return projects
})

Meteor.publish('projects.one', function publishOneProject(projectId) {
    const project = ProjectsCollection.find({ _id: projectId });
    return project
})








// project methods
Meteor.methods({
    'projects.insert': async function (fields) {
        // make sure user is logged in before continuing
        const userId = Meteor.userId() || 123
        if (!userId) return

        // set some default fields for new projects
        fields.inTrash = false
        fields.createdAt = new Date()

        // insert the new project
        const projectId = await ProjectsCollection.
            insertAsync({
                title: fields.title,
                synopsis: fields.synopsis,
                inTrash: fields.inTrash,
                numScripts: 0,
                createdAt: new Date(),
                userId
            });
        return (projectId);
    },
    'projects.remove': async function (projectId) {
        const removed = await ProjectsCollection.removeAsync(projectId);
        return removed
    }
})


