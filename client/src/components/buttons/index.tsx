import "./index.css";
interface Props {
  children: string;
}
const AuthButton = ({ children }: Props) => {
  return <button className="btn-auth">{children}</button>;
};
export { AuthButton };
