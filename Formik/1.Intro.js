Formik is a worlds most popular library to create forms in react/react-native.

Why Formik
  1. to manage form data
  2. form submission
  3. form validation & displaying error messagaes
  
Formik makes it very easier than traditional approach.

to install:- npm install formik --save

Code example that i implemented:- https://github.com/laiqbudye/formik-sample-form

1. useFormik()
      is a hook/function which takes initial values for form elements & returns an obj (which contains properties & methods that we can use)


function YouTubeForm() {
    const formik = useFormik({    // useFormik hook returns an object which includes current state values & handlers for change, submit form data
        initialValues:{
            name: '',     // here name, email & channel is the value we assined for name attribute of a form element.
            email: '',
            channel: ''
        },
        onSubmit: (values) => {       // here in values it gets latests values of form fields
            console.log("Submisssion",values)    
        },
        validate: (values) => {    // to validate user inputs, this function should return an error obj
            let errors = {}

            if (!values.name) {
                errors.name = "Required"
            }

            return errors;
        }
    });  
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="name"></label>
                <input type="text" name="name" id="name" onChange={formik.handleChange} value={formik.values.name}/>

                <label htmlFor="email"></label>
                <input type="email" name="email" id="email" onChange={formik.handleChange} value={formik.values.email}/>

                <label htmlFor="channel"></label>
                <input type="text" name="channel" id="channel" onChange={formik.handleChange} value={formik.values.channel}/>

                <button>Submit</button>
            </form>
        </div>
    )
}


handleChange
  this method is provided by formik to handle input change event. it automatically changes state internally & upadates view by formik.values.name or email etc.
  
  
handleSubmit / onSubmit
  this method is provided by formik to handle form submit event. it automatically calls the onSubmit method which we added in useFormik hook.
  

 validate  (to see this in an actual code please go through my formik repo)
   this is a function we add in a useFormik hook which can be used to validate user inputs & show errors. this function should return an array of errors.
   we get error msgs as:- formik.errors.name / formik.errors.email / formik.errors.channel


handleBlur 
  is a handler form formik, which keeps tracks of visited fields i.e. which form fields are touched by user.
  we get that data as:- formik.touched.name // true/false    formik.touched.email    formik.touched.channel
  
  
handleReset / formik.resetForm()
   it will reset the form to initial state
   

