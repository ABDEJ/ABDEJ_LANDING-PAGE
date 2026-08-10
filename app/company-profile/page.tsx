"use client";

import Link from "next/link";
import { Download, ExternalLink } from "lucide-react";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

const profilePdfUrl = "/profile/abdej-company-profile.pdf";

export default function CompanyProfilePage() {
  return (
    <main className="bg-dark text-white overflow-hidden">
      <Navbar />
      <section
        className="profile-section min-h-screen py-10 sm:py-12"
        style={{
          backgroundColor: "var(--section-bg)",
          color: "var(--section-text)",
        }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p
                className="text-sm font-semibold uppercase"
                style={{ color: "var(--accent)" }}
              >
                Company Profile
              </p>
              <h1 className="mt-2 text-3xl font-bold sm:text-4xl">
                ABDEJ Nigeria Limited
              </h1>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={profilePdfUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border px-5 text-sm font-semibold transition hover:opacity-80"
                style={{
                  borderColor: "var(--accent)",
                  color: "var(--section-text)",
                }}
              >
                Open PDF
                <ExternalLink className="h-4 w-4" />
              </a>
              <a
                href={profilePdfUrl}
                download="ABDEJ-Company-Profile.pdf"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition hover:opacity-90"
                style={{
                  backgroundColor: "var(--button-bg)",
                  color: "var(--button-text)",
                }}
              >
                Download
                <Download className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div
            className="overflow-hidden rounded-[8px] border"
            style={{ borderColor: "var(--border-color)" }}
          >
            <iframe
              src={profilePdfUrl}
              title="ABDEJ Nigeria Limited company profile"
              className="h-[72vh] w-full bg-white"
            />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
