import React from 'react';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Fade from '@mui/material/Fade';
import { styled } from '@mui/material/styles';

const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  transitionDuration: 'unset',

  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
    fontSize: 13,
    padding: 10,
    margin:'0 !important',
    lineHeight: '20px',

    '& p': {
      margin: 0,
      textAlign: 'center',
      padding: 2
    }
  },
}));

const CustomTooltip = ({
  title,
  placement,
  children,
  ...rest
}) => {
  return (
    <LightTooltip
      title={title}
      placement={placement}
      TransitionComponent={Fade}
      enterDelay={500}
      enterNextDelay={500}
      {...rest}
    >
      {children}
    </LightTooltip>
  )
}

export default CustomTooltip;