import React from 'react';

interface ListItemProps {
    item: string;
}

const ListItem = ({ item }: ListItemProps) => {
    return (
        <li>
            <p>{ item }</p>
        </li>
    );
};

export default ListItem;