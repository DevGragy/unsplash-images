import useImages from "../../hooks/useImages";
import {Formik, Form, Field} from "formik";
import ImagesContainer from "../ImagesContainer/ImagesContainer";
import "./FormImages.css"

const FormImages = () => {
    const {images, handleImages} = useImages()

    return (
        <main>
            <Formik initialValues={{search: ""}} onSubmit={handleImages}>
                <Form>
                    <Field name="search" />
                </Form>
            </Formik>
            <ImagesContainer search={images}/>
        </main>
    );
};

export default FormImages;
