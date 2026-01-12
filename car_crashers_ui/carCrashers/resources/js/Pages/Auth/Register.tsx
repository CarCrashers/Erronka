import { FormEvent } from 'react';
import { useForm } from '@inertiajs/react';
import { Link } from '@inertiajs/react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        post('/register', {
            onSuccess: () => {
                reset();
            },
        });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sortu kontu berria</h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="name" className="sr-only">Izena</label>
                            <input id="name" type="text" autoComplete="name" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm" placeholder="Izen osoa" value={data.name} onChange={(e) => setData('name', e.target.value)}/>
                            {errors.name && (
                                <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                            )}
                        </div>

                        <div>
                            <label htmlFor="email" className="sr-only">Posta elektronikoa</label>
                            <input id="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm" placeholder="Posta elektronikoa" value={data.email} onChange={(e) => setData('email', e.target.value)}/>
                            {errors.email && (
                                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                            )}
                        </div>

                        <div>
                            <label htmlFor="password" className="sr-only">Pasahitza</label>
                            <input id="password" type="password" autoComplete="new-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm" placeholder="Pasahitza" value={data.password} onChange={(e) => setData('password', e.target.value)}/>
                            {errors.password && (
                                <p className="mt-1 text-sm text-red-600">{errors.password}</p>
                            )}
                        </div>

                        <div>
                            <label htmlFor="password_confirmation" className="sr-only">Berretsi pasahitza</label>
                            <input id="password_confirmation" type="password" autoComplete="new-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm" placeholder="Berretsi pasahitza" value={data.password_confirmation} onChange={(e) => setData('password_confirmation', e.target.value)}
                            />
                            {errors.password_confirmation && (
                                <p className="mt-1 text-sm text-red-600">
                                    {errors.password_confirmation}
                                </p>
                            )}
                        </div>
                    </div>

                    <div className="text-sm">
                        <p className="text-gray-700">Pasahitzaren baldintzak:</p>
                        <ul className="list-disc list-inside text-gray-600 text-xs mt-2">
                            <li>Gutxienez 8 karaktere</li>
                            <li>Maiuskulak eta minuskulak</li>
                            <li>Zenbakiak</li>
                            <li>Ikurrak</li>
                        </ul>
                    </div>

                    <div>
                        <button type="submit" disabled={processing} className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50">
                            {processing ? 'Erregistratzen...' : 'Erregistratu'}
                        </button>
                    </div>

                    <div className="text-center">
                        <p className="text-sm text-gray-600">Dagoeneko baduzu kontua?{' '}
                            <Link href="/login" className="font-medium text-blue-600 hover:text-blue-500">Hasi saioa hemen</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}