import { List, Datagrid, TextField, EditButton, DeleteButton, Filter, TextInput, ImageField, UrlField  } from 'react-admin'
import SearchIcon from '@material-ui/icons/Search';

function ProductList(props) {

  const ProductFilter = (props) => (
    <Filter {...props} icon={SearchIcon}>
        <TextInput label="Search" source="q" alwaysOn />
        <TextInput label="SKU" source="id" defaultValue="Search by SKU" />
        <TextInput label="Title" source="title" defaultValue="Search by Title" />
    </Filter>
  );

  return (
    <List title="Product List" {...props} filters={<ProductFilter />} >
      <Datagrid rowClick="show">
        <TextField label="SKU" source="id" />
        <TextField label="Title" source='title' />
        <UrlField label="URL" source='url' />
        <ImageField  label="Preview" source='thumbnailUrl' />
        <EditButton basePath='/todos' />
        <DeleteButton basePath='/todos' />
      </Datagrid>
    </List>
  )
}

export default ProductList
