interface CircularBlurProps {
  direction: "left" | "right";
}

export const CircularBlur: React.FC<CircularBlurProps> = ({ direction }) => {
  return (
    <div
      className={`blur-div text-white absolute top-1/2 -translate-y-1/2 
        ${direction === "left" ? "-left-[17.5rem]" : "-right-[17.5rem]"}
        
        w-[35rem] h-[35rem] bg-[#372A19] blur-[150px] rounded-full z-50`}
    ></div>
  );
};