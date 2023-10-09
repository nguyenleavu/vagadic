import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
interface Props {
    title: string;
    children: React.ReactNode;
}

function DashboardLayout({ title, children }: Props) {
    useEffect(() => {
        document.title = title;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
}

export default DashboardLayout;
