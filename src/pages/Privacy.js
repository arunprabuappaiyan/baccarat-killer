import { Container } from 'react-bootstrap';

const Privacy = () => {
  return (
    <>
      <Container className="min-height-70">
        <div className="p-3">
          <div className="fs-1 fw-bold">Privacy Policy</div>
          <br />
          <div className="h3">Information Collection and Use</div>
          <div className="">
            For a better experience, while using our Service, we may require you
            to provide us with certain personally identifiable information,
            including but not limited to email, nickname. The information that
            we request will be retained by us and used as described in this
            privacy policy.
          </div>
          <br />
          <div className="h3">Log Data</div>
          <div className="">
            We want to inform you that whenever you use our Service, in the case
            of an error in the app we collect data and information (through
            third party products) on your phone called Log Data. This Log Data
            may include information such as your device Internet Protocol (“IP”)
            address, device name, operating system version, the configuration of
            the app when utilizing our Service, the time and date of your use of
            the Service, and other statistics.
          </div>
          <br />
          <div className="h3">Cookies</div>
          <div className="">
            Cookies are files with a small amount of data that are commonly used
            as anonymous unique identifiers. These are sent to your browser from
            the websites that you visit and are stored on your device’s internal
            memory. This Service does not use these “cookies” explicitly.
            However, the app may use third party code and libraries that use
            “cookies” to collect information and improve their services. You
            have the option to either accept or refuse these cookies and know
            when a cookie is being sent to your device. If you choose to refuse
            our cookies, you may not be able to use some portions of this
            Service.
          </div>
          <br />
          <div className="h3">Service Providers</div>
          <div className="">
            We may employ third-party companies and individuals due to the
            following reasons: <br />
            To facilitate our Service; To provide the Service on our behalf; To
            perform Service-related services; or To assist us in analyzing how
            our Service is used. We want to inform users of this Service that
            these third parties have access to your Personal Information. The
            reason is to perform the tasks assigned to them on our behalf.
            However, they are obligated not to disclose or use the information
            for any other purpose.
          </div>
          <br />
          <div className="h3">Security</div>
          <div className="">
            We value your trust in providing us your Personal Information, thus
            we are striving to use commercially acceptable means of protecting
            it. But remember that no method of transmission over the internet,
            or method of electronic storage is 100% secure and reliable, and we
            cannot guarantee its absolute security.
          </div>
          <br />
          <div className="h3">Links to Other Sites</div>
          <div className="">
            This Service may contain links to other sites. If you click on a
            third-party link, you will be directed to that site. Note that these
            external sites are not operated by us. Therefore, we strongly advise
            you to review the Privacy Policy of these websites. We have no
            control over and assume no responsibility for the content, privacy
            policies, or practices of any third-party sites or services.
          </div>
          <br />
          <div className="h3">Changes to This Privacy Policy</div>
          <div className="">
            We may update our Privacy Policy from time to time. Thus, you are
            advised to review this page periodically for any changes. We will
            notify you of any changes by posting the new Privacy Policy on this
            page. This policy is effective as of 24-09-2023.
          </div>
          <br />
          <div className="fs-6">
            Contact:{' '}
            <a href="mailto:mailbaccaratkiller@gmail.com" class="link-info">
              mailbaccaratkiller@gmail.com
            </a>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Privacy;
