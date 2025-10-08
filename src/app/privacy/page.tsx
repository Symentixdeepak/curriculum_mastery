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
              Terms and Conditions
            </h1>
          </div>

          {/* Terms Content */}
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-700 mb-8 text-lg leading-relaxed">
              By registering for this course, I confirm that I have read,
              understood, and agreed to the following:
            </p>

            <ul className="space-y-4 text-gray-700 leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="text-brand-primary mt-2">•</span>
                <span>
                  This is a 4-weekend live online course for music teachers
                  transitioning to IB & IGCSE academic roles.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="text-brand-primary mt-2">•</span>
                <span>
                  The course covers syllabus essentials, lesson planning,
                  assessment, classroom management, and professional
                  communication.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="text-brand-primary mt-2">•</span>
                <span>
                  Full payment is required at registration, which confirms
                  participation.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="text-brand-primary mt-2">•</span>
                <span>
                  Missed classes are non-refundable, as there are no recordings.
                  If the organiser cancels, a full refund or rescheduled
                  sessions will be offered.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="text-brand-primary mt-2">•</span>
                <span>
                  Participants are responsible for adequate technology and the
                  internet to attend sessions.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="text-brand-primary mt-2">•</span>
                <span>
                  The organiser may change the schedule, content, or format if
                  necessary.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="text-brand-primary mt-2">•</span>
                <span>
                  The organiser is not liable for any direct or indirect damages
                  arising from participation.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="text-brand-primary mt-2">•</span>
                <span>These terms are governed by the laws of India.</span>
              </li>
            </ul>
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
