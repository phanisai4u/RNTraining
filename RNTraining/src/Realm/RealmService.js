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

export let saveTask = (item) => {
    repository.write(() => {
        item.updatedAt = new Date();
        repository.create('Todo', item);
      })
}

export let getTasks = () =>{
    return repository.objects('Todo');
}
