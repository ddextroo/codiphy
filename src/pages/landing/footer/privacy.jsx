import React from "react";
import { IoCloseCircle } from "react-icons/io5";

const privacy = ({ onClose }) => {
  return (
    <div className="modal-overlay justify-center items-center flex fixed inset-0 z-50 bg-black bg-opacity-50 rounded-xl">
      <div className="modal justify-center items-center flex flex-col overflow-x-hidden overflow-y-auto relative w-auto my-6 mx-auto">
        <div className="modal-content p-5 backdrop-filter divide-y divide-gray space-y-3 bg-primaryLight rounded-xl max-h-full h-full font-poppins overflow-auto overflow-x-hidden ml-20 mr-20 max-w-3xl">
          <div className="flex flex-row justify-between items-center mt-5 mb-7">
            <div className="text-3xl font-semibold">Privacy Policy</div>
            <IoCloseCircle size={25} color="gray" onClick={onClose} className=" cursor-pointer"/>
          </div>
          <div className="overflow-y-auto h-[30rem] py-5 text-left">
          <div className="text-md md:text-lg bg-opacity-0 py-5">
          <div className="mb-3">This page is used to inform visitors regarding my policies with the collection, use, and disclosure of Personal Information if anyone decided to use my Service.</div>
          If you choose to use my Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that I collect is used for providing and improving the Service. I will not use or share your information with anyone except as described in this Privacy Policy.
          <div className="text-md md:text-lg bg-opacity-0 py-5">
          The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which are accessible at Codiphy unless otherwise defined in this Privacy Policy.
          </div>
          </div>
          <div className="text-xl font-semibold">Information Collection and Use</div>
          <div className="text-md md:text-lg bg-opacity-0 py-5">
          For a better experience, while using our Service, we may require you to provide us with certain personally identifiable information, including but not limited to Email address, and Display name. The information that we request will be retained by us and used as described in this privacy policy.
          <div className="text-md md:text-lg bg-opacity-0 py-5">
          The app does use third-party services that may collect information used to identify you.
          <div className="text-md md:text-lg bg-opacity-0 py-5">
          Link to the privacy policy of third-party service providers used by the app
            </div>
          <div className="text-md md:text-lg bg-opacity-0 py-5">
          <div><span className="underline"><a href="https://play.google.com/store/apps/details?id=com.google.android.gms&pli=1">Google Play Services,</a></span></div>
            </div>
          <div><span className="underline"><a href="https://firebase.google.com/docs/analytics/">Google Analytics for Firebase,</a></span></div>
          </div>  
          <div><span className="underline"><a href="https://firebase.google.com/docs/crashlytics/">Firebase Crashlytics,</a></span></div>
          </div>
          <div className="text-xl font-semibold">Log Data</div>
          <div className="text-md md:text-lg bg-opacity-0 py-5">
          We want to inform you that whenever you use our Service, in a case of an error in the app we collect data and information (through third-party products) on your phone called Log Data. This Log Data may include information such as your device Internet Protocol (“IP”) address, device name, operating system version, the configuration of the app when utilizing our Service, the time and date of your use of the Service, and other statistics. 
          </div>
          <div className="text-xl font-semibold">Cookies</div>
          <div className="text-md md:text-lg bg-opacity-0 py-5">
          Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the websites that you visit and are stored on your device's internal memory.
            </div>
          <div className="text-md md:text-lg bg-opacity-0 py-5">
          This Service does not use these “cookies” explicitly. However, the app may use third-party code and libraries that use “cookies” to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service.
            </div>
          <div className="text-xl font-semibold">Service Providers</div>
          <div className="text-md md:text-lg bg-opacity-0 py-5">
          We may employ third-party companies and individuals due to the following reasons:
            </div>
          <div className="text-md md:text-lg bg-opacity-0 py-5">
          To facilitate our Service;</div>
          <div className="text-md md:text-lg bg-opacity-0 py-5">
          To provide the Service on our behalf;</div>
          <div className="text-md md:text-lg bg-opacity-0 py-5">
          To perform Service-related services; or</div>
          <div className="text-md md:text-lg bg-opacity-0 py-5">
          To assist us in analyzing how our Service is used.</div>
          <div className="text-md md:text-lg bg-opacity-0 py-5">
          We want to inform users of this Service that these third parties have access to their Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.
            </div>
          <div className="text-xl font-semibold">Security</div>
          <div className="text-md md:text-lg bg-opacity-0 py-5">
          We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.
            </div>
            <div className="text-xl font-semibold">Links to Other Sites</div>
          <div className="text-md md:text-lg bg-opacity-0 py-5">
          This Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
            </div>
            <div className="text-xl font-semibold">Children’s Privacy</div>
          <div className="text-md md:text-lg bg-opacity-0 py-5">
          These Services do not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13 years of age. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to do the necessary actions.
            </div>
            <div className="text-xl font-semibold">Changes to This Privacy Policy</div>
          <div className="text-md md:text-lg bg-opacity-0 py-5">
          We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page.
            </div>
          <div className="text-md md:text-lg bg-opacity-0 py-5">
          This policy is effective as of 2023-12-22
            </div>
            <div className="text-xl font-semibold">Contact Us</div>
          <div className="text-md md:text-lg bg-opacity-0 py-5">
          If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at codiphy@dev.com.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default privacy;
