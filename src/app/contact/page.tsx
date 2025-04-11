import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";

export const metadata = {
  title: "Contact - TechFlow",
  description: "Get in touch with the TechFlow team to learn more about our maintenance management solutions.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#1a2842] to-[#101c38]">
        <div className="container-custom">
          <div className="p-8 md:p-12 bg-techflow-dark/70 rounded-2xl">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Transform Your Maintenance Operations?
              </h1>
              <p className="text-lg text-techflow-light/80 max-w-3xl mx-auto">
                Get started with TechFlow today and see the difference it makes
                for your team.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white text-lg font-bold mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold mb-2">Schedule a Demo</h3>
                <p className="text-techflow-light/80">
                  See TechFlow in action with your data
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white text-lg font-bold mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold mb-2">Custom Setup</h3>
                <p className="text-techflow-light/80">
                  We'll configure it to your workflow
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white text-lg font-bold mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold mb-2">Go Live</h3>
                <p className="text-techflow-light/80">
                  Start optimizing your operations
                </p>
              </div>
            </div>

            <div className="mt-12 flex justify-center gap-4">
              <Button size="lg" className="rounded-md">
                Schedule a Demo
              </Button>
              <Button size="lg" variant="outline" className="rounded-md">
                View Pricing
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-techflow-dark">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-techflow-light/80 mb-8">
                Have questions about TechFlow? Our team is here to help you find
                the right solution for your maintenance needs.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Call Us</h3>
                    <p className="text-techflow-light/80">(555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z" />
                      <polyline points="15,9 12,12 9,9" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Email Us</h3>
                    <p className="text-techflow-light/80">
                      info@techflow.example.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Visit Us</h3>
                    <p className="text-techflow-light/80">
                      123 Tech Lane, Suite 400
                      <br />
                      San Francisco, CA 94107
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-techflow-dark-lighter p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div>
                  <Input
                    type="text"
                    placeholder="Your Name"
                    className="bg-gray-800/50 border-gray-700"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Email Address"
                    className="bg-gray-800/50 border-gray-700"
                  />
                </div>
                <div>
                  <Input
                    type="text"
                    placeholder="Company Name"
                    className="bg-gray-800/50 border-gray-700"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Message"
                    className="bg-gray-800/50 border-gray-700 min-h-[120px]"
                  />
                </div>
                <Button className="w-full rounded-md">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
