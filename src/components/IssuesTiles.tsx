"use client";

import { useState, useRef, useEffect } from "react";
import {
  DollarSign,
  Shield,
  BookOpen,
  Briefcase,
  Star,
  ClipboardCheck,
} from "lucide-react";

const ISSUES = [
  {
    id: "veterans",
    title: "Veterans",
    short: "Ensure veterans receive the healthcare and benefits they deserve.",
    details: `Accountability, access, and respect for those who served

Our obligation to veterans does not end when the uniform comes off. It continues through access to timely care, earned benefits, and real accountability within the system.

As a U.S. Army combat veteran, I understand the cost of service and the frustration many veterans face when navigating federal systems that should work better. Veterans deserve responsiveness, transparency, and leadership that takes their concerns seriously.

  I will work to ensure the Department of Veterans Affairs is accountable, veterans receive timely care, and families are treated with the respect they have earned through service.`,
    Icon: Star,
  },
  {
    id: "economic-growth",
    title: "Economic Growth",
    short: "Cut red tape and expand access to capital for local businesses.",
    details: `Creating jobs and building infrastructure for the future.

Central Texas is positioned to lead in the next generation of infrastructure and energy driven growth. That means attracting investment that creates skilled jobs and long term opportunity for local communities.

I support responsible development of infrastructure that powers growth, including data centers and next generation nuclear energy, while ensuring projects are safe, well regulated, and beneficial to the communities they serve.

Economic growth should create real jobs, strengthen the local workforce, and keep Texas competitive without sacrificing safety or accountability.`,
    Icon: Briefcase,
  },
  {
    id: "lowering-costs",
    title: "Lowering Costs",
    short: "Reduce healthcare and prescription costs, and support working families.",
    details: `Reducing the pressure on working families

Families across Central Texas are feeling the pressure of rising costs in everydayday life, from groceries and gas to healthcare and housing.

Too often, decisions made in Washington increase costs without fully considering the impact on working families and taxpayers. Lowering costs requires leaders who show up, ask hard questions, and push back on policies that make life more expensive.

I believe Congress should focus on responsible decision making that respects taxpayers, avoids unnecessary mandates, and helps families keep more of what they earn.`,
    Icon: DollarSign,
  },
  {
    id: "public-safety",
    title: "Public Safety",
    short: "Support first responders and invest in prevention and mental health.",
    details: `Keeping our communities safe and strong

Public safety is one of the reasons families choose to live and raise their children in Central Texas. Safe neighborhoods do not happen by accident. They are built through responsibility, presence, and respect for the people who protect our communities.

I believe public safety starts with leaders who take the job seriously and support law enforcement, first responders, and local officials who work every day to keep our neighborhoods secure. It also means paying attention to what works, addressing problems early, and avoiding policies that undermine order or accountability. Congress has a responsibility to ensure federal policies and funding support public safety, not undermine it.

As someone who has served and worked inside government, I believe public safety requires leadership that shows up, listens, and stands behind the professionals who do the work.`,
    Icon: Shield,
  },
  {
    id: "accountability",
    title: "Accountability",
    short: "Demand transparency, end waste, and return power to the people.",
    details: `Oversight, transparency, and leadership that answers to the people

Accountability is not about politics. It is about results.

Too often, federal agencies operate without meaningful oversight, leaving families, veterans, and small businesses stuck navigating systems that do not work the way they should. Congress has a responsibility to show up, understand these systems, and ensure they serve the public effectively.

I believe accountability means transparency, informed oversight, and leadership that is willing to ask hard questions. That includes understanding how emerging technologies and complex federal systems are shaping decisions, costs, and outcomes for the people we serve.

As a public servant who has worked inside government, I know accountability only works when leaders are engaged, informed, and willing to follow through.`,
    Icon: ClipboardCheck,
  },
  {
    id: "education",
    title: "Education",
    short: "Prepare students with strong funding and modern workforce training.",
    details: `Preparing students for the future

Education should prepare students with strong fundamentals and the skills they need to succeed in college, the workforce, or military service.

I believe families and local communities know their students best. The federal government should support education through responsible funding and accountability, while respecting local decision-making and avoiding one-size-fits-all mandates.

A strong education system strengthens our workforce, supports economic opportunity, and helps ensure the next generation is prepared to lead.`,
    Icon: BookOpen,
  },
];

export default function IssuesTiles() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const lastFocusRef = useRef<HTMLElement | null>(null);

  const activeIssue = ISSUES.find((i) => i.id === activeId) ?? null;

  useEffect(() => {
    if (!activeIssue) return;

    try {
      lastFocusRef.current = document.activeElement as HTMLElement | null;
    } catch (e) {
      lastFocusRef.current = null;
    }

    overlayRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveId(null);
      }
    };

    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      try {
        lastFocusRef.current?.focus();
      } catch (e) {
        /* ignore focus restore errors */
      }
    };
  }, [activeIssue]);

  useEffect(() => {
    const applyHash = () => {
      try {
        const h = window.location.hash.replace(/^#/, "");
        if (h) {
          const match = ISSUES.find((i) => i.id === h);
          if (match) setActiveId(h);
        }
      } catch (e) {
        /* ignore */
      }
    };

    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, []);

  return (
    <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mb-10">
      {ISSUES.map((issue) => (
        <div
          key={issue.id}
          className="relative block text-left bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-5 hover:shadow-lg transform hover:-translate-y-1 transition focus:outline-none focus:ring-0"
        >
          <div className="flex items-start space-x-3">
            <issue.Icon className="h-6 w-6 text-campaign-blue dark:text-white shrink-0" />
            <div>
              <h3 className="text-xl font-semibold text-campaign-blue dark:text-white">{issue.title}</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{issue.short}</p>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <button
              type="button"
              onClick={() => setActiveId(issue.id)}
              onMouseEnter={() => setActiveId(issue.id)}
              onMouseLeave={() => setActiveId((id) => (id === issue.id ? null : id))}
              onFocus={() => setActiveId(issue.id)}
              onBlur={() => setActiveId((id) => (id === issue.id ? null : id))}
              aria-describedby={`issue-tooltip-${issue.id}`}
              className="text-sm text-sky-700 dark:text-sky-300 font-medium"
            >
              Learn more
            </button>
          </div>
        </div>
      ))}

      {activeIssue && (
        <div
          ref={overlayRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby={`issue-title-${activeIssue.id}`}
          tabIndex={-1}
          data-no-focus-ring
          onClick={() => setActiveId(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 sm:p-6"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            onMouseEnter={() => setActiveId(activeIssue.id)}
            onMouseLeave={() => setActiveId((id) => (id === activeIssue.id ? null : id))}
            className="w-full max-w-2xl max-h-[90vh] bg-sky-50/95 dark:bg-sky-900/80 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between gap-4 px-6 py-4 border-b border-sky-200/50 dark:border-sky-700/50 shrink-0">
              <h3 id={`issue-title-${activeIssue.id}`} className="text-xl font-semibold text-campaign-blue dark:text-white">
                {activeIssue.title}
              </h3>
              <button
                onClick={() => setActiveId(null)}
                aria-label="Close details"
                className="inline-flex items-center justify-center h-8 w-8 rounded-md bg-white/70 dark:bg-gray-800/60 text-gray-700 dark:text-gray-200 hover:bg-white dark:hover:bg-gray-700 shrink-0"
              >
                ✕
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              <div className="whitespace-pre-line text-base text-gray-700 dark:text-gray-200">
                {activeIssue.details ?? activeIssue.short}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}