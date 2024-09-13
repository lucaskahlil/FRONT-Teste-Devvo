import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useCreateRing } from "../../../hooks";
import { typeRingEnum } from "../../../enums";
import { Button } from "../../ui/button";

const RingFormSchema = Yup.object().shape({
    name: Yup.string().required("Nome é obrigatório"),
    power: Yup.string().required("Poder é obrigatório"),
    ringBearer: Yup.string().required("Portador é obrigatório"),
    forger: Yup.string().required("Forjador é obrigatório"),
    type: Yup.string()
        .oneOf([typeRingEnum[0], typeRingEnum[1], typeRingEnum[2], typeRingEnum[3]], "Tipo inválido")
        .required("Tipo de anel é obrigatório"),
    image: Yup.mixed().nullable().required("Imagem é obrigatória"),
});

const RingForm: React.FC = () => {
    const { createRing, loading } = useCreateRing();

    return (
        <Formik
            initialValues={{
                name: "",
                power: "",
                ringBearer: "",
                forger: "",
                type: typeRingEnum[0],
                image: null,
            }}
            validationSchema={RingFormSchema}
            onSubmit={async (values) => {
                await createRing(values);
            }}
        >
            {({ setFieldValue }) => (
                <Form className="max-w-[500px] flex flex-col gap-5 mt-6">
                    <div className="flex flex-col gap-2 justify-normal">
                        <label htmlFor="name" className="font-inter text-sm font-medium leading-[18.48px] text-left text-white">Nome do Anel</label>
                        <Field
                            name="name"
                            type="text"
                            className="bg-zinc-800 h-12 pl-3 pr-3 rounded-lg text-white border border-solid border-gray-500"
                        />
                        <ErrorMessage name="name" component="div" className="text-red-400" />
                    </div>

                    <div className="flex flex-col gap-2 justify-normal">
                        <label htmlFor="power" className="font-inter text-sm font-medium leading-[18.48px] text-left text-white">Poder</label>
                        <Field name="power" type="text" className="bg-zinc-800 h-12 pl-3 pr-3 rounded-lg text-white border border-solid border-gray-500" />
                        <ErrorMessage name="power" component="div" className="text-red-400" />
                    </div>

                    <div className="flex flex-col gap-2 justify-normal">
                        <label htmlFor="ringBearer" className="font-inter text-sm font-medium leading-[18.48px] text-left text-white">Portador do Anel</label>
                        <Field name="ringBearer" type="text" className="bg-zinc-800 h-12 pl-3 pr-3 rounded-lg text-white border border-solid border-gray-500" />
                        <ErrorMessage name="ringBearer" component="div" className="text-red-400" />
                    </div>

                    <div className="flex flex-col gap-2 justify-normal">
                        <label htmlFor="forger" className="font-inter text-sm font-medium leading-[18.48px] text-left text-white">Forjador</label>
                        <Field name="forger" type="text" className="bg-zinc-800 h-12 pl-3 pr-3 rounded-lg text-white border border-solid border-gray-500" />
                        <ErrorMessage name="forger" component="div" className="text-red-400" />
                    </div>

                    <div className="flex flex-col gap-2 justify-normal">
                        <label htmlFor="type" className="font-inter text-sm font-medium leading-[18.48px] text-left text-white">Tipo de Anel</label>
                        <Field name="type" as="select" className="bg-zinc-800 h-12 pl-3 pr-3 rounded-lg text-white border border-solid border-gray-500">
                            <option value="HUMAN">Humano</option>
                            <option value="ELF">Elfo</option>
                            <option value="DWARF">Anão</option>
                            <option value="SAURON">Sauron</option>
                        </Field>
                        <ErrorMessage name="type" component="div" className="text-red-400" />
                    </div>

                    <div className="flex flex-col gap-2 justify-normal">
                        <label htmlFor="image" className="font-inter text-sm font-medium leading-[18.48px] text-left text-white">Imagem</label>
                        <input
                            name="image"
                            type="file"
                            onChange={(event) => {
                                setFieldValue("image", event.currentTarget.files);
                            }}
                        />
                        <ErrorMessage name="image" component="div" className="text-red-400" />
                    </div>

                    <Button type="submit" disabled={loading} className="bg-yellow-200 text-black hover:text-white">
                        Forjar Anel
                    </Button>
                </Form>

            )}
        </Formik>
    );
};

export default RingForm;