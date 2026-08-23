import { Card } from '../ui';
import { useStatus } from '../../contexts/StatusContext';

export function GCLicense() {
  const { status, toggle } = useStatus();

  const gcSteps = [
    {
      id: 'gc-determine',
      title: 'Residential General Contractor',
      description: 'Choose the Oregon CCB endorsement that matches the work and business you plan to perform.',
      details: 'Residential General Contractor is the endorsement to evaluate for this project. ORS 701.021(2) lists it as an appropriate endorsement for work connected with a residential structure. Oregon does not use a universal "Class B" general-contractor category.',
      resources: [
        { label: 'CCB License Categories', url: 'https://www.oregon.gov/ccb/Pages/CCB%20License.aspx#DoYouNeedALicense' },
        { label: 'Oregon Revised Statutes Chapter 701', url: 'https://www.oregonlegislature.gov/bills_laws/ors/ors701.html' },
        { label: 'Guide to Becoming a Licensed Contractor (PDF)', url: 'https://www.oregon.gov/ccb/Documents/Guide%20to%20becoming%20a%20lic%20contractor.pdf' }
      ]
    },
    {
      id: 'gc-requirements',
      title: 'Confirm License Path, Endorsement & RMI',
      description: 'Decide whether to use the owner-builder exemption or obtain a Residential General Contractor endorsement.',
      details: 'Class B General Contractor requires ONE of the following:\n\n1. EXPERIENCE REQUIREMENT:\n• 4+ years of general construction experience in any capacity (supervisor, manager, skilled worker, apprentice)\n• Must involve directing, managing, or performing construction work\n• Paid experience only (volunteer work does not count)\n• Can include: project management, supervision, skilled trades, apprenticeships\n\n2. APPRENTICESHIP ALTERNATIVE:\n• Valid BOLI (Bureau of Labor and Industries) registered apprenticeship (any trade)\n• + 2 years additional construction field experience\n\n3. TECHNICAL DEGREE ALTERNATIVE:\n• Associate degree or higher in construction, engineering, architecture, or related field\n• + 2 years construction field experience after degree\n\nDOCUMENTATION YOU\'LL NEED:\n• Detailed list of all construction projects (dates, locations, your role)\n• Employment verification from past employers (names, addresses, phone numbers)\n• Written references from 2-3 people who can verify your experience (supervisors, clients, colleagues)\n• If apprenticeship: BOLI apprenticeship certificate or proof of completion\n• If degree: Official transcript from college/university\n• Pay stubs, W-2s, or tax returns showing construction work income\n\nTIP: Start gathering these documents NOW. The CCB will ask for specifics about each project, including dollar amounts, project scope, and your exact responsibilities.',
      resources: [
        { label: 'Contractor Qualification Requirements', url: 'https://www.oregon.gov/ccb/Pages/CCB%20License.aspx#HowToGetALicense' },
        { label: 'Experience Documentation Guide', url: 'https://www.oregon.gov/ccb/Documents/Guide%20to%20becoming%20a%20lic%20contractor.pdf' },
        { label: 'Contact CCB to Verify Your Qualifications', url: 'https://www.oregon.gov/ccb/Pages/Contact-Us.aspx' }
      ]
    },
    {
      id: 'gc-education',
      title: 'Complete Pre-License Education',
      description: 'Complete the required 16-hour CCB-approved pre-license education before the exam.',
      details: 'COURSE REQUIREMENTS:\n• 3-hour "CCB Class" (Oregon construction law, regulations, and business practices)\n• Must be taken BEFORE you can sit for the exam\n• Must be taken through CCB-approved provider\n• Certificate of completion required for license application\n• Valid indefinitely (no expiration)\n\nCOURSE CONTENT COVERS:\n• Oregon CCB laws and administrative rules\n• Contractor licensing requirements and categories\n• Construction contract requirements and regulations\n• Consumer protection laws and requirements\n• Dispute resolution and complaint procedures\n• Insurance and bonding requirements\n• Workers compensation insurance requirements\n• Safety requirements and OSHA basics\n• Business practices and ethics\n\nFINDING AN APPROVED PROVIDER:\nThe CCB maintains an updated list of approved 3-hour class providers. Options include:\n\n1. LIVE IN-PERSON CLASSES:\n• Various providers offer in-person classes throughout Oregon\n• Check schedule for dates near you\n• Usually Saturday or weekday evening options\n• Bring photo ID, take notes, ask questions\n\n2. ONLINE CLASSES:\n• Many providers now offer live online instruction\n• Typically 2-3 hours of actual instruction spread over 1-2 sessions\n• Can be done from home\n• Requires internet connection and camera/microphone\n\n3. HYBRID/SELF-PACED OPTIONS:\n• Some providers offer recorded courses you can watch on your schedule\n• Must still attend any required live sessions\n• Check provider rules\n\nTOP PROVIDERS (examples):\n• Salem Community College - regularly offers CCB class\n• Local community colleges throughout Oregon - check your area\n• Private CCB education companies (search online for your county)\n• Some contractors associations offer the class\n\nCOST: Typically $150-300 per course\nDURATION: 3 hours of instruction (may be delivered over 1-3 sessions)\n\nACTION STEPS:\n1. Go to: https://www.oregon.gov/ccb/Pages/Education-Catalogs.aspx\n2. Look for "3 hr CCB classes live & online" section\n3. Find a provider near you or online option\n4. Check their schedule and registration\n5. Sign up at least 1-2 weeks before your target exam date\n6. Bring course completion certificate with you when you apply',
      resources: [
        { label: 'Find Pre-License Education Providers - LIVE & ONLINE', url: 'https://www.oregon.gov/ccb/Pages/Education-Catalogs.aspx#CatalogLiveOnline' },
        { label: 'Complete Education Catalogs List', url: 'https://www.oregon.gov/ccb/Pages/Education-Catalogs.aspx' },
        { label: 'Course Provider Resources', url: 'https://www.oregon.gov/ccb/Pages/education-providers.aspx' },
        { label: 'Contact CCB Education Team', url: 'https://www.oregon.gov/ccb/Pages/Contact-Us.aspx' }
      ]
    },
    {
      id: 'gc-exam-prep',
      title: 'Prepare for Licensing Exam',
      description: 'Study and prepare for the comprehensive CCB exam covering law, practices, and category-specific knowledge.',
      details: 'Exam covers: Oregon construction law, CCB rules, business practices, safety, dispute resolution, and specialty category requirements. Passing score typically 75%. Study guides available from CCB. Many use third-party study materials and practice exams.',
      resources: [
        { label: 'CCB Exam Information', url: 'https://www.oregon.gov/ccb/Pages/CCB%20License.aspx#HowToGetALicense' },
        { label: 'Exam Locations & Scheduling', url: 'https://www.oregon.gov/ccb/Pages/Forms.aspx' }
      ]
    },
    {
      id: 'gc-exam-sit',
      title: 'Take CCB Exam',
      description: 'Schedule and pass the CCB licensing examination.',
      details: 'Exam is proctored, typically 2-3 hours. Must score 75%+ to pass. If fail, can retake after waiting period. After passing, receive exam score report needed for license application.',
      resources: [
        { label: 'Schedule Exam', url: 'https://www.oregon.gov/ccb/Pages/Forms.aspx' },
        { label: 'Testing Accommodations Request', url: 'https://www.oregon.gov/ccb/Formslibrary/testing-accommodations.pdf' }
      ]
    },
    {
      id: 'gc-insurance',
      title: 'Obtain Liability & Workers Comp Insurance',
      description: 'Secure required insurance coverage before license application.',
      details: 'For a Residential General Contractor, ORS 701.081 specifies a $25,000 surety bond and at least $500,000 general liability insurance. Workers compensation requirements depend on whether the business has employees. The license must also have an RMI.',
      resources: [
        { label: 'Insurance & Bond Requirements', url: 'https://www.oregon.gov/ccb/Pages/Licensing.aspx#InsuranceAndBondResources' },
        { label: 'Approved Insurance/Bond Agents', url: 'https://www.oregon.gov/ccb/Pages/Licensing.aspx#InsuranceAndBondResources' },
        { label: 'HB 2922: Bond Increase Requirements', url: 'https://www.oregon.gov/ccb/Pages/Licensing.aspx#InsuranceAndBondResources' }
      ]
    },
    {
      id: 'gc-rmi',
      title: 'Designate Responsible Managing Individual (RMI)',
      description: 'Appoint a qualified RMI if licensing as business entity (LLC, Corporation, etc).',
      details: 'ORS 701.091 requires a licensed business to have at least one RMI. Under ORS 701.005(18), the RMI must be an owner or employee, exercise management or supervisory authority over construction activities, and satisfy the CCB training/testing or experience rule. The RMI is not a separate contractor endorsement.',
      resources: [
        { label: 'RMI Requirements & Exam', url: 'https://www.oregon.gov/ccb/Pages/CCB%20License.aspx#ResponsibleManagingIndividual' },
        { label: 'RMI Exam Information', url: 'https://www.oregon.gov/ccb/Pages/Education-Catalogs.aspx' }
      ]
    },
    {
      id: 'gc-apply',
      title: 'Submit License Application',
      description: 'Complete online application with all required documentation.',
      details: 'Application includes: personal/business info, exam score, insurance/bond certificates, RMI info (if applicable), work history/references, fee payment. Submit through CCB online portal. Current fee: ~$200-400 depending on category. Processing time: 2-4 weeks.',
      resources: [
        { label: 'Online License Application', url: 'https://or.accessgov.com/ccb/Forms/Page/ccb/ccbapplication/?asAdmin=False' },
        { label: 'CCB Forms & Fees', url: 'https://www.oregon.gov/ccb/Pages/Forms.aspx' },
        { label: 'Setup Online Account Guide', url: 'https://www.oregon.gov/ccb/Documents/Guide%20to%20Setup%20Online%20Account.pdf' }
      ]
    },
    {
      id: 'gc-approval',
      title: 'License Approved & Issued',
      description: 'Receive CCB license number and certificate. Begin work.',
      details: 'License is valid for 2 years. Must display license number on all advertising (website, business cards, vehicles, etc). License number format: CCB# followed by 6 digits. Contractor must maintain insurance/bonds throughout license period. Renewal required every 2 years.',
      resources: [
        { label: 'License Holder Search', url: 'https://search.ccb.state.or.us/search/' },
        { label: 'License Renewal Information', url: 'https://www.oregon.gov/ccb/Pages/CCB%20License.aspx#OnlineRenewal' }
      ]
    },
    {
      id: 'gc-maintain',
      title: 'Maintain Compliance & Renew',
      description: 'Keep license active by maintaining requirements and completing renewals.',
      details: 'Annual: Maintain liability insurance & surety bond. Every 2 years: Renew license with updated insurance/bond certificates, pay renewal fee (~$200). Every license period: Maintain customer records, contracts, comply with dispute resolution rules. Failure to renew results in license expiration and loss of ability to legally contract as licensed contractor.',
      resources: [
        { label: 'Online License Renewal', url: 'https://portal.ccb.state.or.us/' },
        { label: 'Continuing Education Courses', url: 'https://www.oregon.gov/ccb/Pages/Continuing-Education.aspx' },
        { label: 'Contractor Compliance Rules', url: 'https://www.oregon.gov/ccb/Pages/Contractor%20Compliance.aspx' }
      ]
    }
  ];

  const verifiedDetails: Record<string, string> = {
      'gc-requirements-legacy': 'YOUR MOST LIKELY PATHS:\n\n1. OWNER-BUILDER PATH:\n• ORS 701.010(7) exempts a person performing work on property they own or on their residence, unless the work is part of an independent business intended to sell the structure.\n• ORS 701.325 requires an owner-builder to sign the owner-responsibility notice and hire only properly licensed and endorsed contractors when hiring contractors.\n• Confirm with Tillamook County Building before relying on this exemption for the permit.\n\n2. LICENSED CONTRACTOR PATH:\n• The applicable endorsement for this house is generally Residential General Contractor, not "Class B."\n• Oregon law requires a residential general contractor to maintain a $25,000 surety bond, at least $500,000 general liability insurance, and an RMI.\n• The RMI must exercise management or supervisory authority and satisfy the CCB training/testing or experience rule.\n\nHOW YOUR BACKGROUND FITS:\n• Your renovations, commercial buildout, and current owner-builder project are strong evidence of management and construction competency for an RMI review. Preserve contracts, permits, invoices, schedules, photos, budgets, and subcontractor records.\n• Your economics degree is expressly recognized in the commercial key-employee statute as substituting for up to two years of commercial experience; that rule does not create a residential experience prerequisite.\n• A clean criminal record and willingness to obtain the bond are favorable, but neither replaces the endorsement, RMI, education/testing, insurance, and application requirements.\n\nRECOMMENDED NEXT ACTION:\nCall CCB at 503-378-4621 and ask them to confirm in writing whether you should use the owner-builder exemption or apply for a Residential General Contractor license, and whether your owner-led project history is sufficient for you to serve as the RMI. Keep the response with the permit file.',
      'gc-requirements': 'EXACT BOARD-BASED CHECKLIST:\n\n• ENDORSEMENT: Apply for the Residential General Contractor endorsement. ORS 701.021(2) lists this endorsement for work connected with a residential structure.\n• TRAINING AND TEST: ORS 701.122 requires CCB-prescribed training on construction business practices and laws, and a board-approved test on those subjects. The current CCB/provider materials identify 16 hours of pre-license education before the exam.\n• RMI: ORS 701.081 requires a residential general contractor to have an RMI. Under ORS 701.005(18), the RMI must be an owner or employee, exercise management or supervisory authority over construction activities, and satisfy the CCB training/testing or experience rule.\n• BOND: ORS 701.081(1)(a) requires a $25,000 surety bond.\n• LIABILITY INSURANCE: ORS 701.081(1)(b) requires at least $500,000 general liability insurance.\n• APPLICATION: ORS 701.046 requires the endorsement, business/owner/RMI information, required tax and insurance information, and disclosures requested by the board.\n• BUSINESS STATUS: The applicant must qualify as an independent contractor under ORS 670.600 and the CCB classification rules under ORS 701.035.\n• RENEWAL: Residential contractors generally must complete 8 hours of continuing education during each two-year renewal period under ORS 701.082, subject to statutory exceptions.\n\nOWNER-BUILDER ALTERNATIVE:\nORS 701.010(7) can exempt an owner performing work on their own property or residence when the project is not an independent business intended for sale. ORS 701.325 requires the owner-builder permit statement and properly licensed/endorsed contractors for contracted work. Confirm this path with Tillamook County Building before choosing it.\n\nYOUR BACKGROUND:\nYour owner-led renovations, commercial buildout, and current build are useful RMI evidence. Your economics degree is expressly relevant to commercial key-employee experience substitutions under ORS 701.050, but that commercial rule does not impose or remove a residential experience requirement. Ask CCB to confirm how they will evaluate your owner-led experience.',
    'gc-education': 'COURSE REQUIREMENTS:\n• Complete 16 hours of CCB-approved pre-license education before taking the exam.\n• Use a provider listed by the Oregon CCB; online and in-person options may be available.\n• Confirm the provider issues the completion record needed for your exam/application.\n\nCONTENT AND FORMAT:\n• The course prepares applicants for Oregon contractor business, law, and project-management topics.\n• The linked provider guide identifies the NASCLA Contractors Guide to Business, Law, and Project Management as the exam subject matter.\n• Verify current price, schedule, delivery format, and completion rules with the provider.\n\nACTION STEPS:\n1. Open the CCB pre-license provider page.\n2. Select a current 16-hour approved course.\n3. Complete all required hours and retain the completion record.\n4. Register for the exam through PSI after meeting the education requirement.'
  };

  const handleToggle = (stepId: string) => {
    toggle(stepId);
  };

  return (
    <>
      <Card title="🏗️ Oregon Residential General Contractor License">
        <p style={{ marginBottom: '20px' }}>
          Step-by-step guide to obtaining an Oregon Construction Contractors Board (CCB) general contractor license.
          This tracker helps you follow the entire process from qualification verification through license maintenance.
        </p>

        <div style={{ marginBottom: '20px', padding: '15px', background: 'var(--success-light)', borderRadius: '6px' }}>
          <p style={{ margin: '0', fontSize: '.95rem' }}>
            <strong>Key Point:</strong> Oregon requires all construction contractors to be licensed through the CCB.
            A residential general contractor endorsement may allow management and subcontracting of residential construction work; confirm the endorsement and scope with CCB.
            The timeline depends on education, exam scheduling, insurance, and application processing.
          </p>
        </div>

        <div className="stat-sec">
          <h3>📋 GC License Process Steps</h3>
          <p style={{ marginBottom: '15px', fontSize: '.9rem', color: 'var(--text-light)' }}>
            <span style={{ color: 'var(--success)' }}>●</span> Completed{' '}
            <span style={{ color: 'var(--warning)' }}>●</span> In Progress{' '}
            <span style={{ color: 'var(--border)' }}>●</span> Not Started
          </p>

          <div className="tl">
            {gcSteps.map((step, idx) => {
              const stepStatus = status[step.id] || '';
              const statusIcon = 
                stepStatus === 'done' ? '✓' :
                stepStatus === 'wip' ? '→' :
                '○';
              const statusColor =
                stepStatus === 'done' ? 'var(--success)' :
                stepStatus === 'wip' ? 'var(--warning)' :
                'var(--border)';

              return (
                <div
                  key={step.id}
                  onClick={() => handleToggle(step.id)}
                  style={{
                    padding: '12px',
                    marginBottom: '10px',
                    border: '1px solid var(--border)',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    background: statusIcon !== '○' ? 'var(--bg-secondary)' : 'transparent',
                    transition: 'all 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--secondary)'}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border)'}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <span
                      style={{
                        color: statusColor,
                        fontSize: '1.2rem',
                        fontWeight: 'bold',
                        minWidth: '24px',
                        textAlign: 'center'
                      }}
                    >
                      {statusIcon}
                    </span>
                    <div style={{ flex: 1 }}>
                      <h4 style={{ margin: '0 0 5px 0', color: 'var(--text)' }}>
                        {idx + 1}. {step.title}
                      </h4>
                      <p style={{ margin: '0 0 8px 0', fontSize: '.9rem', color: 'var(--text-light)' }}>
                        {step.description}
                      </p>
                      {step.details && (
                        <div style={{ marginTop: '8px', paddingTop: '8px', borderTop: '1px solid var(--border)' }}>
                          <p style={{ margin: '0 0 8px 0', fontSize: '.85rem', color: 'var(--text)', whiteSpace: 'pre-line' }}>
                            <strong>Details:</strong>{'\n'}{verifiedDetails[step.id] || step.details}
                          </p>
                          {step.resources && step.resources.length > 0 && (
                            <div style={{ marginTop: '8px' }}>
                              <strong style={{ fontSize: '.85rem' }}>Resources:</strong>
                              <ul style={{ margin: '5px 0 0 20px', padding: '0', fontSize: '.85rem' }}>
                                {step.resources.map((resource, ridx) => (
                                  <li key={ridx} style={{ marginBottom: '4px' }}>
                                    <a
                                      href={resource.url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      style={{ color: 'var(--secondary)' }}
                                    >
                                      {resource.label} →
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Card>

      <Card title="📞 Oregon CCB Contact Information">
        <div className="grid">
          <div>
            <h4>Main Office</h4>
            <p>
              <strong>Address:</strong> 201 High St. SE, Suite 600<br />
              Salem, OR 97301<br />
              <strong>Phone:</strong> (503) 378-4621<br />
              <strong>Hours:</strong> Mon-Fri, 8:00 AM - 5:00 PM<br />
              <strong>Email:</strong> license.ccb@oregon.gov
            </p>
          </div>
          <div>
            <h4>Key Resources</h4>
            <ul style={{ paddingLeft: '20px', margin: '0' }}>
              <li><a href="https://www.oregon.gov/ccb/Pages/CCB%20License.aspx" target="_blank" rel="noopener noreferrer">How to Get a License</a></li>
              <li><a href="https://search.ccb.state.or.us/search/" target="_blank" rel="noopener noreferrer">License Holder Search</a></li>
              <li><a href="https://portal.ccb.state.or.us/" target="_blank" rel="noopener noreferrer">Online Services Portal</a></li>
              <li><a href="https://www.oregon.gov/ccb/Pages/Forms.aspx" target="_blank" rel="noopener noreferrer">Forms & Fees</a></li>
            </ul>
          </div>
        </div>
      </Card>

      <Card title="⏱️ Timeline & Cost Estimates">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
          <div style={{ padding: '12px', background: 'var(--bg-secondary)', borderRadius: '6px' }}>
            <h4 style={{ margin: '0 0 8px 0' }}>Total Timeline</h4>
            <p style={{ margin: '0', fontSize: '1.1rem', color: 'var(--secondary)' }}>
              <strong>Varies</strong>
            </p>
            <p style={{ margin: '5px 0 0 0', fontSize: '.85rem', color: 'var(--text-light)' }}>
              From application to approved license
            </p>
          </div>

          <div style={{ padding: '12px', background: 'var(--bg-secondary)', borderRadius: '6px' }}>
            <h4 style={{ margin: '0 0 8px 0' }}>License Application Fee</h4>
            <p style={{ margin: '0', fontSize: '1.1rem', color: 'var(--secondary)' }}>
              <strong>$200-400</strong>
            </p>
            <p style={{ margin: '5px 0 0 0', fontSize: '.85rem', color: 'var(--text-light)' }}>
              Varies by license category
            </p>
          </div>

          <div style={{ padding: '12px', background: 'var(--bg-secondary)', borderRadius: '6px' }}>
            <h4 style={{ margin: '0 0 8px 0' }}>Pre-License Course</h4>
            <p style={{ margin: '0', fontSize: '1.1rem', color: 'var(--secondary)' }}>
              <strong>~$150-300</strong>
            </p>
            <p style={{ margin: '5px 0 0 0', fontSize: '.85rem', color: 'var(--text-light)' }}>
              16-hour CCB required class
            </p>
          </div>

          <div style={{ padding: '12px', background: 'var(--bg-secondary)', borderRadius: '6px' }}>
            <h4 style={{ margin: '0 0 8px 0' }}>Exam Fee</h4>
            <p style={{ margin: '0', fontSize: '1.1rem', color: 'var(--secondary)' }}>
              <strong>~$100-150</strong>
            </p>
            <p style={{ margin: '5px 0 0 0', fontSize: '.85rem', color: 'var(--text-light)' }}>
              CCB licensing exam
            </p>
          </div>

          <div style={{ padding: '12px', background: 'var(--bg-secondary)', borderRadius: '6px' }}>
            <h4 style={{ margin: '0 0 8px 0' }}>Insurance (Annual)</h4>
            <p style={{ margin: '0', fontSize: '1.1rem', color: 'var(--secondary)' }}>
              <strong>$500-2,000+</strong>
            </p>
            <p style={{ margin: '5px 0 0 0', fontSize: '.85rem', color: 'var(--text-light)' }}>
              Liability + workers comp + surety
            </p>
          </div>

          <div style={{ padding: '12px', background: 'var(--bg-secondary)', borderRadius: '6px' }}>
            <h4 style={{ margin: '0 0 8px 0' }}>License Renewal (2 years)</h4>
            <p style={{ margin: '0', fontSize: '1.1rem', color: 'var(--secondary)' }}>
              <strong>~$200-400</strong>
            </p>
            <p style={{ margin: '5px 0 0 0', fontSize: '.85rem', color: 'var(--text-light)' }}>
              Biennial renewal fee
            </p>
          </div>
        </div>

        <p style={{ marginTop: '15px', fontSize: '.9rem', color: 'var(--text-light)' }}>
          <strong>Total One-Time Cost:</strong> ~$950-1,350 (plus insurance). Insurance is annual and varies by coverage level.
        </p>
      </Card>

      <Card title="💡 Important Notes">
        <ul style={{ paddingLeft: '20px' }}>
          <li style={{ marginBottom: '10px' }}>
            <strong>License Numbers Required:</strong> All advertising (website, business cards, vehicles, contracts) must display your CCB license number.
          </li>
          <li style={{ marginBottom: '10px' }}>
            <strong>Experience Documentation:</strong> You'll need to document 4+ years of relevant construction experience with references. Apprenticeships and technical degrees may count toward experience requirements.
          </li>
          <li style={{ marginBottom: '10px' }}>
            <strong>RMI for Business Entities:</strong> If licensing as LLC, Corporation, or Partnership, you must designate a Responsible Managing Individual (RMI) who passes a separate exam and meets experience requirements.
          </li>
          <li style={{ marginBottom: '10px' }}>
            <strong>Insurance Required Before Approval:</strong> You cannot receive final license approval without proof of liability insurance and surety bond in place.
          </li>
          <li style={{ marginBottom: '10px' }}>
            <strong>Exam is Pass/Fail:</strong> You must score 75% or higher to pass. If you fail, you can retake the exam after a waiting period (typically 2-4 weeks).
          </li>
          <li style={{ marginBottom: '10px' }}>
            <strong>License Validity:</strong> Licenses are valid for 2 years from issuance. Must renew before expiration to continue legal operation.
          </li>
          <li style={{ marginBottom: '10px' }}>
            <strong>Solo Proprietor Option:</strong> If you operate as sole proprietor (not LLC/Corp), you apply directly as an individual. You become the RMI automatically.
          </li>
        </ul>
      </Card>
    </>
  );
}
