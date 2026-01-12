import { useForm } from '@inertiajs/react';
import { Link } from '@inertiajs/react';

interface Props {
    status?: string;
}

export default function VerifyEmail({ status }: Props) {
    const { post, processing } = useForm({});

    const handleResend = () => {
        post('/email/verification-notification');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Egiaztatu zure posta elektronikoa</h2>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-md p-4">
                    <p className="text-sm text-gray-700 mb-4">Eskerrik asko erregistratzeagatik. Jarraitu aurretik, egiaztatu zure helbidea bidali dizugun estekan klik eginez. Ez baduzu mezua jaso, pozik bidaliko dizugu beste bat.</p>

                    {status === 'verification-link-sent' && (
                        <div className="mb-4 font-medium text-sm text-green-600">Egiaztapen-esteka berri bat bidali da zure posta elektronikora.</div>
                    )}
                </div>

                <div className="flex items-center justify-between">
                    <button onClick={handleResend} disabled={processing} className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50">
                        {processing ? 'Bidaltzen...' : 'Bidal ezazu berriro egiaztapen-mezua'}
                    </button>
                </div>

                <div className="text-center">
                    <p className="text-sm text-gray-600">Laguntza behar duzu?{' '}
                        <Link href="/" className="font-medium text-blue-600 hover:text-blue-500">Itzuli hasierara</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}