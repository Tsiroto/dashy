import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';

function Dashboard() {
  return (
    <div>
      <Card>
        <CardHeader title="Welcome to the administration" />
        <CardContent>Yolo Motherfucker</CardContent>
      </Card>
      <Card>
        <CardHeader title="Time in" />
        <CardContent>Athens - Europe</CardContent>
        <CardContent>Germany - Europe</CardContent>
        <CardContent>Florida - USA</CardContent>
        <CardContent>Victoria - Australia</CardContent>
        <CardContent>Auckland - New Zealand</CardContent>
        <CardContent>Jiangsu - China</CardContent>
        <CardContent>Shanghai - China</CardContent>
      </Card>
    </div>
  )
}

export default Dashboard
