import React from 'react';

export default const Loading = uniqueId => {
    return <img id={`loading ${uniqueId}`} className="loading" src="/src/images/Eclipse.svg" alt="" />;
};
