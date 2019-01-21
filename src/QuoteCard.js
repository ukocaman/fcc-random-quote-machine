import React from 'react'
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

const styles = {
  card: {
    maxWidth: 600,
  },
  quote: {
    fontSize: 18,
    fontStyle: 'italic',
  },
  author: {
    fontSize: 18,
    textAlign: 'right',
  },
  actions: {
    display: 'flex',
    justifyContent: 'space-between'
  },
}

const TwitterLogo = () => <FontAwesomeIcon icon={faTwitter} size='lg' color='white' />

const QuoteCard = (props) => (
  <Card id='quote-box' style={styles.card}>
    <CardContent>
      <Typography id='text' style={styles.quote}>
        {props.quote.text}
      </Typography>
      <Typography id='author' style={styles.author}>
        {props.quote.author}
      </Typography>
    </CardContent>
    <CardActions style={styles.actions}>
      <Button
        id='tweet-quote' 
        size='small'
        style={{ backgroundColor: props.color, height: 30 }}
        href={`http://www.twitter.com/intent/tweet?text=${props.quote.text} ${props.quote.author}`}
        target='_blank'>
        <TwitterLogo />
      </Button>
      <Button 
        id='new-quote'
        size='small'
        style={{color: 'white', backgroundColor: props.color}}
        onClick={props.onClick}>
        New Quote
      </Button>
    </CardActions>
  </Card>
)

export default QuoteCard