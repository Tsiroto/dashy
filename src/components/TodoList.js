import { List, Datagrid, TextField, DateField, EditButton, DeleteButton, Filter, TextInput } from 'react-admin'
import SearchIcon from '@material-ui/icons/Search';

function TodoList(props) {

  const TodoFilter = (props) => (
    <Filter {...props} icon={SearchIcon}>
        <TextInput label="Search" source="q" alwaysOn />
        <TextInput label="Title" source="title" defaultValue="Search by Title" />
        <TextInput label="Status" source="completed" defaultValue="Search by Status" />
    </Filter>
  );

  return (
    <List title="Task List" {...props} filters={<TodoFilter />} >
      <Datagrid rowClick="show">
        <TextField label="Created by" source="userId" />
        <TextField label="Task" source='title' />
        <DateField label="Publication date" source='created_at' />
        <TextField label="Status" source='completed' />
        <EditButton basePath='/todos' />
        <DeleteButton basePath='/todos' />
      </Datagrid>
    </List>
  )
}

export default TodoList
