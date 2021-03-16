import { Edit, SimpleForm, TextInput, EmailField } from 'react-admin'

function UserEdit(props) {
  return (
    <Edit title='Edit User' {...props}>
      <SimpleForm>
        <TextInput disabled source='id' />
        <TextInput source='name' />
        <TextInput source='username' />
        <EmailField source='email' />
      </SimpleForm>
    </Edit>
  )
}

export default UserEdit
