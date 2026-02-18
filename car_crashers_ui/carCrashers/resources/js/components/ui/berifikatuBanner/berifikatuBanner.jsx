import { usePage } from "@inertiajs/react";


function berifikatuBanner() {

    const { props } = usePage();
    const user = props.auth?.user;


    //Email censurado
    const emailCen = (email) => {

        const zatiak = email.split('@');
        const izena = zatiak[0];
        const domeinu = zatiak[1];
        
        
        const izenaCen = izena.length > 2 
            ? izena.slice(0, 2) + '*'.repeat(izena.length - 2)
            : izena;
        
        const domeinuCen = domeinu.length > 4
            ? domeinu.slice(0, 2) + '*' + domeinu.slice(-2)
            : domeinu;
            
        return `${izenaCen}@${domeinuCen}`;
    };

    const isVerified = user?.email_verified_at && 
                      user.email_verified_at !== null && 
                      user.email_verified_at !== '' &&
                      user.email_verified_at !== false;
    
    if (!user || isVerified) {
        return null;
    }

    return (
        <div className="px-5 py-3 bg-danger bg-opacity-10 border-start border-4 border-danger d-flex align-items-center gap-3">
            <i className="bi bi-exclamation-circle-fill text-danger fs-4"></i>
            
            <div className="flex-grow-1">
                <p className="mb-1 fw-bold text-dark">
                    Funtzio guztiak erabiltzeko emaila egiaztatu behar duzu!
                </p>
                <small className="text-muted">
                    Berifikatzeko emaila: <strong>{emailCen(user.email)}</strong>
                </small>
            </div>
        </div>
    );
}

export default berifikatuBanner;
