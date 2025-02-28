
import { Outlet, useLocation } from 'react-router-dom';
import { Modal, Sidebar, ThemeButton } from '../components';

export default function RootLayout() {
    const location = useLocation();
    return (
        <div id="main">
            <ThemeButton />
            {/* for large screen only show Sidebar */}
            <div className="lg:grid lg:grid-cols-6">
                <div className="col-span-1">
                    <Sidebar />
                </div>
                <main className="col-span-5 p-3 pt-14 md:pt-3">
                    <Outlet key={location.pathname} />
                </main>
            </div>
            <Modal />
        </div>
    );
}
