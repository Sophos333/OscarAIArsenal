# AI Arsenal

AI Arsenal Enterprise is an applied-AI portfolio built by Oscar Holguin-Silva.

The site presents demonstrations and project pages for systems focused on contract review, governed analytics, role-based information access, spreadsheet analysis, healthcare decision support, and workflow automation.

The portfolio emphasizes evidence, traceability, bounded system behavior, and human review where decisions carry risk.

---

## Live Site

https://aiarsenalenterprise.com

---

## Featured Systems

### AI Contract Reviewer (AICR)

AICR provides a structured first pass over PDF and TXT agreements.

Current demonstrated capabilities include:

- Extracting key contract fields
- Flagging possible risks
- Showing supporting contract text for reviewer inspection
- Comparing two agreements
- Exporting structured review results

AICR supports human review. It does not provide legal advice or decide whether a contract should be signed.

### Cerebro

Cerebro is a local-first, role-based knowledge prototype.

Its current demo checks document access rules against four roles:

- Employee
- Manager
- HR
- Executive

A permitted role can view authorized information. An unauthorized role receives an access-denied response.

### Aegis

Aegis is a governance-first decision-intelligence system built around constrained, read-only analytics.

Current implemented controls include:

- Approved analytical templates
- SELECT-only SQL
- Queries restricted to a single governed SQL view
- Write operations blocked
- Free-form SQL blocked
- Schema crawling blocked
- Multi-statement execution blocked
- Execution details recorded for audit review

### Excel Whisperer

Excel Whisperer demonstrates Python-driven spreadsheet analysis and reporting workflows intended to reduce repetitive manual analysis.

### ReadmitGuard

ReadmitGuard demonstrates patient readmission-risk estimation through both manual-entry and CSV batch workflows.

Its outputs are decision support and do not replace clinical judgment.

---

## Sophos System Guide

Sophos is the embedded guide used throughout the portfolio.

It uses deterministic intent and keyword matching against an approved answer set rather than presenting itself as an unrestricted general-purpose AI assistant.

Sophos can:

- Explain AI Arsenal systems
- Describe verified product capabilities
- Answer common questions about Oscar and AI Arsenal
- Suggest relevant follow-up questions
- Link visitors to project pages, demonstrations, and contact options

---

## Portfolio Stack

This website is built with:

- Astro
- Tailwind CSS
- TypeScript / JavaScript
- Static site generation
- GitHub Pages deployment

The systems demonstrated in the portfolio use additional technologies such as Python, SQL, Streamlit, FastAPI, analytics, automation, and machine-learning tooling depending on the project.

---

## Repository Structure

Key portfolio files include:

```text
src/pages/index.astro
src/pages/projects/aicr.astro
src/pages/projects/cerebro.astro
src/pages/projects/aegis.astro
src/components/SophosAssistant.astro
src/data/sophosKnowledge.ts
src/layouts/Layout.astro
src/styles/global.css
```

---

## Local Development

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build the static site:

```bash
npm run build
```

The local Astro development server uses port `4321` by default.

---

## Contact

Visit the live site and use the Contact section to reach AI Arsenal Enterprise.

---

“Here am I. Send me.” — Isaiah 6:8
