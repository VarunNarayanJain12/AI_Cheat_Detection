import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, Shield, Eye, Server, Users, BarChart, Camera, Globe } from "lucide-react"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import StatCounter from "@/components/stat-counter"
import FeatureCard from "@/components/feature-card"
import LiveStatusBar from "@/components/live-status-bar"
import NeuralNetworkAnimation from "@/components/neural-network-animation"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-secondary py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <NeuralNetworkAnimation />
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-6">
              <div className="space-y-2">
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-none">AI-Powered</Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  Revolutionizing Exam Security with <span className="text-accent">AI-Powered</span> Cheat Detection
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Comprehensive exam integrity solution with real-time monitoring for both online and offline
                  environments.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button className="bg-primary hover:bg-primary/90 text-white">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-[500px] aspect-video rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="Real-Time-Cheating-Detection-AI-Solutions-for-Monitoring-Online-Exams.jpg?height=500&width=800"
                  alt="AI-powered exam monitoring dashboard"
                  width={800}
                  height={500}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <LiveStatusBar count={128} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-white">
            <StatCounter value={99.8} suffix="%" label="Detection Accuracy" />
            <StatCounter value={500} suffix="+" label="Institutions" />
            <StatCounter value={5} suffix="M+" label="Exams Secured" />
            <StatCounter value={24} suffix="/7" label="Support" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                AI-Powered Detection Features
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our advanced AI algorithms detect and prevent cheating in real-time across multiple environments.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={<Eye className="h-10 w-10 text-primary" />}
              title="Head & Gaze Tracking"
              description="Detects students looking away for long durations or focusing on unauthorized materials."
            />
            <FeatureCard
              icon={<Shield className="h-10 w-10 text-primary" />}
              title="Hand Movement Detection"
              description="Flags suspicious gestures such as passing notes or using hidden devices."
            />
            <FeatureCard
              icon={<Camera className="h-10 w-10 text-primary" />}
              title="Multi-Camera Tracking"
              description="For offline exams, allows cross-referencing multiple camera feeds for comprehensive monitoring."
            />
            <FeatureCard
              icon={<Server className="h-10 w-10 text-primary" />}
              title="AI Audio Analysis"
              description="Detects whispering, unusual noises, or speech patterns indicating potential cheating."
            />
            <FeatureCard
              icon={<Users className="h-10 w-10 text-primary" />}
              title="Deepfake & Impersonation Detection"
              description="Ensures student identity matches before starting an exam using facial recognition."
            />
            <FeatureCard
              icon={<Globe className="h-10 w-10 text-primary" />}
              title="Browser Lockdown"
              description="Prevents access to unauthorized websites and applications during online exams."
            />
          </div>

          <div className="mt-12 text-center">
            <Button className="bg-accent hover:bg-accent/90 text-white">
              Explore All Features
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Full-Screen AI Monitoring Dashboard
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Comprehensive monitoring solution with real-time analytics and alerts.
              </p>
            </div>
          </div>

          <div className="relative rounded-xl overflow-hidden shadow-2xl border border-border">
            <Image
              src="/placeholder.svg?height=800&width=1600"
              alt="AI monitoring dashboard"
              width={1600}
              height={800}
              className="object-cover w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
              <div className="p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Real-Time Monitoring Dashboard</h3>
                <p className="max-w-[600px] mb-4">
                  Monitor multiple exam environments simultaneously with AI-powered analytics and alerts.
                </p>
                <Button className="bg-accent hover:bg-accent/90 text-white">View Dashboard Demo</Button>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-secondary rounded-lg p-6 shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Eye className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-bold text-lg">Live CCTV Feed Panel</h3>
              </div>
              <p className="text-muted-foreground">
                Real-time exam surveillance footage with bounding boxes around detected cheating activity.
              </p>
            </div>

            <div className="bg-secondary rounded-lg p-6 shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <BarChart className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-bold text-lg">AI Cheat Probability Chart</h3>
              </div>
              <p className="text-muted-foreground">
                Dynamic graph showing percentage likelihood of cheating incidents with historical trends.
              </p>
            </div>

            <div className="bg-secondary rounded-lg p-6 shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Server className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-bold text-lg">Recent Incidents Table</h3>
              </div>
              <p className="text-muted-foreground">
                List of flagged students, timestamps, and detected actions with color-coded severity levels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Alert System Section */}
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Real-Time Alerts & Notifications</h2>
              <p className="text-muted-foreground">
                Our system provides instant alerts for suspicious activities, allowing proctors to take immediate
                action.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 rounded-lg bg-yellow-50 border border-yellow-200">
                  <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-yellow-600"
                    >
                      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                      <line x1="12" y1="9" x2="12" y2="13"></line>
                      <line x1="12" y1="17" x2="12.01" y2="17"></line>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-yellow-800">Low-Level Warning</h4>
                    <p className="text-sm text-yellow-700">
                      Minor unusual activity detected, such as extended gaze away from screen.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-lg bg-orange-50 border border-orange-200">
                  <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-orange-600"
                    >
                      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                      <line x1="12" y1="9" x2="12" y2="13"></line>
                      <line x1="12" y1="17" x2="12.01" y2="17"></line>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-orange-800">High-Level Alert</h4>
                    <p className="text-sm text-orange-700">
                      Multiple suspicious behaviors detected, requiring human review.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-lg bg-red-50 border border-red-200">
                  <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-red-600"
                    >
                      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                      <line x1="12" y1="9" x2="12" y2="13"></line>
                      <line x1="12" y1="17" x2="12.01" y2="17"></line>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-red-800">Critical Alert</h4>
                    <p className="text-sm text-red-700">
                      Confirmed cheating case flagged for administrator action with video evidence.
                    </p>
                  </div>
                </div>
              </div>

              <Button className="bg-primary hover:bg-primary/90 text-white">Learn About Alert System</Button>
            </div>

            <div className="rounded-xl overflow-hidden shadow-lg border border-border">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Alert system interface"
                width={800}
                height={600}
                className="object-cover w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Admin Panel Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="order-2 lg:order-1 rounded-xl overflow-hidden shadow-lg border border-border">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Admin analytics dashboard"
                width={800}
                height={600}
                className="object-cover w-full"
              />
            </div>

            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Admin & Analytics Panel</h2>
              <p className="text-muted-foreground">
                Powerful tools for administrators to manage the system, analyze data, and generate reports.
              </p>

              <ul className="space-y-3">
                {[
                  "Customizable AI Sensitivity Controls to adjust detection thresholds",
                  "Performance Analytics Dashboard with detection trends over time",
                  "Downloadable Reports in PDF/CSV formats for further investigation",
                  "User management for faculty and administrator access",
                  "System configuration and integration settings",
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button className="bg-primary hover:bg-primary/90 text-white">Explore Admin Features</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Seamless Integration</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our system integrates effortlessly with your existing infrastructure and learning management systems.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                  <polyline points="10 17 15 12 10 7"></polyline>
                  <line x1="15" y1="12" x2="3" y2="12"></line>
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Secure Login Portal</h3>
              <p className="text-muted-foreground">
                Single sign-on integration with your institution's authentication system for faculty and administrators.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Student Profiles</h3>
              <p className="text-muted-foreground">
                Comprehensive student profiles with incident logs linked to their college records for easy reference.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Exportable Reports</h3>
              <p className="text-muted-foreground">
                Generate and export detailed reports and logs for further investigation and record-keeping.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl">
                Ready to Secure Your Exams?
              </h2>
              <p className="text-primary-foreground/80 md:text-xl">
                Get started with our AI-powered exam integrity solution today and ensure academic honesty in all your
                assessments.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">
              <Button className="bg-white text-primary hover:bg-white/90">Request Demo</Button>
              <Button variant="outline" className="border-white/30 text-white hover:bg-primary-foreground/10">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

