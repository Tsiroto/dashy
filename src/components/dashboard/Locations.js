import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { FloridaWeather, BremenWeather, AthensWeather, VictoriaWeather, AucklandWeather, JiangsuWeather, ShanghaiWeather } from './Weather'
import moment from 'moment-timezone'
// import styled from 'styled-components'


const useStyles = makeStyles({
  rooty: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    '& .location': {
      margin: 6,
      color: '#002157',
    },
    '& .MuiCardContent-root': {
      padding: 10,
      color: '#002157',
      minWidth: 180,
    },
    '& .MuiTypography-root': {
      marginLeft: 10,
    },
    '& .MuiCardActions-root': {
      padding: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      '& button': {
        fontSize: '0.95rem',
        width: '90%',
        color: '#002157d6',
        margin: '6px auto',
        backgroundColor: 'rgba(63, 81, 181, 0.04)',
      },
      '& button:hover': {
        backgroundColor: 'rgba(63, 81, 181, 0.14)',
      },
    },
    
  },
  activity: {
    color: 'green',
    marginLeft: 10,
    fontWeight: 500,
  }
});

export default function Location() {
  const classes = useStyles();
  const floridaTime = moment().tz('America/Kentucky/Monticello').format('LT')
  const bremenTime = moment().tz('Europe/Busingen').format('LT')
  const athensTime = moment().tz('Europe/Athens').format('LT')
  const victoriaTime = moment().tz('Australia/Melbourne').format('LT')
  const aucklandTime = moment().tz('Pacific/Auckland').format('LT')
  const jiangsuTime = moment().tz('Asia/Shanghai').format('LT')
  const shanghaiTime = moment().tz('Asia/Shanghai').format('LT')

  return (
    <div className={classes.rooty} >

      <Card className="location">
          <CardActionArea>
            <CardContent>
              <FloridaWeather />
              <Typography variant="body1" color="textPrimary" component="p">
                <br/>{floridaTime}
              </Typography>
              <Typography variant="body1" color="textPrimary" component="p">
                Status: <span className={classes.activity}>Active</span>
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" className="buttOn">
              Reports
            </Button>
          </CardActions>
        </Card>

        <Card className="location">
          <CardActionArea>
            <CardContent>
              <BremenWeather />
              <Typography variant="body1" color="textPrimary" component="p">
              <br/>{bremenTime}
              </Typography>
              <Typography variant="body1" color="textPrimary" component="p">
                Status: <span className={classes.activity}>Active</span>
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Reports
            </Button>
          </CardActions>
        </Card>

        <Card className="location">
          <CardActionArea>
            <CardContent>
              <AthensWeather />
              <Typography variant="body1" color="textPrimary" component="p">
              <br/>{athensTime} 
              </Typography>
              <Typography variant="body1" color="textPrimary" component="p">
                Status: <span className={classes.activity}>Active</span>
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Reports
            </Button>
          </CardActions>
        </Card>
        
        <Card className="location">
          <CardActionArea>
            <CardContent>
              <VictoriaWeather />
              <Typography variant="body1" color="textPrimary" component="p">
              <br/>{victoriaTime}
              </Typography>
              <Typography variant="body1" color="textPrimary" component="p">
                Status: <span className={classes.activity}>Active</span>
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Reports
            </Button>
          </CardActions>
        </Card>

        <Card className="location">
          <CardActionArea>
            <CardContent>
              <AucklandWeather />
              <Typography variant="body1" color="textPrimary" component="p">
              <br/>{aucklandTime}
              </Typography>
              <Typography variant="body1" color="textPrimary" component="p">
                Status: <span className={classes.activity}>Active</span>
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Reports
            </Button>
          </CardActions>
        </Card>
        
        <Card className="location">
          <CardActionArea>
            <CardContent>
              <JiangsuWeather />
              <Typography variant="body1" color="textPrimary" component="p">
              <br/>{jiangsuTime}
              </Typography>
              <Typography variant="body1" color="textPrimary" component="p">
                Status: <span className={classes.activity}>Active</span>
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Reports
            </Button>
          </CardActions>
        </Card>

        <Card className="location">
          <CardActionArea>
            <CardContent>
              <ShanghaiWeather />
              <Typography variant="body1" color="textPrimary" component="p">
              <br/>{shanghaiTime} 
              </Typography>
              <Typography variant="body1" color="textPrimary" component="p">
                Status: <span className={classes.activity}>Active</span>
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Reports
            </Button>
          </CardActions>
        </Card> 

    </div>
  )
}

