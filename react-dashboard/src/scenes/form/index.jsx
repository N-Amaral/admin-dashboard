import { Box, TextField, Button } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  address1: "",
  address2: "",
};

const phoneRegExp = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const userSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("Invalid email").required("required"),
  contact: yup.string().matches(phoneRegExp, "Phone number is not valid").required("required"),
  address1: yup.string().required("required"),
  address2: yup.string().required("required"),
});

const Form = () => {
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const handleFormSubmit = (values) => {
    console.log(values);
  };

  const formContent = [
    { label: "First Name", value: "firstName", style: "span 2" },
    { label: "Last Name", value: "lastName", style: "span 2" },
    { label: "Email", value: "email", style: "span 4" },
    { label: "Contact", value: "contact", style: "span 4" },
    { label: "Address 1", value: "address1", style: "span 4" },
    { label: "Address 2", value: "address2", style: "span 4" },
  ];
  return (
    <Box m="20px">
      <Header title="CREATE USER" subtitle="Create a New User Profile" />
      <Formik onSubmit={handleFormSubmit} initialValues={initialValues} validationSchema={userSchema}>
        {({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4,minmax(0,1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              {formContent.map((content, i) => (
                <TextField
                  key={`${content.value}-${i}`}
                  fullWidth
                  variant="filled"
                  type="text"
                  label={content.label}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values[`${content.value}`]}
                  name={`${content.value}`}
                  error={!!touched[`${content.value}`] && !!errors[`${content.value}`]}
                  helperText={touched[`${content.value}`] && errors[`${content.value}`]}
                  sx={{ gridColumn: `${content.style}` }}
                />
              ))}
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Create New User
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default Form;
