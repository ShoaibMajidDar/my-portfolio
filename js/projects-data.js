/**
 * Project data — case studies of work done at CodefyU and Graphic Weave.
 * Shared by portfolio.html (index) and project.html (detail view).
 *
 * Images: drop files into the images/ folder, then list them in a project's
 * `images` array. Plain strings work, or use { src, caption } for a caption:
 *   images: ['images/quoting-01.png', { src: 'images/quoting-02.png', caption: 'Live quote view' }]
 * The Figures section only renders when the array has entries.
 */

const PROJECTS = [
  {
    id: 'quoting-platform',
    title: 'Installation Quoting Platform',
    company: 'CodefyU',
    role: 'Data Scientist',
    period: '2025 – Present',
    year: '2025',
    summary: 'Full-stack quoting application with real-time generation over WebSockets, grounded by a hybrid-search RAG pipeline.',
    overview: [
      'A full-stack installation quoting application built on FastAPI and React, with WebSocket support so quotes generate in real time and the frontend updates live as results stream in.',
      'Quoting accuracy is grounded by a retrieval-augmented generation system using Qdrant as the vector store: complete document ingestion, chunking, and embedding pipelines, with hybrid search that combines semantic retrieval and BM25 for better precision.'
    ],
    highlights: [
      'FastAPI backend and React frontend connected over WebSockets for real-time quote generation and live UI updates.',
      'RAG system on Qdrant with full document ingestion, chunking, and embedding pipelines.',
      'Hybrid retrieval combining semantic vector search with BM25 keyword scoring for improved accuracy.'
    ],
    tags: ['FastAPI', 'React', 'WebSockets', 'Qdrant', 'RAG'],
    images: [] // e.g. 'images/quoting-01.png'
  },
  {
    id: 'formio-field-data',
    title: 'Form.io Field Data Suite',
    company: 'CodefyU',
    role: 'Data Scientist',
    period: '2025 – Present',
    year: '2025',
    summary: 'Form.io forms with custom components and authentication, rendered inside a mobile app, plus LLM-vision APIs that read uploaded images in real time.',
    overview: [
      'Forms built in Form.io with custom components and authentication, rendered inside a mobile app so field teams can collect structured data on site.',
      'Companion APIs connect to Form.io and extract details from user-uploaded images in real time using LLM-based vision processing, turning photos into structured form data without manual entry.'
    ],
    highlights: [
      'Form.io forms with custom components and authentication for field data collection.',
      'Forms rendered inside a mobile app for on-site use.',
      'APIs that extract details from user-uploaded images in real time via LLM-based vision processing.'
    ],
    tags: ['Form.io', 'LLM Vision', 'Mobile', 'REST APIs'],
    images: [] // e.g. 'images/formio-01.png'
  },
  {
    id: 'llm-extraction-pipeline',
    title: 'LLM Document Extraction Pipeline',
    company: 'CodefyU',
    role: 'Data Scientist',
    period: '2025 – Present',
    year: '2025',
    summary: 'Asynchronous LLM-powered Excel extraction: jobs flow through RabbitMQ and are handled by scalable Python workers.',
    overview: [
      'An automated extraction pipeline that uses LLMs to parse and interpret structured data from Excel files, turning messy spreadsheets into clean, usable records.',
      'Jobs flow through a RabbitMQ message queue and are handled by Python workers, so processing scales asynchronously instead of blocking on each document.'
    ],
    highlights: [
      'LLM-based parsing and interpretation of structured Excel data.',
      'RabbitMQ message queue with Python workers for scalable asynchronous job handling.'
    ],
    tags: ['LLMs', 'RabbitMQ', 'Python', 'Excel'],
    images: []
  },
  {
    id: 'technician-field-app',
    title: 'Technician Field App',
    company: 'CodefyU',
    role: 'Data Scientist',
    period: '2025 – Present',
    year: '2025',
    summary: 'AppSheet app where technicians pick a job on a map and log completed work straight into Airtable.',
    overview: [
      'An AppSheet app built for field technicians: jobs appear on a map, the technician selects the one they\'re at, and records what they\'ve done on site. The app reads from and writes back to Airtable, so the office sees field updates as they land.',
      'It also runs image OCR, extracting text automatically from photos technicians upload in the field, so paperwork turns into structured data without anyone retyping it.'
    ],
    highlights: [
      'Map-based job selection: technicians pick their job from a map and log completed work on site.',
      'Two-way Airtable connection for reading and writing operational data.',
      'Image OCR for extracting text from photos uploaded in the field.'
    ],
    tags: ['AppSheet', 'Airtable', 'Maps', 'OCR'],
    images: [] // e.g. 'images/technician-app-01.png'
  },
  {
    id: 'workflow-automations',
    title: 'Workflow Automation Suite',
    company: 'CodefyU',
    role: 'Data Scientist',
    period: '2025 – Present',
    year: '2025',
    summary: 'Email-triggered N8N and Zapier automations that read mail, summarize Google Drive files into new Docs, and scrape housing sites to match and reply with the right property.',
    overview: [
      'A suite of automations built in N8N and Zapier that runs on email triggers: workflows read incoming mail, pull the relevant data from Google Drive, summarize it, and write the results into newly created Google Docs, with no human in the loop.',
      'The most involved one is a housing-search automation. Triggered by an incoming email, it reads the request, scrapes housing websites like Airbnb and Furnished Finder, finds the exact property matching what the user needs, and emails them back with the result.'
    ],
    highlights: [
      'Email-triggered workflows that read incoming mail and act on it automatically.',
      'Google Drive integration that reads files, summarizes their contents, and creates new Google Docs with the output.',
      'Housing-search automation that scrapes listings from sites like Airbnb and Furnished Finder.',
      'Matches the exact property to the user\'s requirements and emails them back automatically.'
    ],
    tags: ['N8N', 'Zapier', 'Gmail', 'Google Drive', 'Web Scraping'],
    images: [] // e.g. 'images/automations-01.png'
  },
  {
    id: 'aws-data-infra',
    title: 'AWS Data Infrastructure',
    company: 'CodefyU',
    role: 'Data Scientist',
    period: '2025 – Present',
    year: '2025',
    summary: 'Zero-ETL analytics from RDS to Redshift and proactive cost guardrails with AWS Budgets.',
    overview: [
      'The data backbone: AWS RDS (PostgreSQL) connected to Redshift through Zero-ETL integration, enabling near real-time analytics without maintaining traditional ETL infrastructure.',
      'Cloud spend is managed proactively through AWS Budgets, with automated thresholds and alert systems that track infrastructure costs and keep resource allocation optimized.'
    ],
    highlights: [
      'AWS RDS (PostgreSQL) to Redshift Zero-ETL integration for near real-time analytics.',
      'AWS Budgets with automated thresholds and alert systems for infrastructure cost control.'
    ],
    tags: ['AWS', 'Redshift', 'Zero-ETL', 'AWS Budgets'],
    images: []
  },
  {
    id: 'pid-digitization',
    title: 'P&ID Digitization for HAZOP',
    company: 'Graphic Weave',
    role: 'Data Scientist',
    period: '2022 – 2024',
    year: '2022–24',
    summary: 'End-to-end computer-vision system that digitizes piping & instrumentation diagrams: YOLO detection at 91% accuracy, OCR, and a custom pixel-traversal linker.',
    overview: [
      'An end-to-end system that digitizes piping and instrumentation diagrams (P&IDs) for HAZOP safety analysis. YOLO handles symbol detection at 91% accuracy, ResNet and ConvNeXt models classify detected components, and OCR extracts the surrounding text.',
      'A custom pixel-traversal algorithm follows the drawn lines to map which equipment connects to which instruments, turning a static engineering drawing into a structured, queryable graph. Models were deployed behind a Flask backend with MongoDB and MinIO handling metadata and image storage.'
    ],
    highlights: [
      'YOLO-based symbol detection at 91% accuracy.',
      'ResNet / ConvNeXt classification and OCR for text extraction.',
      'Custom pixel-traversal algorithm mapping equipment-instrument links.',
      'Flask deployment with MongoDB and MinIO for metadata and image storage.'
    ],
    tags: ['YOLO', 'ResNet', 'ConvNeXt', 'OCR', 'Flask'],
    images: [] // e.g. 'images/pid-01.png'
  },
  {
    id: 'scenario-generator',
    title: 'Emergency Scenario Generator',
    company: 'Graphic Weave',
    role: 'Data Scientist',
    period: '2022 – 2024',
    year: '2022–24',
    summary: 'FastAPI microservice that auto-generates emergency scenarios from facility documents with LLMs, integrated into a NestJS backend.',
    overview: [
      'A FastAPI microservice that uses LLMs to auto-generate emergency scenarios from facility documents and produce detailed performance reports, turning static documentation into actionable safety planning material.',
      'The Python microservice was integrated with a NestJS backend, implementing REST APIs, WebSocket support, and scheduled tasks via cron jobs so generated scenarios flow into the wider product.'
    ],
    highlights: [
      'LLM-driven generation of emergency scenarios from facility documents.',
      'Detailed performance report generation.',
      'Integration with a NestJS backend: REST APIs, WebSockets, and cron-scheduled tasks.'
    ],
    tags: ['FastAPI', 'LLMs', 'NestJS', 'WebSockets'],
    images: []
  },
  {
    id: 'nl-to-sql',
    title: 'NL-to-SQL Analytics Agent',
    company: 'Graphic Weave',
    role: 'Data Scientist',
    period: '2022 – 2024',
    year: '2022–24',
    summary: 'LLM-driven natural-language-to-SQL agent with guardrails against data manipulation and dynamic tabular, textual, or graphical output.',
    overview: [
      'An LLM-driven agent that translates natural-language questions into SQL, with guardrails that block data-manipulation queries so users can only read, never write.',
      'The agent inspects query intent and responds in the most useful shape: dynamic tabular results, plain-text answers, or generated charts. Non-technical users get analytics without writing a line of SQL.'
    ],
    highlights: [
      'Natural-language-to-SQL translation driven by LLMs.',
      'Guardrails preventing data-manipulation queries.',
      'Dynamic tabular, textual, and graphical outputs based on query intent.'
    ],
    tags: ['LLMs', 'SQL', 'Guardrails', 'Analytics'],
    images: []
  },
  {
    id: 'spicedb-rebac',
    title: 'SpiceDB ReBAC Authorization',
    company: 'Graphic Weave',
    role: 'Data Scientist',
    period: '2022 – 2024',
    year: '2022–24',
    summary: 'Zanzibar-style relationship-based access control enforced across services with SpiceDB.',
    overview: [
      'Authorization for a multi-service product, implemented Zanzibar-style with SpiceDB: permissions are modeled as relationships between users, resources, and roles rather than static rules.',
      'The result is Relationship-Based Access Control (ReBAC) enforced consistently across services: fine-grained, auditable, and able to answer "who can do what" at any point in the graph.'
    ],
    highlights: [
      'Zanzibar-style authorization model built on SpiceDB.',
      'Relationship-Based Access Control (ReBAC) enforced across services.'
    ],
    tags: ['SpiceDB', 'ReBAC', 'Authorization', 'Microservices'],
    images: []
  }
];

const getProjectById = (id) => PROJECTS.find((p) => p.id === id);
const getProjectIndex = (id) => PROJECTS.findIndex((p) => p.id === id);
const pad2 = (n) => String(n).padStart(2, '0');
