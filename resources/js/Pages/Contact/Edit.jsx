import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import PrimaryButton from '@/Components/PrimaryButton';
import Spinner from '@/Components/Spinner';
import InputError from '@/Components/InputError';
import { Head, Link, useForm } from '@inertiajs/react';
import LinkButton from '@/Components/LinkButton';

export default function Contact({ auth, contact }) {

    const { data, setData, put, processing, errors, reset } = useForm({
        name: contact.name,
        number: contact.number,
        email: contact.email,
        address: contact.address,
    });

    const submit = (e) => {
        e.preventDefault();

        // Convert number to integer before posting
        const formData = {
            ...data,
            number: parseInt(data.number, 10),
        };

        put(route('contact.update',{contact:contact.id}),{
            data:formData
        });
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Contact Edit</h2>}
        >
            <Head title="Contact" />
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
                            <LinkButton className='mr-2' href={route('contact.index')}>Back</LinkButton>
                            <PrimaryButton>
                                {processing?<Spinner className='w-4 h-4 mr-2'/>:''}
                                Update Contact
                            </PrimaryButton>
                        </div>

                    </form>
            </section>
        </AuthenticatedLayout>
    );
}
