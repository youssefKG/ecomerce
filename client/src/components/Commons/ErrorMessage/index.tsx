const ErrorMessage = ({ message }: { message: string }) => {
  return (
    <>
      {message && <p className="font-medium text-red-700 text-sm">{message}</p>}
    </>
  );
};

export default ErrorMessage;
