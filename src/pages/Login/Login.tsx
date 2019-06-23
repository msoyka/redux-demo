// ==== @External ====
import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

// ==== @Material UI ====
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';

// ==== @Internal Data ====
import { IRootState } from 'data/rootReducer';
import {
  getProfile,
  getProfileLoading,
  getProfileError,
} from 'data/profile/selectors';
import { IState as IProfileState } from 'data/profile';

// ==== @Internal UI ====
import ProfileLoginButtons from 'ui/specialized/ProfileLoginButtons';
import ImageWithContentFullHeightColumns from 'layouts/ImageWithContentFullHeightColumns';
import ProfileCard from 'ui/specialized/ProfileCard';
import ProgressIndicator from 'ui/generic/ProgressIndicator';
import ErrorSnackbar from 'ui/generic/ErrorSnackbar';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      alignSelf: 'center',
    },
    avatar: {
      marginBottom: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
  }),
);

interface IStoreProps {
  profileError: IProfileState['error'];
  profile: IProfileState['data'];
  profileLoading: IProfileState['loading'];
}

const LoginPage = ({ profileLoading, profile, profileError }: IStoreProps) => {
  const classes = useStyles();

  return (
    <ImageWithContentFullHeightColumns imageURL="https://source.unsplash.com/NFs6dRTBgaM/1600x900">
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="p">
          <FormattedMessage
            id="app.title"
            defaultMessage="Welcome to {what}"
            description="Welcome header on app main page"
            values={{ what: 'My App' }}
          />
        </Typography>

        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <br />
        {profileLoading && <ProgressIndicator />}
        {profileError && <ErrorSnackbar message={profileError.message} />}
        {profile && <ProfileCard profile={profile} />}
        <br />
        <ProfileLoginButtons />
      </Paper>
    </ImageWithContentFullHeightColumns>
  );
};

const mapStateToProps = (state: IRootState) => {
  return {
    profile: getProfile(state),
    profileLoading: getProfileLoading(state),
    profileError: getProfileError(state),
  };
};

export default connect(mapStateToProps)(LoginPage);
