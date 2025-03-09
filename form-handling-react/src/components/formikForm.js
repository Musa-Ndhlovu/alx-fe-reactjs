import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
 
const validationSchema = Yup.object ({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    Number: Yup.string().required('Number must begin with +27')
    
});

const FormikForm = () => (
    <Formik
        initialValues={{ name: '', email: '', number:'' }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
            console.log(values);
        }}
    >
       
            <Form>
                <Field type = "text" name = "name" />
                <ErrorMessage name = "name" component = "div" />

                <Field type = "email" name = "email" />
                <ErrorMessage name = "email" component = "div" />

                <Field type = "number" name = "contact" />
                <ErrorMessage name = "number" component = "div" />
                
                <button type="submit">Submit</button>
            </Form>
       
    </Formik>
);



 export default formikForm;