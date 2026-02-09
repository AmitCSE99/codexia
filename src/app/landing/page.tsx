import React from 'react';
import {
    Code2,
    Zap,
    Github,
    Cloud,
    Sparkles,
    Play,
    ArrowRight,
    CheckCircle2,
    FileCode,
    Eye,
    GitBranch,
    Keyboard,
    Lock,
    Gauge,
    Check,
    Star
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Image from 'next/image';

const LandingPage = () => {
    const features = [
        {
            icon: Sparkles,
            title: "AI-Powered Coding",
            description: "Chat with your editor. Generate features, fix bugs, refactor code, and ship faster."
        },
        {
            icon: Eye,
            title: "Live Preview",
            description: "See changes instantly using in-browser containers — no reloads, no waiting."
        },
        {
            icon: Github,
            title: "GitHub Sync",
            description: "Import and export repositories seamlessly and collaborate effortlessly."
        },
        {
            icon: Cloud,
            title: "Cloud IDE",
            description: "Fully browser-based development environment with zero configuration."
        }
    ];

    const workflow = [
        {
            step: "01",
            title: "Import or Create Project",
            description: "Start from scratch or import from GitHub instantly"
        },
        {
            step: "02",
            title: "Chat With AI to Modify Code",
            description: "Ask AI to build features, fix bugs, or refactor"
        },
        {
            step: "03",
            title: "Preview Instantly in Browser",
            description: "See your changes live with web containers"
        },
        {
            step: "04",
            title: "Export to GitHub",
            description: "Push your code and collaborate seamlessly"
        }
    ];

    const stats = [
        { value: "10x", label: "Faster Development" },
        { value: "0", label: "Setup Required" },
        { value: "Real-Time", label: "AI Assistance" }
    ];

    const developerFeatures = [
        "Keyboard-first UI",
        "Monaco-style editor experience",
        "Lightning-fast performance",
        "Secure isolated environments"
    ];

    const pricingTiers = [
        {
            name: "Free",
            price: "$0",
            period: "forever",
            description: "Perfect for trying out Codexia",
            features: [
                "1 active project",
                "Basic AI assistance",
                "Community support",
                "Public repositories",
                "5GB storage",
                "Standard preview"
            ],
            cta: "Start Free",
            popular: false
        },
        {
            name: "Pro",
            price: "$19",
            period: "per month",
            description: "For professional developers",
            features: [
                "Unlimited projects",
                "Advanced AI models",
                "Priority support",
                "Private repositories",
                "100GB storage",
                "Real-time collaboration",
                "Custom environments",
                "GitHub integration"
            ],
            cta: "Start Pro Trial",
            popular: true
        },
        {
            name: "Enterprise",
            price: "Custom",
            period: "contact sales",
            description: "For teams and organizations",
            features: [
                "Everything in Pro",
                "Unlimited storage",
                "Dedicated support",
                "SSO & SAML",
                "Advanced security",
                "Team management",
                "Custom integrations",
                "SLA guarantee"
            ],
            cta: "Contact Sales",
            popular: false
        }
    ];

    return (
        <div className="min-h-screen bg-linear-to-br from-[#0B0F14] via-[#111827] to-[#0B0F14] text-white">
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#0B0F14]/80 border-b border-white/5">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <Image
                            src={"/logo.svg"}
                            alt="logo"
                            width={30}
                            height={30}
                        />
                        <span className="text-xl font-bold">Codexia</span>
                    </div>
                    <nav className="hidden md:flex items-center space-x-8">
                        <a href="#features" className="text-[#9CA3AF] hover:text-[#E5E7EB] transition-colors">Features</a>
                        <a href="#workflow" className="text-[#9CA3AF] hover:text-[#E5E7EB] transition-colors">How It Works</a>
                        <a href="#pricing" className="text-[#9CA3AF] hover:text-[#E5E7EB] transition-colors">Pricing</a>
                        <a href="#docs" className="text-[#9CA3AF] hover:text-[#E5E7EB] transition-colors">Docs</a>
                        <Button className="bg-linear-to-r from-[#FF6B2C] to-[#F97316] text-white hover:opacity-90 transition-opacity shadow-lg shadow-[#FF6B2C]/20">
                            Launch Editor
                        </Button>
                    </nav>
                </div>
            </header>

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center max-w-4xl mx-auto space-y-8">
                        <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
                            <Zap className="w-4 h-4 text-[#FF6B2C]" />
                            <span className="text-sm text-[#9CA3AF]">AI-Powered Development Platform</span>
                        </div>

                        <h1 className="text-6xl md:text-7xl font-bold leading-tight">
                            The AI Code Editor
                            <br />
                            <span className="bg-linear-to-r from-[#FF6B2C] via-[#F97316] to-[#FF6B2C] bg-clip-text text-transparent">
                                That Builds With You
                            </span>
                        </h1>

                        <p className="text-xl text-[#9CA3AF] max-w-3xl mx-auto leading-relaxed">
                            Codexia is a web-based AI-powered coding environment with real-time preview
                            and GitHub integration — build faster, smarter, and without setup.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                            <Button
                                className="bg-linear-to-r from-[#FF6B2C] to-[#F97316] text-white px-8 py-6 text-lg hover:opacity-90 transition-all shadow-2xl shadow-[#FF6B2C]/30 hover:shadow-[#FF6B2C]/50 hover:scale-105"
                            >
                                <Play className="w-5 h-5 mr-2" />
                                Start Coding Free
                            </Button>
                            <Button
                                variant="outline"
                                className="px-8 py-6 text-lg border-white/20 text-white hover:bg-white/5 transition-all"
                            >
                                View Demo
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>
                        </div>
                    </div>

                    {/* Product Mockup Placeholder */}
                    <div className="mt-20 relative">
                        <div className="absolute inset-0 bg-linear-to-r from-[#FF6B2C]/20 via-[#F97316]/20 to-[#FF6B2C]/20 blur-3xl" />
                        <div className="relative backdrop-blur-xl bg-[#0B0F14]/40 rounded-2xl border border-white/10 p-8 shadow-2xl">
                            <div className="grid grid-cols-3 gap-4">
                                {/* File Tree */}
                                <div className="bg-[#111827]/80 rounded-xl p-6 border border-white/5">
                                    <div className="flex items-center space-x-2 mb-4">
                                        <FileCode className="w-4 h-4 text-[#FF6B2C]" />
                                        <span className="text-sm text-[#9CA3AF]">Files</span>
                                    </div>
                                    <div className="space-y-2 text-sm text-[#9CA3AF]">
                                        <div className="flex items-center space-x-2">
                                            <div className="w-2 h-2 bg-[#FF6B2C] rounded-sm" />
                                            <span>src/</span>
                                        </div>
                                        <div className="flex items-center space-x-2 pl-4">
                                            <div className="w-2 h-2 bg-blue-500 rounded-sm" />
                                            <span>App.jsx</span>
                                        </div>
                                        <div className="flex items-center space-x-2 pl-4">
                                            <div className="w-2 h-2 bg-green-500 rounded-sm" />
                                            <span>index.css</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Code Editor */}
                                <div className="bg-[#111827]/80 rounded-xl p-6 border border-white/5">
                                    <div className="flex items-center space-x-2 mb-4">
                                        <Code2 className="w-4 h-4 text-[#FF6B2C]" />
                                        <span className="text-sm text-[#9CA3AF]">Editor</span>
                                    </div>
                                    <div className="space-y-1 font-mono text-xs text-[#9CA3AF]">
                                        <div><span className="text-purple-400">import</span> React from &apos;react&apos;;</div>
                                        <div><span className="text-purple-400">function</span> <span className="text-blue-400">App</span>() {'{'}</div>
                                        <div className="pl-4"><span className="text-purple-400">return</span> {'<div>Hello</div>'}</div>
                                        <div>{'}'}</div>
                                    </div>
                                </div>

                                {/* Preview */}
                                <div className="bg-[#111827]/80 rounded-xl p-6 border border-white/5">
                                    <div className="flex items-center space-x-2 mb-4">
                                        <Eye className="w-4 h-4 text-[#FF6B2C]" />
                                        <span className="text-sm text-[#9CA3AF]">Preview</span>
                                    </div>
                                    <div className="flex items-center justify-center h-20 bg-white/5 rounded-lg">
                                        <span className="text-sm text-[#9CA3AF]">Live Output</span>
                                    </div>
                                </div>
                            </div>

                            {/* AI Chat Panel */}
                            <div className="mt-4 bg-[#111827]/80 rounded-xl p-6 border border-white/5">
                                <div className="flex items-center space-x-2 mb-3">
                                    <Sparkles className="w-4 h-4 text-[#FF6B2C]" />
                                    <span className="text-sm text-[#9CA3AF]">AI Assistant</span>
                                </div>
                                <div className="flex items-center space-x-2 bg-white/5 rounded-lg px-4 py-3">
                                    <span className="text-sm text-[#9CA3AF]">Ask Codexia anything...</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Section */}
            <section className="py-12 px-6 border-y border-white/5">
                <div className="max-w-7xl mx-auto">
                    <p className="text-center text-[#9CA3AF] text-sm mb-8">Trusted by developers worldwide</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-4xl md:text-5xl font-bold bg-linear-to-r from-[#FF6B2C] to-[#F97316] bg-clip-text text-transparent mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-[#9CA3AF]">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            Everything You Need to
                            <span className="bg-linear-to-r from-[#FF6B2C] to-[#F97316] bg-clip-text text-transparent"> Ship Faster</span>
                        </h2>
                        <p className="text-xl text-[#9CA3AF] max-w-2xl mx-auto">
                            A complete development environment powered by AI, running entirely in your browser
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {features.map((feature, index) => (
                            <Card
                                key={index}
                                className="group bg-linear-to-br from-white/5 to-white/0 backdrop-blur-xl border-white/10 p-8 hover:border-[#FF6B2C]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#FF6B2C]/10 hover:scale-105"
                            >
                                <div className="w-12 h-12 bg-linear-to-br from-[#FF6B2C] to-[#F97316] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-[#FF6B2C]/30">
                                    <feature.icon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold mb-3 text-[#E5E7EB]">{feature.title}</h3>
                                <p className="text-[#9CA3AF] leading-relaxed">{feature.description}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Workflow Section */}
            <section id="workflow" className="py-20 px-6 bg-linear-to-b from-transparent via-white/2 to-transparent">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h2>
                        <p className="text-xl text-[#9CA3AF]">Get from idea to deployment in minutes</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                        {workflow.map((item, index) => (
                            <div key={index} className="relative h-full">
                                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-[#FF6B2C]/30 transition-all h-full min-h-[280px] flex flex-col">
                                    <div className="text-6xl font-bold text-[#FF6B2C]/20 mb-4">{item.step}</div>
                                    <h3 className="text-xl font-bold mb-3 text-[#E5E7EB]">{item.title}</h3>
                                    <p className="text-[#9CA3AF] grow">{item.description}</p>
                                </div>
                                {index < workflow.length - 1 && (
                                    <div className="hidden lg:flex absolute top-1/2 left-full items-center justify-center w-12 -translate-y-1/2 z-10">
                                        <ArrowRight className="w-6 h-6 text-[#FF6B2C]/30" />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Developer-Focused Section */}
            <section className="py-20 px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="bg-linear-to-br from-white/5 to-white/0 backdrop-blur-xl border border-white/10 rounded-3xl p-12 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF6B2C]/10 rounded-full blur-3xl" />
                        <div className="relative">
                            <div className="flex items-center space-x-3 mb-6">
                                <Keyboard className="w-8 h-8 text-[#FF6B2C]" />
                                <h2 className="text-3xl md:text-4xl font-bold">Built for Developers Who Ship</h2>
                            </div>
                            <p className="text-xl text-[#9CA3AF] mb-8">
                                Experience the power of a professional IDE, enhanced with AI, running entirely in your browser
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {developerFeatures.map((feature, index) => (
                                    <div key={index} className="flex items-center space-x-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#FF6B2C] shrink-0" />
                                        <span className="text-[#E5E7EB]">{feature}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-10 flex items-center space-x-8">
                                <div className="flex items-center space-x-2">
                                    <Gauge className="w-5 h-5 text-[#FF6B2C]" />
                                    <span className="text-[#9CA3AF]">Sub-second startup</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Lock className="w-5 h-5 text-[#FF6B2C]" />
                                    <span className="text-[#9CA3AF]">Isolated environments</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            Simple, Transparent
                            <span className="bg-linear-to-r from-[#FF6B2C] to-[#F97316] bg-clip-text text-transparent"> Pricing</span>
                        </h2>
                        <p className="text-xl text-[#9CA3AF] max-w-2xl mx-auto">
                            Choose the plan that fits your needs. All plans include core features.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {pricingTiers.map((tier, index) => (
                            <Card
                                key={index}
                                className={`relative bg-linear-to-br backdrop-blur-xl p-8 hover:scale-105 transition-all duration-300 ${tier.popular
                                    ? 'from-white/10 to-white/5 border-[#FF6B2C] shadow-2xl shadow-[#FF6B2C]/20'
                                    : 'from-white/5 to-white/0 border-white/10 hover:border-[#FF6B2C]/30'
                                    }`}
                            >
                                {tier.popular && (
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                        <div className="bg-linear-to-r from-[#FF6B2C] to-[#F97316] text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center space-x-1 shadow-lg shadow-[#FF6B2C]/30">
                                            <Star className="w-3 h-3 fill-current" />
                                            <span>Most Popular</span>
                                        </div>
                                    </div>
                                )}

                                <div className="mb-6">
                                    <h3 className="text-2xl font-bold text-[#E5E7EB] mb-2">{tier.name}</h3>
                                    <p className="text-[#9CA3AF] text-sm">{tier.description}</p>
                                </div>

                                <div className="mb-8">
                                    <div className="flex items-baseline">
                                        <span className="text-5xl font-bold text-white">{tier.price}</span>
                                        {tier.price !== "Custom" && (
                                            <span className="text-[#9CA3AF] ml-2">/{tier.period}</span>
                                        )}
                                    </div>
                                    {tier.price === "Custom" && (
                                        <span className="text-[#9CA3AF] text-sm">{tier.period}</span>
                                    )}
                                </div>

                                <Button
                                    className={`w-full py-6 text-base font-semibold mb-8 transition-all ${tier.popular
                                        ? 'bg-linear-to-r from-[#FF6B2C] to-[#F97316] text-white hover:opacity-90 shadow-lg shadow-[#FF6B2C]/30 hover:shadow-[#FF6B2C]/50'
                                        : 'bg-white/5 text-white border border-white/20 hover:bg-white/10 hover:border-[#FF6B2C]/50'
                                        }`}
                                >
                                    {tier.cta}
                                </Button>

                                <div className="space-y-4">
                                    <p className="text-sm font-semibold text-[#E5E7EB] mb-4">What&apos;s included:</p>
                                    {tier.features.map((feature, featureIndex) => (
                                        <div key={featureIndex} className="flex items-start space-x-3">
                                            <Check className="w-5 h-5 text-[#FF6B2C] shrink-0 mt-0.5" />
                                            <span className="text-[#9CA3AF]">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </Card>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <p className="text-[#9CA3AF]">
                            All plans include 14-day free trial. No credit card required.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="relative">
                        <div className="absolute inset-0 bg-linear-to-r from-[#FF6B2C]/20 via-[#F97316]/20 to-[#FF6B2C]/20 blur-3xl" />
                        <div className="relative bg-linear-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-12">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                Start Building With Codexia Today
                            </h2>
                            <p className="text-xl text-[#9CA3AF] mb-8 max-w-2xl mx-auto">
                                Join thousands of developers building faster with AI-powered coding
                            </p>
                            <Button
                                className="bg-linear-to-r from-[#FF6B2C] to-[#F97316] text-white px-10 py-6 text-lg hover:opacity-90 transition-all shadow-2xl shadow-[#FF6B2C]/30 hover:shadow-[#FF6B2C]/50 hover:scale-105"
                            >
                                <Zap className="w-5 h-5 mr-2" />
                                Launch Editor
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-white/5 py-12 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
                        <div className="flex items-center space-x-2">
                            <Image
                                src={"/logo.svg"}
                                alt="logo"
                                width={25}
                                height={25}
                            />
                            <span className="text-xl font-bold">Codexia</span>
                        </div>

                        <div className="flex items-center space-x-8 text-[#9CA3AF]">
                            <a href="#docs" className="hover:text-[#E5E7EB] transition-colors">Docs</a>
                            <a href="#github" className="hover:text-[#E5E7EB] transition-colors">GitHub</a>
                            <a href="#pricing" className="hover:text-[#E5E7EB] transition-colors">Pricing</a>
                            <a href="#blog" className="hover:text-[#E5E7EB] transition-colors">Blog</a>
                            <a href="#support" className="hover:text-[#E5E7EB] transition-colors">Support</a>
                        </div>

                        <div className="flex items-center space-x-4">
                            <a href="#github" className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-all">
                                <Github className="w-5 h-5" />
                            </a>
                            <a href="#twitter" className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-all">
                                <GitBranch className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    <div className="mt-8 pt-8 border-t border-white/5 text-center text-[#9CA3AF] text-sm">
                        <p>© 2026 Codexia. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
