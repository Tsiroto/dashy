import { SimpleList, Datagrid, List, TextField, EditButton, DeleteButton, EmailField, Filter, TextInput } from 'react-admin'
import SearchIcon from '@material-ui/icons/Search';
import { useMediaQuery } from '@material-ui/core';

function UserList(props) {

  const UserFilter = (props) => (
    <Filter {...props} icon={SearchIcon}>
        <TextInput label="Search" source="q" alwaysOn />
        <TextInput label="Name" source="name" defaultValue="Search by Name" />
        <TextInput label="Username" source="username" defaultValue="Search by username" />
        <TextInput label="Email" source="email" defaultValue="Search by email" />
        <TextInput label="Department" source="department" defaultValue="Search by department" />
    </Filter>
  );

  const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));

  return (
    <List title='User List' {...props} filters={<UserFilter />}>
      {isSmall ? (
        <SimpleList rowClick="show"
            primaryText={record => record.name}
            secondaryText={record => record.username}
            tertiaryText={record => record.email}
        />
      ) : (
        <Datagrid rowClick="show">
          <TextField source="id" />
          <TextField source="name" />
          <TextField source="username" />
          <EmailField source="email" />
          <TextField source="phone" />
          <TextField label="Location" source="address.city" />
          <EditButton basePath='/users' />
          <DeleteButton basePath='/users' />
        </Datagrid>
      )}
    </List>
  )
}

export default UserList
