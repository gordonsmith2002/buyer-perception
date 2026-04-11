import { DM_Sans, Playfair_Display } from "next/font/google";
import "./report.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--bp-font-playfair",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--bp-font-sans",
});

const dimensions = [
  { name: "Responsiveness", score: 3.9, low: 2.0, high: 6.0, predicted: 7.0 },
  { name: "People", score: 6.2, low: 5.0, high: 8.0, predicted: 7.5 },
  { name: "Proposal", score: 4.6, low: 3.0, high: 6.5, predicted: 6.5 },
  { name: "Pricing", score: 5.4, low: 4.0, high: 7.0, predicted: 5.0 },
  { name: "Product", score: 5.4, low: 4.5, high: 6.5, predicted: 7.0 },
];

const ringSize = 300;
const radius = 118;
const circumference = 2 * Math.PI * radius;
const score = 5.1;
const progress = score / 10;
const dashOffset = circumference * (1 - progress);

function scoreClass(value: number) {
  if (value < 4) return "is-negative";
  if (value < 7) return "is-mid";
  return "is-positive";
}

function PageFooter({ page }: { page: number }) {
  return (
    <footer className="bp-footer">
      Buyer Perception | Confidential | Page {page}
    </footer>
  );
}

function PageContainer({
  page,
  className = "",
  children,
}: {
  page: number;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section className={`bp-page ${className}`.trim()}>
      {children}
      <PageFooter page={page} />
    </section>
  );
}

export default function ReportPage() {
  return (
    <div className={`bp-report ${playfair.variable} ${dmSans.variable}`}>
      <PageContainer page={1} className="bp-cover">
        <p className="bp-brand">Buyer Perception</p>
        <div className="bp-cover-center">
          <h1>Buyer Perception Report</h1>
          <p className="bp-cover-subtitle">New Business Analysis</p>
          <p className="bp-cover-client">Prepared for Meridian Solutions</p>
          <p className="bp-cover-date">April 2026</p>
        </div>
      </PageContainer>

      <PageContainer page={2}>
        <p className="bp-eyebrow">Executive Summary</p>
        <h2>Where You Lose Is How You Sell</h2>
        <div className="bp-metric-grid">
          <article className="bp-card">
            <p className="bp-label">Buyer Perception Score</p>
            <p className="bp-big-number">5.1 / 10</p>
            <p>Based on 10 anonymous interviews</p>
          </article>
          <article className="bp-card">
            <p className="bp-label">Advocate : Critic Ratio</p>
            <p className="bp-big-number">2 : 5</p>
            <p>3 neutral. Net negative position.</p>
          </article>
          <article className="bp-card">
            <p className="bp-label">Largest Perception Gap</p>
            <p className="bp-big-number">-3.1</p>
            <p>Responsiveness: predicted 7.0, actual 3.9</p>
          </article>
          <article className="bp-card">
            <p className="bp-label">Pipeline Impact</p>
            <p className="bp-big-number">-£170K+ / year</p>
            <p>Estimated invisible pipeline damage</p>
          </article>
        </div>
        <hr />
        <ol className="bp-findings">
          <li>
            You are not losing deals because of what you sell. You are losing
            them because of how you sell.
          </li>
          <li>
            Leadership predicted pricing was your weakest dimension. Buyers say
            it&apos;s responsiveness — by a significant margin.
          </li>
          <li>
            5 of your 10 lost prospects are actively warning peers away from
            you. 2 are recommending you despite choosing a competitor.
          </li>
        </ol>
        <blockquote>
          Biggest action: Fix first-response time. This single change addresses
          the most cited negative factor across all interviews.
        </blockquote>
      </PageContainer>

      <PageContainer page={3}>
        <p className="bp-eyebrow">Buyer Perception Score</p>
        <h2>The Headline Number</h2>
        <div className="bp-score-layout">
          <div className="bp-ring-wrap">
            <svg width={ringSize} height={ringSize} viewBox="0 0 300 300">
              <circle
                cx="150"
                cy="150"
                r={radius}
                className="bp-ring-track"
                strokeDasharray={circumference}
              />
              <circle
                cx="150"
                cy="150"
                r={radius}
                className={`bp-ring-progress ${scoreClass(score)}`}
                strokeDasharray={circumference}
                strokeDashoffset={dashOffset}
              />
            </svg>
            <div className="bp-ring-score">
              <p>Buyer Perception Score</p>
              <strong>5.1 / 10</strong>
            </div>
          </div>
          <div>
            <p>
              Your Buyer Perception Score of 5.1 places you below the threshold
              where lost prospects are likely to speak positively about you to
              peers.
            </p>
            <p>
              Your strongest dimension is the quality of your people (6.2). Your
              weakest is responsiveness (3.9), cited by 8 of 10 interviewees as
              a significant negative factor.
            </p>
          </div>
        </div>
        <div className="bp-dimension-list">
          {dimensions.map((item) => (
            <div key={item.name} className="bp-dimension-row">
              <div className="bp-dimension-head">
                <span>{item.name}</span>
                <span className={scoreClass(item.score)}>{item.score}</span>
              </div>
              <div className="bp-bar-track">
                <div
                  className={`bp-bar-fill ${scoreClass(item.score)}`}
                  style={{ width: `${(item.score / 10) * 100}%` }}
                />
              </div>
              <p className="bp-muted">
                Range: {item.low.toFixed(1)} - {item.high.toFixed(1)}
              </p>
            </div>
          ))}
        </div>
      </PageContainer>

      <PageContainer page={4}>
        <p className="bp-eyebrow">The Perception Gap</p>
        <h2>Leadership Assumption vs Buyer Reality</h2>
        <div className="bp-table">
          <div className="bp-table-row bp-table-head">
            <span>Dimension</span>
            <span>Predicted</span>
            <span>Actual</span>
            <span>Gap</span>
          </div>
          {dimensions.map((item) => {
            const gap = Number((item.score - item.predicted).toFixed(1));
            return (
              <div className="bp-table-row" key={item.name}>
                <span>{item.name}</span>
                <span>{item.predicted.toFixed(1)}</span>
                <span>{item.score.toFixed(1)}</span>
                <span className={scoreClass(gap + 5)}>{gap > 0 ? "+" : ""}{gap}</span>
              </div>
            );
          })}
        </div>
        <div className="bp-pair-bars">
          {dimensions.map((item) => (
            <div className="bp-pair-row" key={`${item.name}-pair`}>
              <span>{item.name}</span>
              <div className="bp-pair-track">
                <div
                  className="bp-predicted"
                  style={{ width: `${(item.predicted / 10) * 100}%` }}
                />
                <div
                  className={`bp-actual ${scoreClass(item.score)}`}
                  style={{ width: `${(item.score / 10) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
        <hr />
        <div className="bp-table">
          <div className="bp-table-row bp-table-head">
            <span>Prediction</span>
            <span>You Said</span>
            <span>Reality</span>
          </div>
          <div className="bp-table-row bp-three-col">
            <span>Advocate/Critic split</span>
            <span>&quot;7 of 10 positive&quot;</span>
            <span>2 advocates, 3 neutral, 5 critics</span>
          </div>
          <div className="bp-table-row bp-three-col">
            <span>Top competitor</span>
            <span>&quot;Apex Systems&quot;</span>
            <span>Actually losing most to Vanguard Tech</span>
          </div>
          <div className="bp-table-row bp-three-col">
            <span>Primary loss reason</span>
            <span>&quot;Pricing&quot;</span>
            <span>Responsiveness and proposal quality</span>
          </div>
          <div className="bp-table-row bp-three-col">
            <span>% winnable</span>
            <span>&quot;60%&quot;</span>
            <span>8 of 10 said outcome could have changed</span>
          </div>
        </div>
        <blockquote>
          The largest perception gap is responsiveness — leadership estimated
          7.0, buyers scored 3.9.
        </blockquote>
      </PageContainer>

      <PageContainer page={5}>
        <p className="bp-eyebrow">Methodology</p>
        <h2>How This Assessment Was Built</h2>
        <ul className="bp-bullets">
          <li>10 anonymous interviews with lost prospects (last 6 months)</li>
          <li>Contacts provided by Meridian Solutions; outreach from CEO email</li>
          <li>All interviews conducted by independent researcher</li>
          <li>Average duration: 22 minutes</li>
          <li>£100 incentive per participant</li>
          <li>Findings reported in aggregate; no individual attribution</li>
          <li>Scoring: 1-10 across five dimensions, simple averages</li>
          <li>Advocate/Critic classification set by interviewer judgment</li>
          <li>Three-layer comparison: CRM, leadership predictions, buyer reality</li>
        </ul>
      </PageContainer>

      <PageContainer page={6}>
        <p className="bp-eyebrow">Advocate / Critic Map</p>
        <h2>2 Advocates : 3 Neutral : 5 Critics</h2>
        <div className="bp-map-grid">
          {[
            ["LD-1", "Advocate", "Would actively recommend. Praised technical depth.", "Yes — told 2 peers"],
            ["LD-2", "Advocate", "Positive overall. Recommend with caveats about speed.", "No"],
            ["LD-3", "Neutral", "No strong feeling. Forgettable experience.", "No"],
            ["LD-4", "Neutral", "Positive on people, negative on process.", "No"],
            ["LD-5", "Neutral", "Wouldn't go out of their way.", "No"],
            ["LD-6", "Critic", "Frustrated by responsiveness. Told colleague elsewhere.", "Yes — 1 peer"],
            ["LD-7", "Critic", "Proposal showed lack of interest.", "Yes — 2 peers"],
            ["LD-8", "Critic", "Described experience as wasted time.", "Yes — 2 peers"],
            ["LD-9", "Critic", "Warned peers at a conference.", "Yes — 3 peers"],
            ["LD-10", "Critic", "Went dark after poor first interaction.", "Yes — 2 peers"],
          ].map(([id, type, descriptor, active]) => (
            <article
              key={id}
              className={`bp-map-card ${
                type === "Advocate"
                  ? "is-positive"
                  : type === "Critic"
                    ? "is-negative"
                    : "is-neutral"
              }`}
            >
              <p className="bp-label">{id}</p>
              <p className="bp-map-type">{type}</p>
              <p>{descriptor}</p>
              <p className="bp-active">{active}</p>
            </article>
          ))}
        </div>
      </PageContainer>

      <PageContainer page={7}>
        <p className="bp-eyebrow">Product vs Process</p>
        <h2>Verdict: 80% Process / 20% Product</h2>
        <div className="bp-8020">
          <div className="bp-process">Process 80%</div>
          <div className="bp-product">Product 20%</div>
        </div>
        <div className="bp-two-col">
          <div>
            <p className="bp-label">Process Issues (8/10 cited)</p>
            <ul className="bp-bullets">
              <li>Slow initial responsiveness (8/10)</li>
              <li>Generic proposals (6/10)</li>
              <li>Too many handoffs (4/10)</li>
              <li>No post-decision follow-up (10/10)</li>
            </ul>
          </div>
          <div>
            <p className="bp-label">Product Issues (2/10 cited)</p>
            <ul className="bp-bullets">
              <li>Missing enterprise integrations (2/10)</li>
              <li>Feature parity concerns vs Vanguard Tech (2/10)</li>
            </ul>
          </div>
        </div>
        <blockquote>
          &quot;Your product was actually our first choice on paper. But the way
          we were treated during the evaluation made us feel like you didn&apos;t
          want our business.&quot; — LD-7
        </blockquote>
      </PageContainer>

      <PageContainer page={8}>
        <p className="bp-eyebrow">Buyer Perception Breakdown</p>
        <h2>Dimension-by-Dimension Journey</h2>
        <div className="bp-breakdown">
          <article>
            <h3>Responsiveness (3.9) — Δ-2.9</h3>
            <p className="bp-quote">
              &quot;I filled in their contact form on a Monday. Didn&apos;t hear
              back until Thursday.&quot; — LD-6
            </p>
            <p className="bp-quote">
              &quot;Their competitor called me back within two hours.&quot; —
              LD-9
            </p>
          </article>
          <article>
            <h3>People (6.2) — Δ+2.3</h3>
            <p className="bp-quote">
              &quot;The engineer clearly knew their stuff. But the account
              manager spent too long on slides.&quot; — LD-4
            </p>
            <p>Strength: Engineering credibility. Deploy earlier in process.</p>
          </article>
          <article>
            <h3>Proposal (4.6) — Δ-1.6</h3>
            <p className="bp-quote">
              &quot;It felt like they&apos;d done a find-and-replace with our
              company name.&quot; — LD-8
            </p>
            <p className="bp-quote">
              &quot;The price was fine — but I couldn&apos;t tell what I was
              getting for it.&quot; — LD-3
            </p>
          </article>
          <article>
            <h3>Pricing (5.4) — Δ+0.8</h3>
            <p className="bp-quote">
              &quot;I had to ask three times for a breakdown. That
              shouldn&apos;t be difficult.&quot; — LD-5
            </p>
          </article>
          <article>
            <h3>Product (5.4) — Δ+0.0</h3>
            <p className="bp-quote">
              &quot;The product was fine. It wasn&apos;t the product that lost
              them the deal — it was everything around it.&quot; — LD-2
            </p>
          </article>
        </div>
      </PageContainer>

      <PageContainer page={9}>
        <p className="bp-eyebrow">Competitor Intelligence</p>
        <h2>Who You&apos;re Losing To and Why</h2>
        <div className="bp-table">
          <div className="bp-table-row bp-table-head">
            <span>Competitor</span>
            <span>Deals</span>
            <span>Primary Differentiator</span>
          </div>
          <div className="bp-table-row bp-three-col">
            <span>Vanguard Tech</span>
            <span>4/10</span>
            <span>Speed + tailored proposals</span>
          </div>
          <div className="bp-table-row bp-three-col">
            <span>Apex Systems</span>
            <span>3/10</span>
            <span>Existing relationship / incumbent</span>
          </div>
          <div className="bp-table-row bp-three-col">
            <span>No decision</span>
            <span>2/10</span>
            <span>Couldn&apos;t justify internally</span>
          </div>
          <div className="bp-table-row bp-three-col">
            <span>Unknown</span>
            <span>1/10</span>
            <span>Declined to share</span>
          </div>
        </div>
        <blockquote>
          CRM says Apex Systems is your top competitor. Buyers say Vanguard
          Tech.
        </blockquote>
      </PageContainer>

      <PageContainer page={10}>
        <p className="bp-eyebrow">Competitor Intelligence</p>
        <h2>Where You Rank in the Buying Experience</h2>
        <ol className="bp-ranking">
          <li>
            <strong>Vanguard Tech</strong> — Fast, tailored, made us feel like a
            priority
          </li>
          <li>
            <strong>Apex Systems</strong> — Known quantity, safe choice
          </li>
          <li>
            <strong>Meridian Solutions</strong> — Best technical team, but
            hardest to buy from
          </li>
          <li>
            <strong>Others</strong> — Inconsistent and less credible
          </li>
        </ol>
        <blockquote>
          You are not losing on capability. You are losing on experience.
        </blockquote>
      </PageContainer>

      <PageContainer page={11}>
        <p className="bp-eyebrow">Team Perception</p>
        <h2>Trusted Advisor Spectrum</h2>
        <div className="bp-spectrum">
          <span>Trusted Advisor</span>
          <div className="bp-spectrum-track">
            <div className="bp-spectrum-point" style={{ left: "40%" }}>
              Meridian (40%)
            </div>
          </div>
          <span>Salesperson</span>
        </div>
        <p>
          4 of 10 buyers weren&apos;t the decision-maker. Sales should have
          engaged a different stakeholder earlier.
        </p>
        <blockquote>
          &quot;I could recommend, but I couldn&apos;t sign off. They needed to
          be speaking to my VP about six weeks earlier.&quot; — LD-4
        </blockquote>
        <p>
          Coaching verdict: lead with questions, bring engineers earlier, and
          run a 70/30 discovery-to-capability ratio.
        </p>
      </PageContainer>

      <PageContainer page={12}>
        <p className="bp-eyebrow">CRM vs Reality</p>
        <h2>Only 20% of CRM Loss Reasons Matched Reality</h2>
        <div className="bp-table">
          <div className="bp-table-row bp-table-head">
            <span>Contact</span>
            <span>CRM Says</span>
            <span>Buyer Actually Said</span>
          </div>
          {[
            ["LD-1", "Pricing", "Budget issue with CFO, not pricing. Would have bought."],
            ["LD-2", "Went with competitor", "Competitor was faster. Product secondary."],
            ["LD-3", "Pricing", "Pricing fine. Proposal generic."],
            ["LD-4", "No decision", "Could not get internal buy-in. Meridian did not help build case."],
            ["LD-5", "Unresponsive", "They were unresponsive to us."],
            ["LD-6", "Went with competitor", "Competitor responded in 2 hours. Meridian took 4 days."],
            ["LD-7", "Pricing", "Nothing to do with pricing. Proposal was lazy."],
            ["LD-8", "Timing", "Timing was fine. Process was not easy."],
            ["LD-9", "Went with competitor", "Warned peers to avoid."],
            ["LD-10", "Unresponsive", "Went dark because nobody followed up with us."],
          ].map((row) => (
            <div className="bp-table-row bp-three-col" key={row[0]}>
              <span>{row[0]}</span>
              <span>{row[1]}</span>
              <span>{row[2]}</span>
            </div>
          ))}
        </div>
      </PageContainer>

      <PageContainer page={13}>
        <p className="bp-eyebrow">Process Fixes</p>
        <h2>Operational Changes You Can Implement Fast</h2>
        <div className="bp-three-stack">
          <article>
            <p className="bp-label">Immediate</p>
            <ol className="bp-findings">
              <li>Fix first-response time. Target sub-4-hour.</li>
              <li>Rebuild proposal template around client context and 90-day plan.</li>
            </ol>
          </article>
          <article>
            <p className="bp-label">This Quarter</p>
            <ol className="bp-findings">
              <li>Restructure first meetings to 70% discovery / 30% capability.</li>
              <li>Deploy engineering team earlier in buying process.</li>
              <li>Use single point of contact per deal.</li>
            </ol>
          </article>
          <article>
            <p className="bp-label">Strategic</p>
            <ol className="bp-findings">
              <li>Install post-loss follow-up process.</li>
              <li>Target the right stakeholder earlier.</li>
            </ol>
          </article>
        </div>
      </PageContainer>

      <PageContainer page={14}>
        <p className="bp-eyebrow">Product Recommendations</p>
        <h2>Fix Process First, Then Product Gaps</h2>
        <ol className="bp-findings">
          <li>Investigate integration gap (2/10 cited) before roadmap commitment.</li>
          <li>
            Avoid over-investing in product because 8/10 losses were process-driven.
          </li>
        </ol>
        <blockquote>
          &quot;The product was fine. It wasn&apos;t the product that lost them
          the deal — it was everything around it.&quot; — LD-2
        </blockquote>
      </PageContainer>

      <PageContainer page={15}>
        <p className="bp-eyebrow">Strengths to Double Down On</p>
        <h2>What to Protect and Amplify</h2>
        <ol className="bp-findings">
          <li>
            Technical team is a competitive advantage (6.2). Deploy earlier and
            more visibly.
          </li>
          <li>Pricing is competitive. Stop discounting; improve communication.</li>
          <li>Product is a credible contender and drives recommendation behavior.</li>
          <li>Buyers remember you, including critics who still recalled positives.</li>
        </ol>
      </PageContainer>

      <PageContainer page={16}>
        <p className="bp-eyebrow">The Bigger Picture</p>
        <h2>An Editorial Readout for Leadership</h2>
        <div className="bp-longform">
          <p>
            Meridian Solutions is not losing deals because of what it sells. It
            is losing deals because of how it sells.
          </p>
          <p>
            The gap between internal perception and buyer reality is significant.
            Leadership predicted 7.0 for responsiveness; buyers scored it 3.9.
            Leadership believed pricing was the primary weakness; buyers said
            proposal quality and speed were the bigger issues.
          </p>
          <p>
            One story leads to discounting and feature battles. The other leads
            to operational changes your team can implement in days.
          </p>
          <p>The choice is yours.</p>
        </div>
      </PageContainer>

      <PageContainer page={17}>
        <p className="bp-eyebrow">Pipeline Impact + What Happens Next</p>
        <h2>Commercial Upside of Perception Improvement</h2>
        <div className="bp-impact-grid">
          <article className="bp-card">
            <p className="bp-label">Critic damage</p>
            <p className="bp-big-number">£212,500</p>
            <p>5 critics x 2.5 conversations x 20% influence x £85K</p>
          </article>
          <article className="bp-card">
            <p className="bp-label">Advocate value</p>
            <p className="bp-big-number">£85,000</p>
            <p>2 advocates x 2.5 conversations x 20% influence x £85K</p>
          </article>
          <article className="bp-card">
            <p className="bp-label">Net position</p>
            <p className="bp-big-number is-negative">-£127,500 / year</p>
          </article>
          <article className="bp-card">
            <p className="bp-label">Potential swing</p>
            <p className="bp-big-number is-positive">£185K-£320K</p>
            <p>Move 3 critics to neutral and 2 to advocates</p>
          </article>
        </div>
        <blockquote>
          We recommend revisiting buyer perception in 6-9 months after
          implementing these changes.
        </blockquote>
      </PageContainer>
    </div>
  );
}
