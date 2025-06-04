import Default from 'components/templates/Default';
import Home from 'components/templates/Home';
import { useState, useEffect } from 'react';
import { NextPage } from 'next';

const HomePage: NextPage = () => {
    const [appUrl, setAppUrl] = useState<string | null>(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setAppUrl("https://app." + window.location.host);
        }
    }, []);
    
    return (
        <Default appUrl={appUrl || "about:blank"} pageName="Ouroboros | Home">
            <Home appUrl={appUrl || "about:blank"}/>
        </Default>
    );
};

export default HomePage;