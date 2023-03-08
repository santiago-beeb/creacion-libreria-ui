import { forwardRef } from 'react';
import { cx, css } from '@emotion/css';
import { PropTypes } from 'prop-types';

const ContainerFlexStyles = (
  width,
  height,
  bgColor,
  flexDirection,
  alignContent,
  alignItems,
  justifyContent,
  gap
) => css`
  width: ${width || '100%'};
  height: ${height || '100%'};
  display: flex;
  flex-direction: ${flexDirection};
  aling-content: ${alignContent};
  align-items: ${alignItems};
  justify-content: ${justifyContent};
  gap: ${gap};
  background-color: ${bgColor};
`;

const ContainerFlex = forwardRef((props, ref) => {
  const {
    className,
    width,
    height,
    bgColor,
    flexDirection,
    alignContent,
    alignItems,
    justifyContent,
    gap,
    ...otherProps
  } = props;

  return (
    <section
      ref={ref}
      {...otherProps}
      className={cx(
        ContainerFlexStyles(
          width,
          height,
          bgColor,
          flexDirection,
          alignContent,
          alignItems,
          justifyContent,
          gap
        ),
        className
      )}
    />
  );
});

ContainerFlex.propTypes = {
  className: PropTypes.string,
  width: PropTypes.string,
  heigth: PropTypes.string,
  bgcolor: PropTypes.string,
  gap: PropTypes.string,
  flexDirection: PropTypes.oneOf([
    'column',
    'column-reverse',
    'row',
    'row-reverse',
  ]),
  alignContent: PropTypes.oneOf([
    'center',
    'flex-start',
    'flex-end',
    'space-around',
    'space-between',
    'stretch',
  ]),
  alignItems: PropTypes.oneOf(['center', 'flex-start', 'flex-end', 'stretch']),
  justifyContent: PropTypes.oneOf([
    'center',
    'flex-start',
    'flex-end',
    'space-around',
    'space-between',
    'space-evenly',
  ]),
};

export default ContainerFlex;
