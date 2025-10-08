import Header from "@/components/Header";
import Link from "next/link";

export default function TermsPage() {
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

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <div className="flex items-start gap-3">
                <span className="text-brand-primary mt-2 font-bold">1.</span>
                <p>
                  This is a{" "}
                  <b>4-weekend live online course for music teachers</b>
                  transitioning to IB & IGCSE academic roles, conducted via Zoom
                  over four weekends (total 12 hours). The course covers
                  syllabus essentials, lesson planning, assessment, classroom
                  management, professional communication, and other skills
                  required for IB/IGCSE music teaching.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-brand-primary mt-2 font-bold">2.</span>
                <p>
                  Full payment is required at registration, which confirms
                  participation and agreement to these terms.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-brand-primary mt-2 font-bold">3.</span>
                <p>
                  <b>Missed classes are non-refundable</b>, as there are no
                  recordings. Participants are responsible for catching up on
                  any missed material. If the organiser cancels, a full refund
                  or rescheduled sessions will be offered.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-brand-primary mt-2 font-bold">4.</span>
                <p>
                  Participants must ensure they have the{" "}
                  <b>necessary technology</b>, software (Zoom), and stable
                  internet to attend sessions.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-brand-primary mt-2 font-bold">5.</span>
                <p>
                  The organiser, Curriculum Mastery, and Pratik Kulgod may
                  change the course schedule, content, or format if necessary
                  and will notify participants of significant changes.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-brand-primary mt-2 font-bold">6.</span>
                <p>
                  Participants are expected to{" "}
                  <b>conduct themselves respectfully</b>
                  during the course; disruptive behavior may result in removal
                  without refund.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-brand-primary mt-2 font-bold">7.</span>
                <p>
                  All course materials, presentations, and content are the
                  <b>
                    {" "}
                    intellectual property of Pratik Kulgod and Curriculum
                    Mastery{" "}
                  </b>
                  . Participants may not reproduce or distribute them without
                  prior written consent.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-brand-primary mt-2 font-bold">8.</span>
                <p>
                  The organiser, Curriculum Mastery, and Pratik Kulgod are not
                  liable for any direct, indirect, incidental, consequential, or
                  special damages arising from participation.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-brand-primary mt-2 font-bold">9.</span>
                <p>
                  By enrolling, participants acknowledge they have read,
                  understood, and agreed to these terms and conditions.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-brand-primary mt-2 font-bold">10.</span>
                <p>
                  These terms are governed by the laws of India, and any
                  disputes will be subject to the exclusive jurisdiction of the
                  courts in Mumbai, Maharashtra.
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
