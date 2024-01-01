import * as React from 'react';
import { useEffect, useState } from 'react';
import { MultiSelectComponent, CheckBoxSelection, Inject } from '@syncfusion/ej2-react-dropdowns';
import { PropertyPane } from '../common/property-pane';
import { CheckBoxComponent } from '@syncfusion/ej2-react-buttons';
import './checkbox.css';
const CheckBox = () => {
    //define the data with category
    const countries = [
        { Name: 'Australia', Code: 'AU' },
        { Name: 'Bermuda', Code: 'BM' },
        { Name: 'Canada', Code: 'CA' },
        { Name: 'Cameroon', Code: 'CM' },
        { Name: 'Denmark', Code: 'DK' },
        { Name: 'France', Code: 'FR' },
        { Name: 'Finland', Code: 'FI' },
        { Name: 'Germany', Code: 'DE' },
        { Name: 'Greenland', Code: 'GL' },
        { Name: 'Hong Kong', Code: 'HK' },
        { Name: 'India', Code: 'IN' },
        { Name: 'Italy', Code: 'IT' },
        { Name: 'Japan', Code: 'JP' },
        { Name: 'Mexico', Code: 'MX' },
        { Name: 'Norway', Code: 'NO' },
        { Name: 'Poland', Code: 'PL' },
        { Name: 'Switzerland', Code: 'CH' },
        { Name: 'United Kingdom', Code: 'GB' },
        { Name: 'United States', Code: 'US' },
    ];
    // maps the appropriate column to fields property
    const checkFields = { text: 'Name', value: 'Code' };
    // enable or disable the SelectAll in multiselect on CheckBox checked state
    const [showSelectAll, setShowSelectAll] = useState(true);
    // enable or disable the Dropdown button in multiselect on CheckBox checked state
    const [showDropDownIcon, setShowDropDownIcon] = useState(true);
    // enable or disable the selection limit in multiselect on CheckBox checked state
    const [enableSelectionOrder, setEnableSelectionOrdern] = useState(true);
    // function to handle the CheckBox change event
    const onChange = (args) => {
        // enable or disable the SelectAll in multiselect on CheckBox checked state
        setShowSelectAll(args.checked);
    };
    // function to handle the CheckBox change event
    const onChangeDrop = (args) => {
        // enable or disable the Dropdown button in multiselect on CheckBox checked state
        setShowDropDownIcon(args.checked);
    };
    // function to handle the CheckBox change event
    const onChangeLimit = (args) => {
        // enable or disable the selection limit in multiselect on CheckBox checked state
        setEnableSelectionOrdern(args.checked);
    };
    return (
        <div id="multichecbox" className="control-pane">
            <div className="control-section col-lg-8">
                <div id="multigroup" className="control-styles">
                    <h4>CheckBox</h4>
                    <MultiSelectComponent
                        id="checkbox"
                        dataSource={countries}
                        fields={checkFields}
                        placeholder="Select countries"
                        value={null}
                        mode="CheckBox"
                        showSelectAll={showSelectAll}
                        showDropDownIcon={showDropDownIcon}
                        enableSelectionOrder={enableSelectionOrder}
                        filterBarPlaceholder="Search countries"
                        popupHeight="350px"
                    >
                        <Inject services={[CheckBoxSelection]} />
                    </MultiSelectComponent>
                </div>
            </div>
            <div className="col-lg-4 property-section">
                <PropertyPane title="Properties">
                    <table id="property" title="Properties" className="property-panel-table" style={{ width: '100%' }}>
                        <tr>
                            <td>
                                <div>
                                    <CheckBoxComponent
                                        checked={showSelectAll}
                                        label="Show Select All"
                                        change={onChange.bind(this)}
                                    />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div>
                                    <CheckBoxComponent
                                        checked={showDropDownIcon}
                                        label="DropDown Button"
                                        change={onChangeDrop.bind(this)}
                                    />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div>
                                    <CheckBoxComponent
                                        checked={enableSelectionOrder}
                                        label="Selection Reorder"
                                        change={onChangeLimit.bind(this)}
                                    />
                                </div>
                            </td>
                        </tr>
                    </table>
                </PropertyPane>
            </div>
        </div>
    );
};
export default CheckBox;
