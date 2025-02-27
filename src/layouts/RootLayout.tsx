
import { Outlet, useLocation } from 'react-router-dom';
import { Modal, Sidebar, ThemeButton } from '../components';

export default function RootLayout() {
    const location = useLocation();
    return (
        <>
            <ThemeButton />
            <div className="grid lg:grid-cols-6">
                <div className="col-span-1">
                    <Sidebar />
                </div>
                <main className="col-span-5 p-3">
                    <Outlet key={location.pathname} />
                </main>
            </div>
            <Modal />
        </>
    );
}
