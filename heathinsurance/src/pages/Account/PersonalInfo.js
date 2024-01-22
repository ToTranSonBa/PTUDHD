import React, { useState, useEffect } from 'react';
//
import classNames from 'classnames/bind';
import styles from './Account.module.scss';
const cx = classNames.bind(styles);

//

const PersonalInfomation = () => {
    const [isEditing, setIsEditing] = useState(true);
    const [userData, setUserData] = useState({});

    const handleEditClick = () => {
        setIsEditing(false);
    };

    const handleSaveClick = () => {
        // Perform save action (e.g., update data on the server)
        // For simplicity, we'll just toggle back to view mode
        setIsEditing(true);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <>
            {isEditing ? (
                <div style={{ width: '50%' }} class="card mb-3 mx-auto">
                    <div class="card-body text-center">
                        <div class="row mx-auto">
                            <div class="p-3 text-start col-sm-3">
                                <h3 class="mb-0">Full Name:</h3>
                            </div>
                            <div class="p-3 border text-start col-sm-8 text-secondary">Kenneth Valdez</div>
                        </div>

                        <div class="row mx-auto">
                            <div class="p-3 col-sm-3  text-start">
                                <h3 class="mb-0">Birthday:</h3>
                            </div>
                            <div class="col-sm-8 p-3 border text-start text-secondary">01 - 01 - 0001</div>
                        </div>
                        <div class="row mx-auto">
                            <div class="p-3 col-sm-3 text-start">
                                <h3 class="mb-0">Identity Card Number:</h3>
                            </div>
                            <div class="col-sm-8 p-3 border text-start text-secondary">1234567890</div>
                        </div>
                        <div class="row mx-auto">
                            <div class="col-sm-3 text-start p-3">
                                <h3 class="mb-0">Email:</h3>
                            </div>
                            <div class="col-sm-8 p-3 border text-start text-secondary">fip@jukmuh.al</div>
                        </div>
                        <div class="row mx-auto">
                            <div class="col-sm-3 text-start p-3">
                                <h3 class="mb-0">Phone:</h3>
                            </div>
                            <div class="col-sm-8 p-3 border text-start text-secondary">(239) 816-9029</div>
                        </div>

                        <div class="row mx-auto">
                            <div class="col-sm-3 text-start p-3">
                                <h3 class="mb-0">Mobile:</h3>
                            </div>
                            <div class="col-sm-8 p-3 border text-start text-secondary">(320) 380-4539</div>
                        </div>
                        <div class="row mx-auto">
                            <div class="col-sm-3 text-start p-3">
                                <h3 class="mb-0">Address:</h3>
                            </div>
                            <div class="col-sm-8 p-3 border text-start text-secondary">Bay Area, San Francisco, CA</div>
                        </div>

                        <div class="row p-3">
                            <div class="col-sm-12">
                                <a
                                    style={{ textTransform: 'uppercase' }}
                                    className="fs-5 btn btn-info "
                                    onClick={handleEditClick}
                                >
                                    Chỉnh sửa
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div style={{ width: '50%' }} class="card mb-3 mx-auto">
                    <div class="card-body">
                        <div class="row mt-4 mb-4">
                            <div class="col-sm-2 p-3">
                                <h3 class="mb-0">Họ và tên:</h3>
                            </div>
                            <div class="col-sm-9">
                                <div class=" input-group mb-3">
                                    <input
                                        type="text"
                                        name="Name"
                                        class="p-3 fs-4 form-control"
                                        placeholder="Ví dụ:  Nguyen Văn A"
                                        aria-label="Sizing example input"
                                        aria-describedby="inputGroup-sizing-default"
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="row mt-4 mb-4">
                            <div class="col-sm-2 p-3">
                                <h3 class="mb-0">Ngày sinh:</h3>
                            </div>
                            <div class="col-sm-9">
                                <div class=" input-group mb-3">
                                    <input
                                        type="date"
                                        name="Birthday"
                                        class="p-3 fs-4 form-control"
                                        aria-label="Sizing example input"
                                        aria-describedby="inputGroup-sizing-default"
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="row mt-4 mb-4">
                            <div class="col-sm-2 p-3">
                                <h3 class="mb-0">CCCD:</h3>
                            </div>
                            <div class="col-sm-9">
                                <div class=" input-group mb-3">
                                    <input
                                        type="text"
                                        name="ID"
                                        class="p-3 fs-4 form-control"
                                        placeholder="Ví dụ:  987654234"
                                        aria-label="Sizing example input"
                                        aria-describedby="inputGroup-sizing-default"
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="row mt-4 mb-4">
                            <div class="col-sm-2 p-3">
                                <h3 class="mb-0">Email:</h3>
                            </div>
                            <div class="col-sm-9">
                                <div class=" input-group mb-3">
                                    <input
                                        type="email"
                                        name="email"
                                        class="p-3 fs-4 form-control"
                                        placeholder="Ví dụ:  nguyena@gmail.com"
                                        aria-label="Sizing example input"
                                        aria-describedby="inputGroup-sizing-default"
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="row mt-4 mb-4">
                            <div class="col-sm-2 p-3">
                                <h3 class="mb-0">Số điện thoại:</h3>
                            </div>
                            <div class="col-sm-9">
                                <div class=" input-group mb-3">
                                    <input
                                        type="tel"
                                        name="phone"
                                        class="p-3 fs-4 form-control"
                                        placeholder="Ví dụ: 0183338287"
                                        aria-label="Sizing example input"
                                        aria-describedby="inputGroup-sizing-default"
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="row mt-4 mb-4">
                            <div class="col-sm-2 p-3">
                                <h3 class="mb-0">Địa chỉ:</h3>
                            </div>
                            <div class="col-sm-9">
                                <div class=" input-group mb-3">
                                    <input
                                        type="text"
                                        name="address"
                                        class="p-3 fs-4 form-control"
                                        placeholder="Ví dụ: 123 Đinh Tiên Hoàng, Quận 3, TP Hồ Chí Minh"
                                        aria-label="Sizing example input"
                                        aria-describedby="inputGroup-sizing-default"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* <label>Bio:</label>
                                            <textarea
                                                name="bio"
                                                value={userData.bio}
                                                onChange={handleInputChange}
                                            /> */}
                        <div class="row text-center">
                            <div class="col-sm-12">
                                <a
                                    style={{ textTransform: 'uppercase' }}
                                    className="fs-4 btn btn-info "
                                    onClick={handleSaveClick}
                                >
                                    Lưu
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default PersonalInfomation;
