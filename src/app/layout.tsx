    import React from 'react';

    const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en">
        <head>
            <title>Task</title>
            {/* <link rel="icon" href="/favicon.ico" /> */}
        </head>
        <body>
            <main>{children}</main>
        </body>
        </html>
    );
    };

    export default RootLayout;
