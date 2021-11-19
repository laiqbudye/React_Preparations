yup:-
  is a small library which is used to validate forms.
  e.g we can make field required, or min or max no. of characters can be cheked with it.
  
  to install:- npm i --save yup
  
  usage:-
    import * as yup from 'yup';
    or
    let yup = require('yup');

  
  we need to create schema object using yup and need to pass that schema obj to validate.
  e.g

    const validationSchema = Yup.object({
        name: Yup.string().required('Required'),
        email: Yup.string().email("Invalid email format").required("Required"),
        channel: Yup.string().required("Required").min(4).max(8)
    })
  
    const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
    });
      
  
