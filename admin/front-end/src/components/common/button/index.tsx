import { FC, JSX } from "react";
import { FadeLoader } from "react-spinners";

interface IButtonPorps {
  children: JSX.Element[] | JSX.Element;
  handleClick?: <T>(params: T) => Promise<void>;
  isLoading?: boolean;
  className?: string;
  spinnerSize?: { width: number; height: number };
  spinnerColor?: string;
}

const Button: FC<IButtonPorps> = ({
  children,
  handleClick,
  className,
  isLoading,
  spinnerSize,
  spinnerColor,
}) => {
  return (
    <button className={className} onClick={handleClick} disabled={isLoading}>
      {isLoading && (
        <FadeLoader
          loading={isLoading}
          color={spinnerColor}
          height={spinnerSize?.height}
          width={spinnerSize?.width}
        />
      )}
      {!isLoading && children}
    </button>
  );
};

export default Button;
