Formik is a worlds most popular library to create forms in react/react-native.

Why Formik
  1. to manage form data
  2. form submission
  3. form validation & displaying error messagaes
  
Formik makes it very easier than traditional approach.

to install:- npm install formik --save


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
  
  
handleSubmit
  this method is provided by formik to handle form submit event. it automatically
  
  
  
  
  

