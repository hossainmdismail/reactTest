import { useEffect } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import PrimaryButton from '@/Components/PrimaryButton';
import Spinner from '@/Components/Spinner';
import InputError from '@/Components/InputError';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Create({ auth }) {

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        number: null,
        email: '',
        address: '',
    });

    const submit = (e) => {
        e.preventDefault();

        // Convert number to integer before posting
        const formData = {
            ...data,
            number: parseInt(data.number, 10),
        };

        post(route('contact.store'),{
            data:formData
        });
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Contact Create</h2>}
        >
            <Head title="Contact Create" />
            <section className='max-w-2xl px-6 py-10 mx-auto'>
                    <form onSubmit={submit}>
                        <div>
                        <InputLabel htmlFor="name" value="Name" />
                            <TextInput
                                id="name"
                                type="text"
                                name="name"
                                value={data.name}
                                className="mt-1 block w-full"
                                autoComplete="username"
                                isFocused={true}
                                placeholder='John'
                                onChange={(e) => setData('name', e.target.value)}
                            />
                            <InputError message={errors.name} className="mt-2" />
                        </div>

                        <div className='mt-4'>
                            <InputLabel htmlFor="number" value="Number" />
                            <TextInput
                                id="number"
                                type="number"
                                name="number"
                                value={data.number}
                                className="mt-1 block w-full"
                                autoComplete="username"
                                isFocused={true}
                                placeholder='+880'
                                onChange={(e) => setData('number', e.target.value)}
                            />
                            <InputError message={errors.number} className="mt-2" />
                        </div>

                        <div className='mt-4'>
                            <InputLabel htmlFor="email" value="Email" />
                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="mt-1 block w-full"
                                autoComplete="username"
                                isFocused={true}
                                placeholder='example@gmail.com'
                                onChange={(e) => setData('email', e.target.value)}
                            />
                            <InputError message={errors.email} className="mt-2" />
                        </div>

                        <div className='mt-4'>
                            <InputLabel htmlFor="address" value="Address" />
                            <TextInput
                                id="address"
                                type="text"
                                name="address"
                                value={data.address}
                                className="mt-1 block w-full"
                                autoComplete="username"
                                isFocused={true}
                                placeholder='Street / City / Country'
                                onChange={(e) => setData('address', e.target.value)}
                            />
                            <InputError message={errors.address} className="mt-2" />
                        </div>

                        <div className='mt-4 text-right'>
                            <PrimaryButton>
                                {processing?<Spinner className='w-4 h-4 mr-2'/>:''}
                                Create Contact
                            </PrimaryButton>
                        </div>

                    </form>
            </section>
        </AuthenticatedLayout>
    );
}
