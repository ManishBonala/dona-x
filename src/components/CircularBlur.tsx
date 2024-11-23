interface CircularBlurProps {
  direction: 'left' | 'right';
}

export const CircularBlur: React.FC<CircularBlurProps> = ({ direction }) => {
  const positionStyle = {
    position: 'absolute',
    width: '1000px',
    height: '1000px',
    background: 'rgba(55, 42, 25, 1)',
    borderRadius: '50%',
    filter: 'blur(600px)',
    zIndex: 1000,
  } as const;

  return <div style={positionStyle} />;
};
