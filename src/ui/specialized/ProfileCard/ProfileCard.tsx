import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { IProfile } from 'common/api-models';

interface IProps {
  profile: IProfile;
}

const useStyles = makeStyles(
  createStyles({
    card: {
      width: 300,
      boxShadow: 'none',
    },
  }),
);

const ProfileCard = ({
  profile: { username, firstName, lastName, avatarURL },
}: IProps) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={`${username} Profile Image`}
          height="140"
          image={avatarURL}
          title={`${username} Profile Image`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {`${firstName} ${lastName}`}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            username: {username}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProfileCard;
