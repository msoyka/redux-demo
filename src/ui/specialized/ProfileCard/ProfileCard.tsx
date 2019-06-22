import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { IProfile } from 'common/api-models';

interface IProps {
  profile: IProfile;
}

const useStyles = makeStyles(
  createStyles({
    card: {
      minWidth: 275,
      maxWidth: 500,
    },
    avatar: {
      margin: 10,
      width: 60,
      height: 60,
    },
    username: {
      marginBottom: 12,
    },
  }),
);

const ProfileCard = ({ profile: { username, firstName, lastName, avatarURL } }: IProps) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent>
        <Avatar alt="User Avatar" src={avatarURL} className={classes.avatar} />
        <Typography variant="h5" component="h2">
          {`${firstName} ${lastName}`}
        </Typography>
        <Typography className={classes.username} color="textSecondary">
          username: {username}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
