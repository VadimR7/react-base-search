import React from 'react';
import { useAppContext } from "../../state/store";
import { FixedSizeList as List } from 'react-window'
import AutoSizer from "react-virtualized-auto-sizer";


interface RowProps {
    data: string[];
    index: number;
    style: any;
}

const Row = ({ index, style }: RowProps) => {
    const { data } = useAppContext();
    return (
        <div style={ style }>
            { data[index] }
        </div>
    )
};

const VirtualizedList = () => {
    const { data } = useAppContext();
    const listLength = data.length;
    const itemSize = 45;
    return (
        <div style={ { maxWidth: '70%', margin: '0 auto', height: 'calc(100% - 120px)' } }>
            <AutoSizer>
                { ({ height, width }) => (
                    <List
                        height={ height }
                        itemCount={ listLength }
                        itemSize={ itemSize }
                        width={ width }
                    >
                        { Row }
                    </List>
                ) }
            </AutoSizer>
        </div>
    );
};

export default VirtualizedList;