import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import { donateImgData } from './donateImgData';
import LinkIcon from '@material-ui/icons/Link';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles({
    root: {
      maxWidth: 800,
      flexGrow: 1,
      padding: 6,
      margin: 'auto',
    },
    header: {
      paddingTop: '4%',
      display: 'flex',
      alignItems: 'center',
      height: 75,
    },
    headerText: {
      width: '100%',
      maxWidth: 800,
    },
    sizing:{
      position: "relative",
      paddingBottom: "56.25%" /* 16:9 */,
      paddingTop: 25,
      height: 0
    },
    img: {
      height: 450,
      maxWidth: 800,
      overflow: 'hidden',
      display: 'block',
      width: '100%',
    },
    button: {
      color: 'red',
    }
});

export default function Donate() {
  const classes = useStyles({});
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = donateImgData.length;

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  return (
    <div className={classes.root}>
    <Paper >
      <Paper square elevation={0} className={classes.header}>
        <div className={classes.headerText}>
        <Typography variant = "h5" gutterBottom>{donateImgData[activeStep].label} </Typography>
        <Divider />
        <IconButton className = {classes.button} aria-label={`link`} target="_blank" href={donateImgData[activeStep].link}>
              <LinkIcon />
        </IconButton>
        <Typography variant="caption" gutterBottom>{donateImgData[activeStep].description}</Typography>
        </div>
      </Paper>
      <div
      className={classes.sizing}
      >
        <img
          title={donateImgData[activeStep].label}
          src={donateImgData[activeStep].imgPath}
          alt={donateImgData[activeStep].label}
        />
      </div>
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        }
      />
      </Paper>
    </div>
  );
}
