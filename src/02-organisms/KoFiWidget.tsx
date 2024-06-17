import React, { useEffect } from 'react';

// Definiere das erweiterte window-Objekt
declare global {
    interface Window {
        kofiwidget2: {
            init: (title: string, color: string, id: string) => void;
            draw: () => void;
        };
    }
}

const KoFiWidget: React.FC = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://storage.ko-fi.com/cdn/widget/Widget_2.js';
        script.async = true;
        script.onload = () => {
            if (window.kofiwidget2) {
                window.kofiwidget2.init('Support Me on Ko-fi', '#29abe0', 'P5P1ZFUIY');
                window.kofiwidget2.draw();
            }
        };

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div></div>
    );
};

export default KoFiWidget;
