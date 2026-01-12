import { FormEvent } from 'react';
import { useForm } from '@inertiajs/react';
import { Link } from '@inertiajs/react';

interface Props {
    status?: string;
}

export default function Login({ status }: Props) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        post('/login');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Hasi saioa zure kontuan</h2>
                </div>

                {status && (
                    <div className="bg-green-50 border border-green-200 rounded-md p-4">
                        <p className="text-sm text-green-700">{status}</p>
                    </div>
                )}

                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="email" className="sr-only">Posta elektronikoa</label>
                            <input id="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm" placeholder="Posta elektronikoa" value={data.email} onChange={(e) => setData('email', e.target.value)}/>
                            {errors.email && (
                                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                            )}
                        </div>

                        <div>
                            <label htmlFor="password" className="sr-only">Pasahitza</label>
                            <input id="password" type="password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm" placeholder="Pasahitza" value={data.password} onChange={(e) => setData('password', e.target.value)}/>
                            {errors.password && (
                                <p className="mt-1 text-sm text-red-600">{errors.password}</p>
                            )}
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input id="remember" type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" checked={data.remember} onChange={(e) => setData('remember', e.target.checked)}/>
                            <label htmlFor="remember" className="ml-2 block text-sm text-gray-900">Gogora nazazu</label>
                        </div>

                        <div className="text-sm">
                            <Link href="/forgot-password" className="font-medium text-blue-600 hover:text-blue-500">Pasahitza ahaztu duzu?</Link>
                        </div>
                    </div>

                    <div>
                        <button type="submit" disabled={processing} className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50">
                            {processing ? 'Saioa hasten...' : 'Saioa hasi'}
                        </button>
                    </div>

                    <div className="text-center">
                        <p className="text-sm text-gray-600">Ez duzu konturik?{' '}
                            <Link href="/register" className="font-medium text-blue-600 hover:text-blue-500">Erregistratu hemen</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}