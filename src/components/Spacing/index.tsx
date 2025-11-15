export interface SpacingType {
  size?: number;
}

function Spacing({ size = 100, ...props }: SpacingType) {
  return (
    <>
      <div style={{ height: `${size}px` }} {...props}></div>
    </>
  );
}

export default Spacing;
