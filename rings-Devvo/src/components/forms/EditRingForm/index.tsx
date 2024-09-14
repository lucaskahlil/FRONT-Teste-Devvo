import { ErrorMessage, Field, Form, Formik } from "formik";
import { useGetRingById, useUpdateRing } from "../../../hooks";
import { ErrorCard } from "../../cards";
import { Loading } from "../../loading";
import { IEditRingFormProps } from "./interface";
import { Button } from "antd";
import { typeRingEnum } from "../../../enums";
import * as Yup from 'yup';

const RingFormSchema = Yup.object().shape({
    name: Yup.string().required('Nome é obrigatório'),
    power: Yup.string().required('Poder é obrigatório'),
    ringBearer: Yup.string().required('Portador é obrigatório'),
    forger: Yup.string().required('Forjador é obrigatório'),
    type: Yup.string()
        .oneOf(['HUMAN', 'ELF', 'DWARF', 'SAURON'], 'Tipo inválido')
        .required('Tipo de anel é obrigatório'),
});

export function EditRingForm({ ringId, onClose }: IEditRingFormProps) {
    const { ring, isloadingRing, errorRing } = useGetRingById(ringId);
    const { updateRing, loading } = useUpdateRing();

    if (isloadingRing) {
        return <Loading />;
    }

    if (errorRing) {
        return <ErrorCard message={errorRing} />;
    }

    return (
        <Formik
            initialValues={{
                name: ring?.name || "",
                power: ring?.power || "",
                ringBearer: ring?.ringBearer || "",
                forger: ring?.forger || "",
                type: ring?.type || typeRingEnum[0],
                image: ring?.image || "https://i.imgur.com/Y5dTSXU.png",
            }}
            validationSchema={RingFormSchema}
            onSubmit={async (values) => {
                await updateRing(ringId, values);
                if (onClose) {
                    onClose();
                }

            }}
        >

            <Form className="max-w-[500px] flex flex-col gap-5 mt-6">
                <div className="flex flex-col gap-2 justify-normal">
                    <label htmlFor="name" className="font-inter text-sm font-medium leading-[18.48px] text-left text-black">Nome do Anel</label>
                    <Field
                        name="name"
                        type="text"
                        className="bg-zinc-800 h-12 pl-3 pr-3 rounded-lg text-white border border-solid border-gray-500"
                    />
                    <ErrorMessage name="name" component="div" className="text-red-400" />
                </div>

                <div className="flex flex-col gap-2 justify-normal">
                    <label htmlFor="power" className="font-inter text-sm font-medium leading-[18.48px] text-left text-black">Poder</label>
                    <Field name="power" type="text" className="bg-zinc-800 h-12 pl-3 pr-3 rounded-lg text-white border border-solid border-gray-500" />
                    <ErrorMessage name="power" component="div" className="text-red-400" />
                </div>

                <div className="flex flex-col gap-2 justify-normal">
                    <label htmlFor="ringBearer" className="font-inter text-sm font-medium leading-[18.48px] text-left text-black">Portador do Anel</label>
                    <Field name="ringBearer" type="text" className="bg-zinc-800 h-12 pl-3 pr-3 rounded-lg text-white border border-solid border-gray-500" />
                    <ErrorMessage name="ringBearer" component="div" className="text-red-400" />
                </div>

                <div className="flex flex-col gap-2 justify-normal">
                    <label htmlFor="forger" className="font-inter text-sm font-medium leading-[18.48px] text-left text-black">Forjador</label>
                    <Field name="forger" type="text" className="bg-zinc-800 h-12 pl-3 pr-3 rounded-lg text-white border border-solid border-gray-500" />
                    <ErrorMessage name="forger" component="div" className="text-red-400" />
                </div>

                <div className="flex flex-col gap-2 justify-normal">
                    <label htmlFor="type" className="font-inter text-sm font-medium leading-[18.48px] text-left text-black">Tipo de Anel</label>
                    <Field name="type" as="select" className="bg-zinc-800 h-12 pl-3 pr-3 rounded-lg text-white border border-solid border-gray-500">
                        <option value="HUMAN">Humano</option>
                        <option value="ELF">Elfo</option>
                        <option value="DWARF">Anão</option>
                        <option value="SAURON">Sauron</option>
                    </Field>
                    <ErrorMessage name="type" component="div" className="text-red-400" />
                </div>

                <div className="flex flex-row align-middle justify-end gap-4">
                    <Button type="text" onClick={onClose}>Cancelar</Button>
                    <Button loading={loading} htmlType="submit" className="bg-yellow-200 text-black hover:text-white">
                        Atualizar Anel
                    </Button>
                </div>

            </Form>
        </Formik>
    );
}