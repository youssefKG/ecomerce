import { useSnackbar, VariantType } from "notistack";
const handleShowAlert = (variant: VariantType, message: string) => {
  const { enqueueSnackbar } = useSnackbar();
  return enqueueSnackbar(message, { variant });
};
export default handleShowAlert;
