import { useState } from "react";
import { Button } from "../../ui/button";

export function RingForm() {
    const [formData, setFormData] = useState({
        name: '',
        power: '',
        ringBearer: '',
        forger: '',
        image: null as File | null
    });

    const [errors, setErrors] = useState({
        name: '',
        power: '',
        ringBearer: '',
        forger: '',
        image: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        setErrors({
            ...errors,
            [name]: value ? '' : 'Este campo é obrigatório'
        });
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        setFormData({
            ...formData,
            image: file
        });
        setErrors({
            ...errors,
            image: file ? '' : 'Este campo é obrigatório'
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newErrors = {
            name: formData.name ? '' : 'Este campo é obrigatório',
            power: formData.power ? '' : 'Este campo é obrigatório',
            ringBearer: formData.ringBearer ? '' : 'Este campo é obrigatório',
            forger: formData.forger ? '' : 'Este campo é obrigatório',
            image: formData.image ? '' : 'Este campo é obrigatório'
        };
        setErrors(newErrors);

        const hasErrors = Object.values(newErrors).some(error => error !== '');
        if (hasErrors) {
            return;
        }

        const data = new FormData();
        data.append('name', formData.name);
        data.append('power', formData.power);
        data.append('ringBearer', formData.ringBearer);
        data.append('forger', formData.forger);
        if (formData.image) {
            data.append('image', formData.image);
        }

        // Aqui você pode enviar os dados do formulário para o servidor
        fetch('/api/rings', {
            method: 'POST',
            body: data
        })
            .then(response => response.json())
            .then(result => {
                console.log('Success:', result);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-[500px] flex flex-col gap-5">
            <div className="flex flex-col gap-2 justify-normal">
                <label htmlFor="image" className="font-inter text-sm font-medium leading-[18.48px] text-left text-white">Imagem:</label>
                <input
                    type="file"
                    id="image"
                    name="image"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="w-full h-32 bg-slate-200 rounded-lg"
                />
                {errors.image && <span className="text-red-400">{errors.image}</span>}
            </div>

            <div className="flex flex-col gap-2 justify-normal">
                <label htmlFor="name" className="font-inter text-sm font-medium leading-[18.48px] text-left text-white">Nome:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-zinc-800 h-12 pl-3 pr-3 rounded-lg text-white border border-solid border-gray-500"
                />
                {errors.name && <span className="text-red-400">{errors.name}</span>}
            </div>

            <div className="flex flex-col gap-2 justify-normal">
                <label htmlFor="power" className="font-inter text-sm font-medium leading-[18.48px] text-left text-white ">Poder:</label>
                <input
                    type="text"
                    id="power"
                    name="power"
                    value={formData.power}
                    onChange={handleChange}
                    className="bg-zinc-800 h-12 pl-3 pr-3 rounded-lg text-white border border-solid border-gray-500"
                />
                {errors.power && <span className="text-red-400">{errors.power}</span>}
            </div>

            <div className="flex flex-col gap-2 justify-normal">
                <label htmlFor="ringBearer" className="font-inter text-sm font-medium leading-[18.48px] text-left text-white">Portador:</label>
                <input
                    type="text"
                    id="ringBearer"
                    name="ringBearer"
                    value={formData.ringBearer}
                    onChange={handleChange}
                    className="bg-zinc-800 h-12 pl-3 pr-3 rounded-lg text-white border border-solid border-gray-500"
                />
                {errors.ringBearer && <span className="text-red-400">{errors.ringBearer}</span>}
            </div>

            <div className="flex flex-col gap-2 justify-normal">
                <label htmlFor="forger" className="font-inter text-sm font-medium leading-[18.48px] text-left text-white">Forjado por:</label>
                <input
                    type="text"
                    id="forger"
                    name="forger"
                    value={formData.forger}
                    onChange={handleChange}
                    className="bg-zinc-800 h-12 pl-3 pr-3 rounded-lg text-white border border-solid border-gray-500"
                />
                {errors.forger && <span className="text-red-400">{errors.forger}</span>}
            </div>

            <Button type="submit" className="bg-yellow-200 text-black hover:text-white">Criar anel</Button>
        </form>
    );
}