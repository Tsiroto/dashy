import { Show, EmailField, SimpleShowLayout, TextField, EditButton, DeleteButton, Button } from 'react-admin'

function UserShow(props) {
  return (
    <Show title='User Details' {...props}>
      <SimpleShowLayout rowClick="edit">
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="username" />
        <EmailField source="email" />
        <TextField label="Address" source="address.street" />
        <TextField label="City" source="address.city" />
        <TextField source="phone" />
        <TextField source="website" />
        <TextField label="Company" source="company.name" />
        <TextField label="Job Title" />
        <TextField label="Line Manager" />
        <Button label="Team"/>
        <EditButton basePath='/users' />
        <DeleteButton basePath='/users' />
      </SimpleShowLayout>
    </Show>
  )
}

export default UserShow
