import Realm from 'realm';

let repository = new Realm({
    schema: [{
        name: 'Todo',
        primaryKey: 'id',
        properties: {
            id: 'string',
            title: 'string',
            completed: 'bool',
            createdAt: 'date',
            updatedAt: 'date'
        }
    }]
});

export const saveTask = (item) => {
    repository.write(() => {
        item.updatedAt = new Date();
        repository.create('Todo', item);
    })
}

export const getTasks = () => {
    return repository.objects('Todo');
}

export const updateTask = (item) => {
    const task = repository.objects('Todo').filtered("id ='" + item.id + "'")[0];
    console.log("Task to update::", task);
    repository.write(() => {
        task.title = item.title;
        task.updatedAt = new Date();
    })
}

export const deleteTask = (item) => {
    const task = repository.objects('Todo').filtered("id ='" + item.id + "'")[0];
    console.log("Task to delete::", task);
    repository.write(() => {
        repository.delete(task);
    })
}