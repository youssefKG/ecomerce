const ErrorMessage = ({ message }: { message: string }) => {
  return (
    <>
      {message && <p className="font-medium text-red-700 text-xs">{message}</p>}
    </>
  );
};

export default ErrorMessage;
