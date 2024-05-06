import React, { useEffect } from 'react';
import $ from 'jquery';

const Flights = () => {

    
    useEffect(() => {
        // jQuery code to handle the click event
        $('#selectflightpax').click(function() {
            $('.travelersFlight').toggle();
          });
      
          $(".additional_flight_search_link").click(function(){
            $('#div_additional_flight_search').toggle();
          });
        }, []);
  return (
    <section className="Flight-sec">
      <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="SearchForm">
                        <div className="flightSearch mt-1">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="radBtn">

                                        <span className="me-4">              
                                        <input type="radio" id="onewayflight" name="flight-radio-group"/>
                                        <label for="onewayflight">One Way</label>
                                        </span>

                                        <span className="me-4">     
                                                <input type="radio" id="returnflight" name="flight-radio-group" checked=""/>
                                                <label for="returnflight">Return</label>

                                        </span>

                                        <span>     
                                                <input type="radio" id="multistopflight" name="flight-radio-group"/>
                                                <label for="multistopflight">Multi Stop</label>
                                        </span>
                                    </div>
                                </div>

                                <div className="col-lg-6 text-end">
                                    <div className="toogleStyledRadio"> 
                                        <div className="switch-field">
                                            <input type="radio" id="radio-self-toogle" name="self-client-toogle" value="SELF" checked=""/>
                                            <label for="radio-self-toogle">SELF</label>
                                            <input type="radio" id="radio-client-toogle" name="self-client-toogle" value="CLIENT"/>
                                            <label for="radio-client-toogle">CLIENT</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row" style={{display:'none'}}>
                                <div class="row">
                                    <div class="col-lg-2 ">
                                        <select class="form-select" name="flgclient" id="flgclient">
                                            <option selected="">Client</option>
                                            <option value="Client1">Client1</option>
                                            <option value="Client2">Client2</option>
                                            <option value="Client3">Client3</option>
                                        </select>
                                    </div>

                                    <div class="col-lg-2">
                                    <select class="form-select" name="flglocation" id="flglocation">
                                        <option selected="">Location</option>
                                        <option value="Delhi">Delhi</option>
                                        <option value="Mumbai">Mumbai</option>
                                        <option value="Dubai">Dubai</option>
                                    </select>
                                    </div>

                                    <div class="col-lg-2">
                                    <select class="form-select" name="flguser" id="flguser">
                                        <option selected="">User</option>
                                        <option value="User1">User1</option>
                                        <option value="User2">User2</option>
                                        <option value="User3">User3</option>
                                    </select>
                                    </div>
                                </div>
                            </div>

                            <div className="row justify-content-between">
                                <div id="section_oneway_return" className="row align-items-center">
                                <div className="col-lg-5" id="div_onway_return_des">
  <div className="row">
    <div className="col-lg-6" style={{ position: "relative" }}>
      <a className="switch_destination" href="javascript:void(0);"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 224c0 17.7 14.3 32 32 32s32-14.3 32-32c0-53 43-96 96-96H320v32c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l64-64c12.5-12.5 12.5-32.8 0-45.3l-64-64c-9.2-9.2-22.9-11.9-34.9-6.9S320 19.1 320 32V64H160C71.6 64 0 135.6 0 224zm512 64c0-17.7-14.3-32-32-32s-32 14.3-32 32c0 53-43 96-96 96H192V352c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9l-64 64c-12.5 12.5-12.5 32.8 0 45.3l64 64c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V448H352c88.4 0 160-71.6 160-160z"/></svg></a>
      <div className="row">
        <div className="col-12">
          <table className="flightheadertbl">
            <thead>
              <tr>
                <td>Flying from:</td>
                <td className="text-end smlChkbox">
                  <input type="checkbox" value="" id="flyingfrom" />
                  <label htmlFor="flyingfrom">Nearby Airports</label>
                </td>
              </tr>
            </thead>
            <tbody>
            </tbody>
          </table>
        </div>
      </div>
      <div className="srchCon">
        <div className="srchRow">
          <div className="srchCol">
            <div><span className="srchTitle"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M381 114.9L186.1 41.8c-16.7-6.2-35.2-5.3-51.1 2.7L89.1 67.4C78 73 77.2 88.5 87.6 95.2l146.9 94.5L136 240 77.8 214.1c-8.7-3.9-18.8-3.7-27.3 .6L18.3 230.8c-9.3 4.7-11.8 16.8-5 24.7l73.1 85.3c6.1 7.1 15 11.2 24.3 11.2H248.4c5 0 9.9-1.2 14.3-3.4L535.6 212.2c46.5-23.3 82.5-63.3 100.8-112C645.9 75 627.2 48 600.2 48H542.8c-20.2 0-40.2 4.8-58.2 14L381 114.9zM0 480c0 17.7 14.3 32 32 32H608c17.7 0 32-14.3 32-32s-14.3-32-32-32H32c-17.7 0-32 14.3-32 32z"/></svg> Kuala Lumpur</span></div>
            <div><span className="srchsml textTrim">DXB, Dubai International</span></div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-lg-6">
      <div className="row">
        <div className="col-12">
          <table className="flightheadertbl">
            <thead>
              <tr>
                <td>Flying to:</td>
                <td className="text-end">
                  <input type="checkbox" value="" id="flyingto" />
                  <label htmlFor="flyingto">Nearby Airports</label>
                </td>
              </tr>
            </thead>
            <tbody>
            </tbody>
          </table>
        </div>
      </div>
      <div className="srchCon">
        <div className="srchRow">
          <div className="srchCol">
            <div><span className="srchTitle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M.3 166.9L0 68C0 57.7 9.5 50.1 19.5 52.3l35.6 7.9c10.6 2.3 19.2 9.9 23 20L96 128l127.3 37.6L181.8 20.4C178.9 10.2 186.6 0 197.2 0h40.1c11.6 0 22.2 6.2 27.9 16.3l109 193.8 107.2 31.7c15.9 4.7 30.8 12.5 43.7 22.8l34.4 27.6c24 19.2 18.1 57.3-10.7 68.2c-41.2 15.6-86.2 18.1-128.8 7L121.7 289.8c-11.1-2.9-21.2-8.7-29.3-16.9L9.5 189.4c-5.9-6-9.3-14.1-9.3-22.5zM32 448H608c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32zm96-80a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm128-16a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg> New Delhi</span></div>
            <div><span className="srchsml textTrim">DEL, Indira Gandhi Inte...</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="col-lg-3" id="div_calendar_oneway_return">
  <div className="row">
    <div className="col-lg-6">
      <div className="row">
        <div className="col-12">
          <table className="flightheadertbl">
            <thead>
              <tr>
                <td>Dep. <i className="fa-solid fa-caret-down"></i></td>
                <td className="text-end">
                  <select name="pickdeparture">
                    <option selected="">Any Time</option>
                    <option value="Spanish">Morning</option>
                  </select>
                </td>
              </tr>
            </thead>
            <tbody>
            </tbody>
          </table>
        </div>
      </div>
      <div id="pickCalOneWay" className="srchCon">
        <input id="datepicker" type="hidden" className="hasDatepicker" />
        <div className="srchRow">
          <div className="srchCol">
            <div>
                {/* <input type="datetime" name="" id="" /> */}
                <span className="srchTitle"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"/></svg> 19 </span><span className="srchLabel">Apr'24</span> </div>
            <div><span className="srchsml textTrim">Friday</span> </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-lg-6" id="div_flight_returncal">
      <div className="row">
        <div className="col-12">
          <table className="flightheadertbl">
            <thead>
              <tr>
                <td>Retutn <i className="fa-solid fa-caret-down"></i></td>
                <td className="text-end">
                  <select name="pickdeparture">
                    <option selected="">Any Time</option>
                    <option value="Spanish">Morning</option>
                  </select>
                </td>
              </tr>
            </thead>
            <tbody>
            </tbody>
          </table>
        </div>
      </div>
      <div className="srchCon">
        <div className="srchRow">
          <div id="returncalvis" className="srchCol" style={{ display: "none" }}>
            <div><span className="srchTitle"><i className="fa-solid fa-calendar-days"></i> 21</span> <span className="srchLabel">Apr'24</span> </div>
            <div><span className="srchsml textTrim">Sunday</span> </div>
          </div>
          <div id="addreturncalvis" className="srchCol">
            <div className="addReturndate">Tap to add a return date for bigger discounts</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


                            <div className="col-lg-2">
                            <div className="frwrapper position-relative">

                                <div className="row">
                                <div className="col-12">
                                    <table className="flightheadertbl">
                                    <thead>
                                        <tr>
                                        <td>Travellers &amp; Class <i className="fa-solid fa-caret-down"></i></td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    </tbody>
                                    </table>
                                </div>
                                </div>

                                <div id="selectflightpax" className="srchCon">
                                <div className="srchRow">
                                    <div className="srchCol">
                                    <div>
                                        <span className="srchTitle">
                                        <input className="inpflightpax" type="text" id="totalpaxflightinp" name="totalpaxflightinp" value="1" disabled="" />
                                        </span> <span className="srchLabel">Travellers</span>
                                        <span className="paxgroupico"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M96 64a64 64 0 1 1 128 0A64 64 0 1 1 96 64zm48 320v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V287.8L59.1 321c-9.4 15-29.2 19.4-44.1 10S-4.5 301.9 4.9 287l39.9-63.3C69.7 184 113.2 160 160 160s90.3 24 115.2 63.6L315.1 287c9.4 15 4.9 34.7-10 44.1s-34.7 4.9-44.1-10L240 287.8V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V384H144z"/></svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M152 88a72 72 0 1 1 144 0A72 72 0 1 1 152 88zM39.7 144.5c13-17.9 38-21.8 55.9-8.8L131.8 162c26.8 19.5 59.1 30 92.2 30s65.4-10.5 92.2-30l36.2-26.4c17.9-13 42.9-9 55.9 8.8s9 42.9-8.8 55.9l-36.2 26.4c-13.6 9.9-28.1 18.2-43.3 25V288H128V251.7c-15.2-6.7-29.7-15.1-43.3-25L48.5 200.3c-17.9-13-21.8-38-8.8-55.9zm89.8 184.8l60.6 53-26 37.2 24.3 24.3c15.6 15.6 15.6 40.9 0 56.6s-40.9 15.6-56.6 0l-48-48C70 438.6 68.1 417 79.2 401.1l50.2-71.8zm128.5 53l60.6-53 50.2 71.8c11.1 15.9 9.2 37.5-4.5 51.2l-48 48c-15.6 15.6-40.9 15.6-56.6 0s-15.6-40.9 0-56.6L284 419.4l-26-37.2z"/></svg> </span>
                                    </div>
                                    <div><span id="getcabinval" className="srchsml textTrim">Economy/Premium Economy</span> </div>
                                    </div>
                                </div>
                                </div>

                                <div id="div_flightPax" className="travelersFlight">
                                <div className="row align-items-center mb-1">
                                    <div className="col-6">Adults (12+)</div>
                                    <div className="col-6">
                                    <div className="input-group">
                                        <button className="input-group-text" id="btn-adult-minus" name="btn-adult-minus"  disabled=""><i className="fa-solid fa-minus"></i></button>
                                        <input type="text" className="form-control text-center" id="flightadultinp" value="1" disabled="" />
                                        <button className="input-group-text" ><i className="fa-solid fa-plus"></i></button>
                                    </div>
                                    </div>
                                </div>

                                <div className="row align-items-center mb-1">
                                    <div className="col-6">Children (2 - 11) </div>
                                    <div className="col-6">
                                    <div className="input-group">
                                        <button className="input-group-text" id="btn-child-minus" name="btn-child-minus"  disabled=""><i className="fa-solid fa-minus"></i></button>
                                        <input type="text" className="form-control text-center" id="flightchildinp" value="0" disabled="" />
                                        <button className="input-group-text" ><i className="fa-solid fa-plus"></i></button>
                                    </div>
                                    </div>
                                </div>

                                <div className="row align-items-center mb-1">
                                    <div className="col-6">Infants(0-2) </div>
                                    <div className="col-6">
                                    <div className="input-group">
                                        <button className="input-group-text" id="btn-infant-minus" name="btn-infant-minus"  disabled=""><i className="fa-solid fa-minus"></i></button>
                                        <input type="text" className="form-control text-center" id="flightinfantinp" value="0" disabled="" />
                                        <button className="input-group-text"><i className="fa-solid fa-plus"></i></button>
                                    </div>
                                    </div>
                                </div>

                                <div className="row mt-3">
                                    <div className="col-lg-12">
                                    <label htmlFor="selcabin"><strong>Travel Class</strong></label>
                                    <select id="selcabin" className="form-select">
                                        <option value="Economy / Premium Economy" defaultChecked="">Economy / Premium Economy</option>
                                        <option value="Business">Business</option>
                                        <option value="First Class">First Class</option>
                                    </select>
                                    </div>
                                </div>

                                <div className="row mt-3 mb-2">
                                    <div className="col-lg-12">
                                    <button className="btn btn-primary close_div_flightPax">Done </button>
                                    </div>
                                </div>
                                </div>

                            </div>
                            </div>

                            <div className="col-lg-2">

<button type="button"  class="btn btn-primary w-100 modifySearch mt-1">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
    <span>SEARCH</span> </button>


    


                            </div>

                                </div>
                            </div>
                                
                                <div className="row">
                                    <span>DXB, Dubai International</span>
                                </div>

                                <div className="col-12 mt-2">
      <div className="additional_flight_search_link">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg> Additional Search Options
      </div>
      <div id="div_additional_flight_search" style={{display:'none'}}>
        <div className="row">
          <div className="col-lg-4">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="preferred-airline" checked />
              <label className="form-check-label" htmlFor="preferred-airline">
                Preferred Airline
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="select-fare-type" />
              <label className="form-check-label" htmlFor="select-fare-type">
                Select Fare Type
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="markup-in-percnt" />
              <label className="form-check-label" htmlFor="markup-in-percnt">
                Markup in %
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="suppliers" />
              <label className="form-check-label" htmlFor="suppliers">
                Suppliers
              </label>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="direct-flights" />
              <label className="form-check-label" htmlFor="direct-flights">
                Direct Flights
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="refundable-fares-only" />
              <label className="form-check-label" htmlFor="refundable-fares-only">
                Refundable fares only
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="alliance-airlines" />
              <label className="form-check-label" htmlFor="alliance-airlines">
                Alliance Airlines
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="flexible-dates" checked />
              <label className="form-check-label" htmlFor="flexible-dates">
                Flexible Dates+/-3
              </label>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="select-saparate-flights" />
              <label className="form-check-label" htmlFor="select-saparate-flights">
                Select Flights Separately <i data-bs-toggle="tooltip" data-bs-html="true" title="" className="fa-solid fa-circle-info" data-bs-original-title="Tooltip on top" aria-label="Tooltip on top"></i>
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="currency-dropdown" />
              <label className="form-check-label" htmlFor="currency-dropdown">
                Currency - Dropdown
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="split-ticketing" />
              <label className="form-check-label" htmlFor="split-ticketing">
                Split Ticketing <i data-bs-toggle="tooltip" data-bs-html="true" title="" className="fa-solid fa-circle-info" data-bs-original-title="Tooltip on top" aria-label="Tooltip on top"></i>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Flights;