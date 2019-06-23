import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';

interface IProps {
  children: React.ReactNode;
  imageURL: string;
}

const useStyles = makeStyles(
  createStyles({
    root: {
      height: '100vh',
    },
    image: {
      backgroundImage: ({ imageURL }: Partial<IProps>) =>
        imageURL
          ? `url(${imageURL})`
          : 'linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'top center',
    },
    contentPanel: {
      // display: flex,
    },
  }),
);

const ImageWithContentFullHeightColumns = ({ children, imageURL }: IProps) => {
  const classes = useStyles({ imageURL });

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid
        container
        item
        direction="column"
        justify="center"
        xs={12}
        sm={8}
        md={5}
        className={classes.contentPanel}
      >
        {children}
      </Grid>
    </Grid>
  );
};

export default ImageWithContentFullHeightColumns;
