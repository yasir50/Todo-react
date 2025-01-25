import Input from "@mui/joy/Input";

export default function InputField({ placeHolder, targetValue, values }) {
  return (
    <>
      <Input
        placeholder={placeHolder}
        variant="soft"
        onChange={(e) => {
          targetValue(e.target.value);
        }}
        value={values}
      />
    </>
  );
}
