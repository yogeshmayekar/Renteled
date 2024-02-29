import React from 'react';
import './guestPolicy.css'

function GuestPolicy() {
  return (
    <>
    <div className='guest__policy__container'>
        <div className='policy__heading'>
            <h1>Guest Policies For RENTELED Hotels And Homes In India.</h1>
        </div>
        <div className='general__booking_policy'>
            <h3>General Booking Policy:</h3>
            <ol className='general__policy__list'>
                <li>Certain destinations may have different travel guidelines for specific times during the year. Please abide by all laws and guidelines as applicable.</li>
                <li>Policies are booking specific and would be informed to the guest at the time of booking or upon Check-In.</li>
                <li>Reference to Renteled includes its affiliates, employees and officers. “Hotel” refers to the hotel or home in which you have made a valid booking through Renteled.</li>
            </ol>
        </div>
        <div className='customer__care'>
            <div>
            <strong>
            If you need any help in creating new booking Renteled Hotel Booking expert has a 24*7 support to help you around the clock. Please contact Renteled customer care number <span className='number__headlight'>01543-7568390</span>
            </strong>
            </div>
            <div style={{height:'25px'}}></div>
            <div>
            <strong>
            If you need to cancel or change your reservation made through the Renteled app, website or call center, please contact Renteled customer care number <span className='number__headlight'>74118 05513</span> 
            </strong>
            </div>
        </div>
        <div className='checkIn__policy'>
            <h3>Check-in Policy:</h3>
            <ol>
                <li>The primary guest must be at least 18 years of age to be able to check into the hotel.</li>
                <li>The usual standard check-in time is 12 noon. Renteled tries to ensure that you can check-in any time after that till your reservation is valid.</li>
                <li>It is mandatory for all guests to present valid photo identification at the time of check-in. According to government regulations, a valid Photo ID has to be carried by every person above the age of 18 staying at the hotel. The identification proofs accepted are Aadhar Card, Driving License, Voter ID Card, and Passport. Note that PAN card is not acceptable. Without an original copy of a valid ID, you will not be allowed to check-in.</li>
                <li>After reaching the hotel, if you face any difficulty in check-in and it cannot be resolved by the Hotel, you are requested to contact Renteled immediately. Renteled will verify the issue with the Hotel and post verification, you would be provided the following assistance:</li>
                <ol type='a' className='sub_list'>
                    <li>Renteled will try to arrange for accommodation in the same Hotel</li>
                    <li>Renteled will try to provide you with alternate accommodation in its other listed properties if the same is available.</li>
                    <li>If Renteled is unable to provide alternative accommodation or you do not accept such alternate accommodation, you may be offered full refund.</li>
                    <li>Renteled will not be liable for compensation beyond your booking payment.</li>
                </ol>
                <li>Unless specifically intimated, Renteled shall not be held liable to refund the booking amount or any part thereof in case of unavailability of rooms due to natural disaster (earthquake, landslide etc.), terrorist activity, government guidelines or any force majeure act, beyond the control of Renteled</li>
            </ol>
        </div>
        <div className='booking__extension'>
            <h3>Cancellation Policy:</h3>
            <ol>
                <li>You can cancel your booking using the Renteled website or mobile app.</li>
                <li>The applicable refund amount will be credited to you within 7-14 working days. Renteled reserves the right to debit from Renteled Money account, in case of cancellation amount being higher than money already paid by you.</li>
                <li>Some Hotels do not accept bookings from unmarried couples, do not accept local id proofs. This information is available to the Guest prior to making the booking. For any cancellations or check-in denial associated with such bookings that are dishonoured by the Hotel, Renteled shall be under no obligation to refund any amount to the Guest.</li>
                <li>Hotels reserve the right to deny check-in where customers are unable to provide a valid government id or where minor Guests are travelling unaccompanied or if the Hotel is suspicious of the Guests check-in at it’s Property. Under all such cases Renteled shall be under no obligation to refund any amount to the Guest.</li>
                <li>For corporate bookings, the cancellation policy mentioned on your contract will apply.</li>
                <li>In case no cancellation policy is mentioned on the Hotel details page, the following cancellation policy shall apply:</li>
                <p style={{padding:'5px 0', margin:'0'}}><strong>Guest cancellation policy:</strong> For booking specific cancellation policy, please refer to your booking voucher.</p>
                <p style={{padding:'5px 0', margin:'0'}}><strong>No Show:</strong> For booking specific cancellation policy, please refer to your booking voucher.</p>
            </ol>
        </div>
        <div className='long__stay'>
            <h3>Long Stay Bookings</h3>
            <div>
            For bookings of more than 7 nights, you have to settle all outstanding payments on a weekly basis. Further accommodation is subject to settlement of the outstanding amount.
            </div>
        </div>
        <div className='thriple__ocupency'>
            <h3>Triple Occupancy Policy:</h3>
            <div>Some Hotels allow triple occupancy by providing an extra mattress for the third person for extra fee. However no extra bed is usually provided.</div>
        </div>
        <div className='visitor__policy'>
        <h3>Visitors Policy</h3>
        <ol>
            <li>You should check with the Hotel for its Visitor Policy.</li>
            <li>In order to maintain privacy of guests and the tranquillity of the Hotel, Renteled encourages its Hotel Partners to have a visitor policy where:</li>
            <ol type='a'>
                <li>Visitors are generally allowed to meet guests in the guest rooms during the day, except if there is an emergency.</li>
                <li>Visitors are not to be allowed to stay overnight.</li>
                <li>The Hotel front desk requires all visitors to present a government approved photo identity prior to accessing guest floors/rooms.</li>
            </ol>
        </ol>
        </div>
        <div className='chield__policy'>
            <h3>Child Policy</h3>
            <ol>
                <li>Stay of 1 child up to 5 years of age is complementary without the use of an extra mattress.</li>
                <li>Breakfast charges may be applicable for the child.</li>
            </ol>
        </div>
        <div className='service__on'>
            <h3>Service On-Time policy</h3>
            <ol>
                <li>The hotels associated with the program will have Service On-time tag/information displayed on the app.</li>
                <li>If you face any issue related to your stay in these hotels, we promise issue resolution within 1 hour or else we will provide refund.</li>
                <li>If the issue can not be resolved, we will offer shifting to another room in the same hotel or shifting to a different hotel.</li>
                <li>You need to call <strong>Renteled customer care number</strong> 7411805513 to register the issue for quick assistance.</li>
                <li>Refund amount will be subjected to the severity of the issues and will be decided as per our guidelines.</li>
                <li>As of now, this service is available for only selected hotels in these cities: Bengaluru, Calcutta, Delhi, Gurugram, Hyderabad, and Lucknow.</li>
            </ol>
        </div>
        <div className='codeOf__conduct'>
            <h3>Code of Conduct:</h3>
            <ol>
                <li>Illegal activities are not permitted in any Renteled Hotel.</li>
                <li>You should be aware that the Hotel may refuse service or evict you</li>
                <ol type='a'>
                    <li>For refusal or failure to pay for accommodation,</li>
                    <li>If you act in a disorderly fashion as to disturb the peace of other guests,</li>
                    <li>If you destroy, damage, deface or threaten harm to hotel property or guests,</li>
                    <li>Any of your actions are deemed inappropriate by the Hotel.</li>
                </ol>
                <li>Please keep the Hotel room in a good condition and maintain hygiene and cleanliness. You may be held liable for any damage to Hotel assets (except normal wear and tear).</li>
            </ol>

        </div>

        <div className='drug__alcohol' >
            <h3>Smoking, Drugs and Alcohol</h3>
            <ol>
                <li>Smoking is prohibited in Renteled Townhouse. Some Hotels may prohibit smoking in their guest rooms so it is prudent to check with the Hotel Front Desk.</li>
                <li>Anyone found using or under the influence of illegal drugs or substances classified under the <b><u><i>Narcotic Drugs and Psychotropic Substances Act, 1985</i></u></b> will be reported to the police and asked to leave the Hotel. Any evidence or suspicion of drug use at the Hotel will also be reported immediately to the police</li>
                <li>Drinking alcohol is prohibited in all public areas including; in the Hotel’s lobby, hallways, and parking areas of Renteled Hotels. Please contact the Hotel Front Desk regarding consumption of alcoholic beverages within your room, without disturbing the discipline of the Hotel or other guests.</li>
            </ol>
        </div>

        <div className='safety__policy'>
            <h3>Safety and Security</h3>
            <ol>
                <li>For your own safety, please follow fire safety and emergency response procedures as directed by Hotel staff</li>
                <li>Renteled/Hotel are not liable for lost, misplaced, damaged or stolen valuables or belongings.</li>
                <li>Keeping your safety in mind, a SOS button is provided which gets activated in the Renteled app upon check-in. This SOS button can be used in case of emergency. The Screenshot of the same is provided below.</li>
            </ol>
        </div>

        <div className='contact__policy'>
            <h3>Contact Policies:</h3>
            <ol>
                <li>You may be contacted any time before your check-in date to confirm your arrival status/arrival time through calls or messages. If Renteled does not receive a response from you after multiple attempts, your booking may be put on hold or cancelled. Renteled will reinstate your booking when you contact us back or make a payment through our secure payment options, subject to availability.</li>
                <li>As we continue to strive to improve our services, we may reach out to you for your feedback on your experience through calls or messages.</li>
                <li>We might reach out to you for offers.</li>
            </ol>
        </div>

        <div className='contact__policy'>
            <h3>Beware of Fraud:</h3>
            <ol>
                <li>Renteled does not authorise any of its employees, consultants, third-party vendors, associates to collect payment in any other form other than payments from secure Renteled gateway and its affiliated OTA payment gateway links.</li>
                <li>Any instances where collection of payment is attempted from any unauthorized payment gateways other than the ones mentioned above are acts of fraud. Encountering and acting on the same is solely on your own accord and discretion. Renteled will not be responsible for any loss/liability arising out of such an event.</li>
            </ol>
        </div>

        <div className='contact__policy'>
            <h3>Insurance</h3>
            <ol>
                <li>Travel Insurance provided as a part of Renteled's services shall be as per the terms and conditions of the third-party insurance company, Deco General Insurance (hereinafter “Deco”). Deco coverage shall only be applicable for check-in to Renteled Hotels, Renteled Homes, Renteled Townhouse and Collection O establishments on bookings made only via the Renteled App, website, mobile website, direct bookings and/or walk-ins. The list of Renteled establishments covered by Deco may be changed from time without any intimation to you. Renteled merely acts as a facilitator in connecting you with Deco. Please contact Deco directly for any claims or disputes. Renteled shall not be held liable in case of partial acceptance or denial of the claims by Deco and Renteled has no role or liability in claims settlement.</li>
                <li>It is clarified that a claim raised under the relevant insurance policy would act as a bar against any endorsement in the policy which would include but not be limited to changes relating to extension/curtailment of stay period and addition/deletion of guests covered under the policy.</li>
                <li>For any assistance related to insurance, you can write on <i><b><u>“renteledcare@deco.com”</u></b></i> </li>
            </ol>
        </div>

        <div className='grievances'>
            <h3>Grievances</h3>
            <p>For any grievances:</p>
            <p><b>Phone : </b>+91 7411805513</p>
            <p><b>Self Help : </b>https://help.renteledrooms.com</p>
            <p><b>Email: </b>india.grievances@renteledrooms.com</p>
            <p><b>Grievance Officer: </b>Yogesh Mayekar</p>
        </div>
    </div>
    </>
  )
}

export default GuestPolicy;