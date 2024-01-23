import React from 'react';

import './ListTag.scss';

const ListTag = () => {
    return (
        <div className="listtag">
            <div className="tag">
                <span>100</span>
                <label>Hợp đồng</label>
            </div>
            <div className="tag">
                <span>100</span>
                <label>Khách hàng</label>
            </div>
            <div className="tag">
                <span>100</span>
                <label>Yêu cầu</label>
            </div>
            <div className="tag">
                <span>100</span>
                <label>Số hợp đồng</label>
            </div>
        </div>
    );
};

export default ListTag;
