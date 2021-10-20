
import * as React from "react";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Box } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";

export default function MovieCard({movie,handleName}) {
 
  return (
    <Card style={{width:"25%", margin:"2%"}}>
      <CardMedia style={{width:"100%", height: "400px"}}
        component="img"
        image={movie.image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" onClick={() => handleName(movie.name)} >
        {movie.name}
        </Typography>
       
        <div className="card_right__details">
          <ul>
            <li>{movie.date}</li>
            <li>||</li>
            <li>{movie.type}</li>
          </ul>
        </div>
        <Typography variant="body2" color="text.secondary">
          {movie.description}
        </Typography>
        
      </CardContent>
      <CardActions>
      <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Typography component="legend">Read only</Typography>
      <Rating name="read-only" value={movie.rating} readOnly />
      </Box>
      </CardActions>
    </Card>
  );
    }
