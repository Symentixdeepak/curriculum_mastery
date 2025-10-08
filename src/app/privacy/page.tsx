import Header from "@/components/Header";
import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#ffffff" }}>
      <Header />
      
      <div className="min-h-screen py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-gray-600 text-lg">
              Privacy Policy for Pratik Kulgod&apos;s IB and IGCSE Music Educator Course
            </p>
            <p className="text-gray-500 mt-2">
              Last Updated: 08/10/25
            </p>
          </div>

          {/* Privacy Policy Content */}
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-700 mb-8 text-lg leading-relaxed">
              This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from our website www.curriculum-mastery.in (the &quot;Site&quot;).
            </p>

            <div className="space-y-8 text-gray-700 leading-relaxed">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  1. Information We Collect
                </h2>
                <p className="mb-4">
                  When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device. Additionally, as you browse the Site, we collect information about the individual web pages or products that you view, what websites or search terms referred you to the Site, and information about how you interact with the Site. We refer to this automatically-collected information as &quot;Device Information.&quot;
                </p>
                <p className="mb-4">
                  We collect Device Information using the following technologies:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>
                    <strong>Cookies:</strong> Data files that are placed on your device or computer and include an anonymous unique identifier.
                  </li>
                  <li>
                    <strong>Log files:</strong> Track actions occurring on the Site, and collect data including your IP address, browser type, browser version, the pages of our Site that you visit, the time and date of your visit, the time spent on those pages, and other diagnostic data.
                  </li>
                </ul>
                <p>
                  When you register for the course, we also collect personal information such as your name, email address, and payment information. This is referred to as &quot;Order Information.&quot;
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  2. How We Use Your Information
                </h2>
                <p className="mb-4">
                  We use the information we collect in various ways, including to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide, operate, and maintain our website and course.</li>
                  <li>Improve, personalize, and expand our website.</li>
                  <li>Understand and analyze how you use our website.</li>
                  <li>Develop new products, services, features, and functionality.</li>
                  <li>Process your transactions and send you related information, including purchase confirmations and invoices.</li>
                  <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the course, and for marketing and promotional purposes.</li>
                  <li>Find and prevent fraud.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  3. Sharing Your Information
                </h2>
                <p>
                  We may share your personal information with third parties to help us use your personal information as described above. For example, we use a third-party service for payment processing. We will not share your personal information with any other third parties without your consent unless required by law.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  4. Your Rights
                </h2>
                <p>
                  If you are a resident of the European Economic Area, you have various rights regarding your personal information, including the right to access, rectification, or erasure of your personal data, the right to restrict processing, the right to object to processing, and the right to data portability. If you wish to exercise any of these rights, please contact us.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  5. Data Retention
                </h2>
                <p>
                  When you place an order through the Site, we will maintain your Order Information for our records unless and until you ask us to delete this information.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  6. Changes
                </h2>
                <p>
                  We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal, or regulatory reasons. We will notify you of any changes by posting the new Privacy Policy on this page.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  7. Contact Us
                </h2>
                <p>
                  For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at{" "}
                  <a 
                    href="mailto:hello@curriculum-mastery.in"
                    className="text-brand-primary hover:underline"
                  >
                    hello@curriculum-mastery.in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    
      <footer className="mt-16 border-t bg-gray-50">
        <div className="mx-auto max-w-6xl p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
            <span>
              © {new Date().getFullYear()} Pratik Kulgod. All rights reserved.
            </span>
            <div className="flex items-center gap-4">
              <Link
                href="/privacy"
                className="hover:text-blue-600 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-blue-600 transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
