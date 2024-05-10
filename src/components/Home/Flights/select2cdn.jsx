import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import * as apiService from "../../../services";
import $ from 'jquery';

const MySelectComponent = () => {

    const [selectedOption, setSelectedOption] = useState(null);
    const [oneWaySearchData, setOneWaySearchData] = useState([]);

    const fetchDataOneWaySearch = async () => {
        const data = await apiService.OneWaySearch({});
        setOneWaySearchData(data); // Assuming data is an array of objects
    };

    useEffect(() => {
        fetchDataOneWaySearch();
    }, []);

    useEffect(() => {
        $(document).ready(function () {
            // Event handler when .srchCol is clicked
            $(".srchCol").click(function () {
                $(this).find(".select2").css({
                    opacity: 1,
                    top: "50px" // Set top position to 50px
                }); // Set opacity to 1 for .select2 within clicked .srchCol
            });

            // Event handler when document is clicked
            $(document).click(function (event) {
                // Check if the clicked element is not within .srchCol
                if (!$(event.target).closest('.srchCol').length) {
                    $(".select2").css("opacity", 0); // Set opacity to 0 for all .select2 elements
                }
            });
        });
    }, []);

    const handleChange = (selectedOption) => {
        setSelectedOption(selectedOption);
        console.log(selectedOption.label);
        console.log(selectedOption.value);

       localStorage.setItem('selectedOptionlabel', selectedOption.label);
       localStorage.setItem('selectedOptionvalue', selectedOption.value);


        
    };

    const formatState = (state) => {
        return (
            <span>
                <svg style={{ width: '16px', height: '16px', marginRight: '8px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                    <path d="M381 114.9L186.1 41.8c-16.7-6.2-35.2-5.3-51.1 2.7L89.1 67.4C78 73 77.2 88.5 87.6 95.2l146.9 94.5L136 240 77.8 214.1c-8.7-3.9-18.8-3.7-27.3 .6L18.3 230.8c-9.3 4.7-11.8 16.8-5 24.7l73.1 85.3c6.1 7.1 15 11.2 24.3 11.2H248.4c5 0 9.9-1.2 14.3-3.4L535.6 212.2c46.5-23.3 82.5-63.3 100.8-112C645.9 75 627.2 48 600.2 48H542.8c-20.2 0-40.2 4.8-58.2 14L381 114.9zM0 480c0 17.7 14.3 32 32 32H608c17.7 0 32-14.3 32-32s-14.3-32-32-32H32c-17.7 0-32 14.3-32 32z"></path>
                </svg>
                {state.label}
            </span>
        );
    };

    return (
        <div className='select2'>
            <Select
                value={selectedOption}
                onChange={handleChange}
                options={oneWaySearchData.map(item => ({ value: item.code, label: item.name }))}
                formatOptionLabel={formatState}
            />
        </div>
    );
};

export default MySelectComponent;
