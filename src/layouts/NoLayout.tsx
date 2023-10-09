import { useEffect } from 'react';

interface Props {
    title: string;
    children: React.ReactNode;
}

function NoLayout({ title, children }: Props) {
    useEffect(() => {
        document.title = title;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            <main>{children}</main>
        </div>
    );
}

export default NoLayout;
