
import React from 'react';
import { Link } from '@inertiajs/react';

const Pagination = ({ links }) => {
    return (
        <div className="mt-4">
            {links.map(link => (
                <Link
                preserveScroll
                className={`inline-block py-2 px-3 rounded-lg text-xs text-gray-300  ${link.active ? 'bg-gray-200 text-red-900' : ''} ${!link.url ? 'text-gray-600 cursor-not-allowed' : 'hover:bg-gray-200 hover:text-red-900'}`}
                dangerouslySetInnerHTML={{ __html: link.label }}
                key={link.url}
                href={link.url}></Link>
            ))}
        </div>
    );
};

export default Pagination;
