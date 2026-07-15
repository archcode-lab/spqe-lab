import React from 'react';
import htm from 'htm';

export const html = htm.bind(React.createElement);

export function classNames(...values) {
    return values
        .flatMap((value) => Array.isArray(value) ? value : [value])
        .filter(Boolean)
        .join(' ');
}
