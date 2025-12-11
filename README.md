# Oscar AI Arsenal

A private, on-prem AI arsenal built with **Blazor Server** — featuring:

- **AICR – AI Contract Reviewer**
- **Excel Whisperer**
- **ReadmitGuard – Hospital Readmission Predictor**

Designed for teams that take missions seriously: security first, clarity over hype, and human judgment in the loop.

---

## 🎯 Vision

Most AI tools are:

- Cloud-dependent  
- Opaque  
- Hard to trust with sensitive data  

**Oscar AI Arsenal** takes the opposite approach:

- **Local-only or on-prem** by design  
- **Clear boundaries** around data and model behavior  
- **Screens built for decisions**, not just “wow” moments  

This repo hosts a Blazor Server app that acts as a unified landing page and demo shell for multiple AI tools.

---

## 🧰 Apps in the Arsenal

### 1. AICR – AI Contract Reviewer

AI-assisted contract review without sending a single token to the cloud.

- Drag-and-drop PDF / TXT contracts into a **local analyzer**
- Extract key fields: parties, term, governing law, etc.
- Surface **risky or missing clauses** with plain-language explanations
- Export structured results for legal review or record-keeping

> Ideal for NDAs, vendor agreements, renewals, and policy reviews.

---

### 2. Excel Whisperer

From messy spreadsheets to clear, reusable reports.

- Upload CSV / Excel files into a **local-only workflow**
- Clean headers, normalize values, and flag obvious data issues
- Generate summaries, pivots, and KPIs with guided steps
- Export refreshed sheets or ready-to-send report packs

> Ideal for operations, finance, recurring reporting, and ad-hoc dashboards.

---

### 3. ReadmitGuard – Hospital Readmission Predictor

A privacy-first **readmission risk explorer** for hospitals and care teams.

#### Manual (single-patient) mode

- Enter a few clinical features (age, LOS, prior visits, procedures, ED flag)
- View **instant readmission risk** with a tunable decision threshold
- Inspect **ROC / PR curves**, **reliability (calibration)**, and
  **SHAP explanations** for each prediction

> Built for decision support, not diagnosis — designed to help clinicians ask better questions, not replace them.

#### CSV / cohort mode

- Drag-and-drop a CSV file of patient records
- Get instant summaries of **records, average scores, and key fields**
- View **Top-N highest-risk patients** and cohort summary statistics
- Export top-risk slices or full datasets for QA, quality, or care-pathway work

---

## 🏗️ Tech Stack

- **Frontend / UI:** Blazor Server (.NET 8)
- **Styling:** Custom CSS + dark theme
- **Runtime:** .NET 8 SDK
- **Media:** Local screenshots & demo videos under `wwwroot/Images` and `wwwroot/videos`

This project is structured as a standard Blazor Server app with a single project:

```text
OscarAIDemo/
  Components/
  Properties/
  wwwroot/
    Images/
      AICR/
      ExcelWhisperer/
      ReadmitGuard/
      cross-badge.png
      warrior-emblem.png
    videos/
      aicr-contract-reader.mp4
      excel-whisperer-demo.mp4
      readmitguard-manual-demo.mp4
      readmitguard-csv-demo.mp4
  Pages/
  app.css
  Program.cs
  OscarAIDemo.csproj
