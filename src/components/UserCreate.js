import { Create, EmailField, SimpleForm, TextInput, SelectField } from 'react-admin'

function UserCreate(props) {
  return (
    <Create title='Create a User' {...props}>
      <SimpleForm>
        <TextInput source='name' />
        <TextInput required source='username' />
        <EmailField source='email' />
        <TextInput label="Location" source='address.city' />
        <TextInput source='phone' />
        <SelectField label="Role" source="role" choices={[
          { id: 'A', name: 'Admin' },
          { id: 'M', name: 'Manager' },
          { id: 'U', name: 'User' },
          { id: 'G', name: 'Guest' },
        ]} />
      </SimpleForm>
    </Create>
  )
}

export default UserCreate
